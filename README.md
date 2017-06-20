# webpack-start
Базовая настройка `webpack`.

**Скринкаст с пояснениями** [https://forum.jscourse.com/t/webpack/1769](https://forum.jscourse.com/t/webpack/1769) и обсуждение

# Возможности

- Поддержка [**синтаксиса** es2015](https://babeljs.io/learn-es2015/) с помощью [babel](https://babeljs.io/)
- Dependency injection как локальных так и `npm` модулей через `require` и es2015 `import`.
- Сборка production версии кода (минификация + sourcemap).
- sourcemaps во время разработки и для production сборки
- live reload при разработке.
- Сервер статических файлов.


# Как пользоваться при разработке

У тебя должне быть установлен [nodejs](https://nodejs.org/en/download/). 

1. В терминале в папке проекта выполни `npm run dev`.
2. Открой [http://localhost:8080](http://localhost:8080).
3. В браузере увидишь содержимое файла `static/index.html`.
4. Файл - точка входа для компилируемого кода `src/index.js` в нем пиши код приложения. Содержимое этого файла будет пропускаться через webpack, подгружаться в браузер и выполняться.


# Как собирать результат для production
В терминале в папке проекта выполни команду `npm run build`. Результат - минифицированный файл `dist/bundle.js` и sourcemap к нему `dist/bundle.js.map`.
