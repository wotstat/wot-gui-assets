# Контекст проекта для агентов

## Назначение репозитория

`wot-gui-assets` хранит publisher-код в `main` и чистые GUI-данные клиентов в отдельных
региональных ветках. Lifecycle GitHub Actions job принадлежит `game-unpack-pipeline`: оркестратор
checkout'ит этот репозиторий по полному commit SHA и вызывает `wot-gui-assets-publisher publish`.

Перед изменением Git-транспорта полностью прочитать
[`docs/publication-transport.md`](docs/publication-transport.md). В нём отделены обязательные
инварианты от legacy-совместимости и случайной формы текущей реализации.

## Интерфейс publisher

Внешний интерфейс — CLI `project`/`publish`, формат `GameSnapshot`, `config/targets.json`, результат
в stdout/GitHub outputs и наблюдаемый результат в data-ветке. Приватные функции, dataclass'ы и их
разбиение интерфейсом не являются: их можно объединять, удалять или переписывать.

## Обязательные инварианты

- Snapshot проверяется независимо до проекции: identity, canonical descriptor, `READY`, manifest и
  payload hashes, полное manifest coverage.
- Публикуется `res/gui` без `.py`; XML публикуются. Для Wargaming default locale накладывается на
  `gui/`, а все locale layers сохраняются в `locales/<LANG>/gui/`. Для Lesta используется base.
- Production-ветка принимает только `full`, light публикуется в `test/light-<target>`.
- История существующей data-ветки читается partial fetch без загрузки payload прошлых версий.
- Малое изменение публикуется одним обычным push. Изменённые Git blobs суммарно больше 1 ГБ
  проходят bounded cumulative staging и GitHub API finalization, описанные в transport-документе.
- В production-истории остаётся один version commit на публикацию. Staging commits туда не входят.
- Итоговый Git tree обязан быть равен локально проверенному tree по object ID. Production-ref
  обновляется без force; временный ref уникален и удаляется также при ошибке.
- Неопределённый результат сетевой операции разрешается чтением remote state. Нельзя слепо
  повторять потенциально уже применённое обновление.

## Legacy и упрощение

`LEGACY_BOOTSTRAP_README_SHA256S` — настоящая обратная совместимость, а не часть большого Git
транспорта. На 2026-08-24 hash
`38921c09592e1fa1e205eb65b9ff4f79f3b193d11dbe6d094d932a4e109059fa` всё ещё нужен шести
README-only production-веткам; подробный inventory находится в transport-документе. Остальные
legacy hashes являются кандидатами на удаление после повторной проверки remote heads.

Текущая структура helper-функций, context manager и внутренних типов не священна. При cleanup
сохранять поведение через интерфейс, а не старые абстракции. Тесты приватных helper'ов разрешено
заменять тестами внешнего интерфейса, если все transport-инварианты остаются покрыты.

## Проверки

После изменений запускать:

```bash
uv run pytest -q
uv run ruff check .
uv run mypy src
```

Если изменился CLI или Git transport, обновить pinned полный SHA в `game-unpack-pipeline`, проверить
оба publisher call path и запустить там `./scripts/check.sh`. Изменение большого transport path до
production pin требует реального full-run: локальный bare Git remote не воспроизводит лимиты и
поведение GitHub receive-pack/API.
