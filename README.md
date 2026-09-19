# wot-gui-assets

[![wot-eu status](https://img.shields.io/endpoint?url=https%3A%2F%2Fwotstat.github.io%2Fgame-unpack-pipeline%2Fbadges%2Fwot-eu.json)](https://github.com/wotstat/wot-gui-assets/tree/wot-eu)
[![wot-na status](https://img.shields.io/endpoint?url=https%3A%2F%2Fwotstat.github.io%2Fgame-unpack-pipeline%2Fbadges%2Fwot-na.json)](https://github.com/wotstat/wot-gui-assets/tree/wot-na)
[![wot-asia status](https://img.shields.io/endpoint?url=https%3A%2F%2Fwotstat.github.io%2Fgame-unpack-pipeline%2Fbadges%2Fwot-asia.json)](https://github.com/wotstat/wot-gui-assets/tree/wot-asia)
[![wot-cn status](https://img.shields.io/endpoint?url=https%3A%2F%2Fwotstat.github.io%2Fgame-unpack-pipeline%2Fbadges%2Fwot-cn.json)](https://github.com/wotstat/wot-gui-assets/tree/wot-cn)
[![wot-common-test status](https://img.shields.io/endpoint?url=https%3A%2F%2Fwotstat.github.io%2Fgame-unpack-pipeline%2Fbadges%2Fwot-common-test.json)](https://github.com/wotstat/wot-gui-assets/tree/wot-common-test)
[![mt-ru status](https://img.shields.io/endpoint?url=https%3A%2F%2Fwotstat.github.io%2Fgame-unpack-pipeline%2Fbadges%2Fmt-ru.json)](https://github.com/wotstat/wot-gui-assets/tree/mt-ru)
[![mt-public-test status](https://img.shields.io/endpoint?url=https%3A%2F%2Fwotstat.github.io%2Fgame-unpack-pipeline%2Fbadges%2Fmt-public-test.json)](https://github.com/wotstat/wot-gui-assets/tree/mt-public-test)

Публичная история GUI-ресурсов клиентов World of Tanks и «Мира танков». Служебный publisher-код и reusable workflow находятся в ветке [`main`](https://github.com/wotstat/wot-gui-assets/tree/main), а данные каждого клиента — в отдельной региональной ветке.

Данные в региональных ветках генерируются и публикуются автоматически с помощью
[`game-unpack-pipeline`](https://github.com/wotstat/game-unpack-pipeline) при обработке новых версий
игры.

## Регионы

| Клиент                         | Data-ветка                                                                          |
| ------------------------------ | ----------------------------------------------------------------------------------- |
| World of Tanks — Europe        | [`wot-eu`](https://github.com/wotstat/wot-gui-assets/tree/wot-eu)                   |
| World of Tanks — North America | [`wot-na`](https://github.com/wotstat/wot-gui-assets/tree/wot-na)                   |
| World of Tanks — Asia          | [`wot-asia`](https://github.com/wotstat/wot-gui-assets/tree/wot-asia)               |
| World of Tanks — China         | [`wot-cn`](https://github.com/wotstat/wot-gui-assets/tree/wot-cn)                   |
| World of Tanks — Common Test   | [`wot-common-test`](https://github.com/wotstat/wot-gui-assets/tree/wot-common-test) |
| Мир танков — Россия            | [`mt-ru`](https://github.com/wotstat/wot-gui-assets/tree/mt-ru)                     |
| Мир танков — Public Test       | [`mt-public-test`](https://github.com/wotstat/wot-gui-assets/tree/mt-public-test)   |

Версия игры с которой снят снепшот записывается в commit сообщение и `.version_name`.

---
Рекомендуется скачивать только последнее актуальное состояние репозитория без истории изменений:

```bash
git clone --depth 1 --no-single-branch https://github.com/wotstat/wot-gui-assets.git
```

## Структура data-ветки

```text
README.md
.version_name
.publication.json
gui/                   # res/gui: base + default locale overlay; всё кроме .py и файлов > 100 MiB
<RESOURCE_ROOT>/gui/   # res/<RESOURCE_ROOT>/gui: произвольный root-prefix + тот же overlay
locales/<LANG>/gui/    # все res/gui locale overlays WG, включая default locale
locales/<LANG>/<RESOURCE_ROOT>/gui/
```

`RESOURCE_ROOT` — произвольный первый сегмент пути под `res`, а не имя физического `.pkg`.
Более глубокие каталоги с именем `gui`, например `res/scripts/client/gui`, в эту проекцию не входят.

Файлы больше 100 MiB не публикуются в Git. Если такие файлы есть в снепшоте, README соответствующей
data-ветки содержит их пути и размеры.

## Диагностика публикации

Временные сетевые ошибки Git повторяются ограниченно: до трёх попыток с паузами
5 и 15 секунд. Для `commit` publisher сохраняет исходный HEAD и дерево индекса.
Если команда завершилась ошибкой после создания коммита, продолжение разрешено
только после проверки его дерева, родителя и сообщения. Если HEAD не изменился,
команда повторяется при неизменном индексе. Постоянные ошибки и неожиданные изменения
состояния останавливают публикацию. Эти проверки применяются и к staging-коммитам.

События `git-read`, `git-commit` и `push` записывают попытку, код завершения,
длительность, категорию отказа и признак догрузки объекта из promisor remote.
Для ошибки `commit` также записываются HEAD до/после и ожидаемое дерево.
При первом временном отказе операции выполняется отдельный HEAD-запрос к
`https://github.com/` без авторизации с лимитом 10 секунд. Событие
`github-connectivity` содержит код curl, HTTP-статус, адрес соединения при наличии
и времена DNS/TCP/TLS. Это состояние сети после ошибки, а не трассировка
неудачного Git-запроса; успешная проверка не опровергает предшествующий сбой.
Ошибка самой диагностики не прерывает восстановление. Заголовки, credentials,
полный stderr диагностического запроса и Git trace не публикуются.
