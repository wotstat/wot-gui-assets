# wot-gui-assets

Публичная история GUI-ресурсов клиентов World of Tanks и «Мира танков». Служебный publisher-код и reusable workflow находятся в ветке [`main`](https://github.com/wotstat/wot-gui-assets/tree/main), а данные каждого клиента — в отдельной региональной ветке.

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
gui/                   # res/gui: base + default locale overlay; всё кроме .py
locales/<LANG>/gui/    # все res/gui locale overlays WG, включая default locale
```