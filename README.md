# wot-gui-assets • wot-na • 2.4.0.0 #932

[![wot-na status](https://img.shields.io/endpoint?url=https%3A%2F%2Fwotstat.github.io%2Fgame-unpack-pipeline%2Fbadges%2Fwot-na.json)](https://github.com/wotstat/wot-gui-assets/tree/wot-na)

Публичная история GUI-ресурсов клиентов World of Tanks и «Мира танков». Служебный publisher-код и reusable workflow находятся в ветке [`main`](https://github.com/wotstat/wot-gui-assets/tree/main), а данные каждого клиента — в отдельной региональной ветке.

Скачать только текущую data-ветку без истории:

```bash
git clone --branch wot-na --single-branch --depth 1 https://github.com/wotstat/wot-gui-assets.git
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

- Target: `wot-na`
- Ветка: `wot-na`
- Версия: `2.4.0.5425`
- Publisher: `wargaming`
- GameSnapshot: `sha256:18393fa485cba50597625578c15f67347c27240c60bab21aba3bf6aa7e27e1d3`

Машиночитаемые метаданные и контрольные идентификаторы находятся в `.publication.json`.

## Исключённые файлы

Эти файлы не включены в публикацию, потому что их размер превышает 100 MiB:

- `story_mode/gui/flash/videos/intro.usm` — **185,28 MiB**
- `story_mode/gui/flash/videos/scc_intro.usm` — **151,27 MiB**
- `story_mode/gui/flash/videos/scc_outro.usm` — **139,57 MiB**
- `story_mode/gui/flash/videos/d_day.usm` — **103,84 MiB**
