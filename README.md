# Описание проекта

SPA запрашивает на бесплатном API курсы выбранных валют с валют с интервалом 1 минута. Конвертация одной валюты в другую происходит на стороне клиента.

Проект написан на Vue 3 с применением Pinia и Vue Router. Линтинг реализован с помощью ESLint и Prettier. Подключена библиотека иконок remix icon.

В разработке использована версия Node.js 20.16.

## Особенности проекта

Проект имеет модульную архитектуру со следующими слоями:

1. page - страница сайта на которую настроен роутинг содержит разметку для одного или нескольких модулей, но не содержит логику.
2. module - крупный самостоятельный элемент интерфейса, который содержит логику и имеет отдельное хранилище, данные которого используются в компонентах этого модуля. Для удобства копирования и переноса модулей они содержатся в отдельных папках стандартной папке components проекта вместе с компонентами и тестами
3. component - небольшой элемент модуля, предназначенный для выполнения части его логики.
4. ui - универсальные элементы интерфейса, которые могут быть использованы в компоненте или модуле проекта. Бизнес логику не содержат, но возвращают наверх события на которые можно настроить выполнение бизнес логики. События и принимаемые параметры описаны в комментариях к каждому ui компоненту. Содержатся в папке components/ui
5. В папке common_functions хранятся функции, которые могут быть использованы во всех компонентах проекта.

## Запуск проекта

1. Установить на компьютер версию Node.js не ниже 20.16.

2. Скачать файлы репозитория из ветки master

3. Установить зависимости проекта

```bash
npm install
```

4. Для просмотра проекта и внесения изменений запустить сервер разработки

```bash
npm run dev
```

5. Для сборки проекта запустить команду

```bash
npm run build
```
