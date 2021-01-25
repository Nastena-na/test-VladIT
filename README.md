# **test-VladIT**

## "Выпадающий список городов"

Проект собран Webpack-сборкой, содержит поиск по ключевому слову или букве городов, которые открываются в подсказках(выпадающем списке) с помощью запроса к Api. При выборе нужного города, он попадает в поле ввода и появляется возможность отправить форму. Есть валидация на предмет обязательного заполнения формы. Сайт адаптирован под разные разрешения. Прописаны медиазапросы, стили написаны с помощью препроцессора SCSS и разложены по блокам, подключены шрифты.

текущая версия - 0.0.1

## [Ссылка на проектную работу](https://Nastena-na.github.io/test-VladIT/)

## Стэк технологий:

ES6, Babel, OOP, CSS3, HTML5, Webpack, BEM, SCSS

## Пакеты которые используются в сборках:

- [Babel CLI](https://babeljs.io/docs/en/babel-cli#docsNav)
- [Babel Core](https://babeljs.io/docs/en/babel-core)
- [Babel Preset Evnvironment](https://babeljs.io/docs/en/babel-preset-env#docsNav)
- [Сore JS](https://github.com/zloirock/core-js#readme)
- [PostCSS](https://postcss.org/)
- [Define plugin](https://webpack.js.org/plugins/define-plugin/)
- [Style loader](https://github.com/webpack-contrib/style-loader)
- [Optimize CSS assets](https://www.npmjs.com/package/optimize-css-assets-webpack-plugin)
- [File loader](https://github.com/webpack-contrib/file-loader)
- [Image Webpack loader](https://www.npmjs.com/package/image-webpack-loader)
- [Cross-Env](https://www.npmjs.com/package/cross-env)

## Инструкции по запуску:

- Скачать или склонировать репозитори
- Установить зависимости при помощи npm - `npm i`
- Запустить в development режиме - `npm run dev`
- Запустить сборку production-билда - `npm run build`
- Разместить production-билд на github pages - `npm run deploy`

Проект не завершён из-за проблем с обращением к Api.