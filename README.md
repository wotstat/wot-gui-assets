# wot-gui-assets

Публичная история GUI-ресурсов клиентов World of Tanks и «Мира танков». Служебный publisher-код
находится в ветке
[`main`](https://github.com/wotstat/wot-gui-assets/tree/main), а данные каждого клиента — в
отдельной региональной ветке.

## Регионы

| Клиент | Data-ветка |
| --- | --- |
| World of Tanks — Europe | [`wot-eu`](https://github.com/wotstat/wot-gui-assets/tree/wot-eu) |
| World of Tanks — North America | [`wot-na`](https://github.com/wotstat/wot-gui-assets/tree/wot-na) |
| World of Tanks — Asia | [`wot-asia`](https://github.com/wotstat/wot-gui-assets/tree/wot-asia) |
| World of Tanks — China | [`wot-cn`](https://github.com/wotstat/wot-gui-assets/tree/wot-cn) |
| World of Tanks — Common Test | [`wot-common-test`](https://github.com/wotstat/wot-gui-assets/tree/wot-common-test) |
| Мир танков — Россия | [`mt-ru`](https://github.com/wotstat/wot-gui-assets/tree/mt-ru) |
| Мир танков — Public Test | [`mt-public-test`](https://github.com/wotstat/wot-gui-assets/tree/mt-public-test) |

Каждая production data-ветка начинается с bootstrap commit `init`, содержащего этот README. Каждая
публикация завершается version commit: его сообщение строится из корневого `version.xml` snapshot
без префикса `v.` в формате `2.3.1.0 #903`, а точный release name записывается в `.version_name`.
Транспортные staging commits в историю data-ветки не входят.

## Структура data-ветки

```text
README.md
.version_name
.publication.json
gui/                   # res/gui: base + default locale overlay; всё кроме .py
locales/<LANG>/gui/    # все res/gui locale overlays WG, включая default locale
```

Префикс `res/` удаляется, а папка `gui/` остаётся в корне data-ветки. Файлы с расширением `.py`
не публикуются. Для клиентов Wargaming default locale накладывается поверх `base` в
`gui/`, а все локали, включая default locale, также сохраняются в `locales/<LANG>/gui/`.
У клиентов Lesta отдельного дерева `locales/` нет: локализованные ресурсы уже входят в `base`.

## Общая логика pipeline

```text
game-unpack-pipeline workflow_dispatch
  → временная VM в Selectel
  → три изолированных ephemeral JIT runner на одной VM
  → game-snapshot-builder собирает и запечатывает GameSnapshot
  → orchestrator-owned publisher jobs получают локальный путь и identity snapshot
  → каждый publisher проверяет snapshot и создаёт version commit в своей data-ветке
  → runner registrations и ресурсы Selectel удаляются
```

Snapshot не передаётся через Actions artifacts: publisher runners читают один immutable локальный
путь на VM, работая под отдельными Unix-пользователями и в разных рабочих каталогах.

Оркестратор владеет lifecycle publication job и checkout’ит этот репозиторий по закреплённому
commit SHA. Data-ветка, конфигурация и publisher-код остаются здесь, а workflow, Environment и JIT
runner принадлежат `game-unpack-pipeline`. Publisher независимо проверяет canonical descriptor, маркер
`READY`, snapshot identity, manifest hashes, payload hashes и полное manifest coverage. Затем он
проецирует `res/gui`, исключает `.py`, создаёт commit с версией из корневого
`version.xml` snapshot и отправляет его в ветку целевого региона. История data-ветки загружается
как commit-only partial fetch; payload предыдущих версий не скачивается.

Production-ветки принимают только `full` snapshot. Light-прогоны публикуются во временные ветки
`test/light-<target>`. Повторная публикация той же версии сравнивает только GUI-ресурсы, не считая
служебные метаданные изменением данных. При неизменных ресурсах publisher возвращает `unchanged`
без commit и push; при изменениях создаёт новый commit с тем же сообщением версии и обновлёнными
метаданными.

Если суммарный размер изменённых Git blobs превышает 1 ГБ, publisher загружает их порциями не
более 1 ГБ как цепочку служебных commits, начинающуюся от текущей data-версии, через уникальную
временную ветку `publication-staging/...`. Каждый commit кумулятивно дополняет tree следующей
порцией; tree последнего commit должен точно совпасть с локальным publication tree. Затем publisher
через GitHub Git Database API создаёт на уже загруженном tree один version commit и без force
обновляет production-ref. Временный ref удаляется и при успехе, и при ошибке; служебные commits не
попадают в production-историю.
Отдельный файл по-прежнему не может превышать лимит GitHub 100 МиБ.

Причины этой схемы, обязательные инварианты и inventory удаляемой legacy-совместимости описаны в
[`docs/publication-transport.md`](docs/publication-transport.md).

## Служебная ветка `main`

В `main` находятся конфигурация targets, publisher и тесты. Эти файлы не копируются в
data-ветки; там остаются только README, метаданные публикации и GUI-ресурсы конкретной версии.

Локальные проверки:

```bash
uv sync --frozen
uv run pytest
uv run ruff check .
uv run mypy
```
