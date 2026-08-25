# wot-gui-assets

Публичная история GUI-ресурсов клиентов World of Tanks и «Мира танков». Служебный код и GitHub
Actions workflows находятся в ветке [`main`](https://github.com/wotstat/wot-gui-assets/tree/main), а данные каждого
клиента — в отдельной региональной ветке.

Скачать только текущую data-ветку без истории:

```bash
git clone --branch wot-eu --single-branch --depth 1 https://github.com/wotstat/wot-gui-assets.git
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

Первая публикация создаёт data-ветку сразу на version commit. Его сообщение строится из корневого
`version.xml` snapshot без префикса `v.` в формате `2.3.1.0 #903`, а точный release name
записывается в `.version_name`.
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


## Текущая публикация

- Target: `wot-eu`
- Ветка: `wot-eu`
- Версия: `2.3.1.5412`
- Publisher: `wargaming`
- GameSnapshot: `sha256:0737e69564b5943debbdff06ff4683771c915f8a4bb1630cc730cac11ab59cc2`

Машиночитаемые метаданные и контрольные идентификаторы находятся в `.publication.json`.
