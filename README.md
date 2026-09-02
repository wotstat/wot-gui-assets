# wot-gui-assets • mt-ru • 1.45.0.0 #2268

[![wot-eu status](https://img.shields.io/endpoint?url=https%3A%2F%2Fwotstat.github.io%2Fgame-unpack-pipeline%2Fbadges%2Fwot-eu.json)](https://github.com/wotstat/wot-gui-assets/tree/wot-eu)
[![wot-na status](https://img.shields.io/endpoint?url=https%3A%2F%2Fwotstat.github.io%2Fgame-unpack-pipeline%2Fbadges%2Fwot-na.json)](https://github.com/wotstat/wot-gui-assets/tree/wot-na)
[![wot-asia status](https://img.shields.io/endpoint?url=https%3A%2F%2Fwotstat.github.io%2Fgame-unpack-pipeline%2Fbadges%2Fwot-asia.json)](https://github.com/wotstat/wot-gui-assets/tree/wot-asia)
[![wot-cn status](https://img.shields.io/endpoint?url=https%3A%2F%2Fwotstat.github.io%2Fgame-unpack-pipeline%2Fbadges%2Fwot-cn.json)](https://github.com/wotstat/wot-gui-assets/tree/wot-cn)
[![wot-common-test status](https://img.shields.io/endpoint?url=https%3A%2F%2Fwotstat.github.io%2Fgame-unpack-pipeline%2Fbadges%2Fwot-common-test.json)](https://github.com/wotstat/wot-gui-assets/tree/wot-common-test)
[![mt-ru status](https://img.shields.io/endpoint?url=https%3A%2F%2Fwotstat.github.io%2Fgame-unpack-pipeline%2Fbadges%2Fmt-ru.json)](https://github.com/wotstat/wot-gui-assets/tree/mt-ru)
[![mt-public-test status](https://img.shields.io/endpoint?url=https%3A%2F%2Fwotstat.github.io%2Fgame-unpack-pipeline%2Fbadges%2Fmt-public-test.json)](https://github.com/wotstat/wot-gui-assets/tree/mt-public-test)

Публичная история GUI-ресурсов клиентов World of Tanks и «Мира танков». Служебный publisher-код и reusable workflow находятся в ветке [`main`](https://github.com/wotstat/wot-gui-assets/tree/main), а данные каждого клиента — в отдельной региональной ветке.

Скачать только текущую data-ветку без истории:

```bash
git clone --branch mt-ru --single-branch --depth 1 https://github.com/wotstat/wot-gui-assets.git
```

Скачать все data-ветки без истории:

```bash
git clone --depth 1 --no-single-branch https://github.com/wotstat/wot-gui-assets.git
```

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

Версия игры с которой снят снепшот записывается в commit сообщение и `.version_name`.

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


## Текущая публикация

- Target: `mt-ru`
- Ветка: `mt-ru`
- Версия: `1.45.0.8078`
- Publisher: `lesta`
- GameSnapshot: `sha256:420b1f699c26680a3f20d640f1288304d07731e2613f4006487065be75eb67b1`

Машиночитаемые метаданные и контрольные идентификаторы находятся в `.publication.json`.

## Исключённые файлы

Эти файлы не включены в публикацию, потому что их размер превышает 100 MiB:

- `gui/flash/videos/_tutorialinitial.usm` — **110,24 MiB**
