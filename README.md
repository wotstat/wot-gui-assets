# wot-gui-assets

Публичная история GUI-ресурсов клиентов World of Tanks и «Мира танков». Служебный код и GitHub
Actions workflows находятся в ветке
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

Каждая production data-ветка начинается с bootstrap commit `init`, содержащего этот README. Каждый
следующий commit соответствует одной версии клиента: сообщение берётся из корневого
`version.xml` snapshot в формате `v.2.3.1.0 #903`, а точный release name записывается в
`.version_name`.

## Структура data-ветки

```text
README.md
.version_name
.publication.json
gui/                   # res/gui: base + default locale overlay; всё кроме .xml и .py
locales/<LANG>/gui/    # все res/gui locale overlays WG, включая default locale
```

Префикс `res/` удаляется, а папка `gui/` остаётся в корне data-ветки. Файлы с расширениями `.xml`
и `.py` не публикуются. Для клиентов Wargaming default locale накладывается поверх `base` в
`gui/`, а все локали, включая default locale, также сохраняются в `locales/<LANG>/gui/`.
У клиентов Lesta отдельного дерева `locales/` нет: локализованные ресурсы уже входят в `base`.

## Общая логика pipeline

```text
game-unpack-pipeline workflow_dispatch
  → временная VM в Selectel
  → три изолированных ephemeral JIT runner на одной VM
  → game-snapshot-builder собирает и запечатывает GameSnapshot
  → wot-src и wot-gui-assets workflow параллельно получают локальный путь и identity snapshot
  → каждый publisher проверяет snapshot и создаёт version commit в своей data-ветке
  → runner registrations и ресурсы Selectel удаляются
```

Snapshot не передаётся через Actions artifacts: publisher runner читают один immutable локальный
путь на VM, работая под отдельными Unix-пользователями и в разных рабочих каталогах.

Оркестратор вызывает workflow [`publish-snapshot.yml`](.github/workflows/publish-snapshot.yml)
только из служебной ветки `main`. Publisher независимо проверяет canonical descriptor, маркер
`READY`, snapshot identity, manifest hashes, payload hashes и полное manifest coverage. Затем он
проецирует `res/gui`, исключает `.xml` и `.py`, создаёт commit с версией из корневого
`version.xml` snapshot и отправляет его в ветку целевого региона. История data-ветки загружается
как commit-only partial fetch; payload предыдущих версий не скачивается.

Production-ветки принимают только `full` snapshot. Light-прогоны публикуются во временные ветки
`test/light-<target>`. Повторная публикация той же версии сравнивает только GUI-ресурсы, не считая
служебные метаданные изменением данных. При неизменных ресурсах publisher возвращает `unchanged`
без commit и push; при изменениях создаёт новый commit с тем же сообщением версии и обновлёнными
метаданными.

## Служебная ветка `main`

В `main` находятся workflow, конфигурация targets, publisher и тесты. Эти файлы не копируются в
data-ветки; там остаются только README, метаданные публикации и GUI-ресурсы конкретной версии.

Локальные проверки:

```bash
uv sync --frozen
uv run pytest
uv run ruff check .
uv run mypy
```
