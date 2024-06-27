# Описание решения

## Быстрый запуск приложения

#### Скрипт для создания и запуска контейнера

docker-compose build
docker-compose up

## Введение

Данное веб-приложение предоставляет функционал отображения таблицы с данными для постраничного просмотра без перезагрузки основной страницы. Приложение разработано с использованием современных технологий, что обеспечивает высокую производительность, удобную поддержку и лёгкость расширения функционала.

## Стек технологий

- Фронтенд:

  - React: библиотека для создания интерфейсов пользователя.
  - Redux Toolkit: библиотека для управления состоянием приложения.
  - TypeScript: строго типизированный язык, расширяющий возможности JavaScript.
  - Material-UI (MUI): библиотека для создания пользовательских интерфейсов.

- Бэкенд:

  - Express: минималистичный веб-фреймворк для Node.js.
  - csv-parser: библиотека для парсинга CSV файлов в формате JSON.

- Docker: платформа для контейнеризации приложений.

## Описание приложения

### Структура фронтенда

Основное внимание в приложении было уделено фронтенд части, с архитектурой FSD (Feature-Sliced Design).

#### Основные компоненты

1. AppRouter:

   - Использует React.Suspense для отложенной загрузки компонентов.
   - Отображает Loader пока компоненты загружаются.

```ts
export const AppRouter = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        {Object.values(routeConfig).map(({ element, path }) => (
          <Route key={path} path={path} element={<>{element}</>} />
        ))}
      </Routes>
    </Suspense>
  )
}
```

2. Маршрутизация:
   - Все маршруты описаны отдельно, гибко и легко расширяемо.

```ts
import { RouteProps } from 'react-router-dom'
import { NotFoundPage } from '@/pages/NotFoundPage'
import { MainPage } from '@/pages/MainPage'

export enum AppRoutes {
  MAIN = 'main',
  NOT_FOUND = 'not_found',
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.NOT_FOUND]: '*',
}

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: {
    path: RoutePath.main,
    element: <MainPage />,
  },
  [AppRoutes.NOT_FOUND]: {
    path: RoutePath.not_found,
    element: <NotFoundPage />,
  },
}
```

3. ErrorBoundary:

   - Используется для обработки ошибок приложения, показывает запасной интерфейс.

4. Страницы:

   - MainPage отображает таблицу, используют отложенную загрузку для оптимизации.
   - NotFoundPage отображает сообщение об ошибке, если страница не найдена.

5. Компоненты:
   - Компонента ArticleTable: реализована для дальнейшего переиспользования, а также предоставляет скелетон для таблиц при загрузке данных, который тоже является переиспользуемым, имеет гибкую настройку и подойдёт для любых типов таблиц.

### Структура Бэкенда

1. Express:
   - Используется для создания API, принимающего запросы от фронтенда.
   - В API реализована загрузка данных из CSV файла с использованием csv-parser.

### Docker

Создан Docker файл для контейнеризации приложения на базе Ubuntu.

## Преимущества выбранного стека

- React и Redux Toolkit:

  - Удобные инструменты для создания интерфейсов и управления состоянием.
  - Легкость в написании тестов.
  - Высокая производительность и реактивность.

- TypeScript:

  - Статическая типизация увеличивает надежность кода.
  - Улучшает автозаполнение и поиск ошибок на этапе компиляции.

- Material-UI:

  - Гибкость в создании стильных и удобных пользовательских интерфейсов.
  - Обширная база компонентов из коробки.

- Express и csv-parser:

  - Простота и гибкость в создании API.
  - Легкость в работе с CSV файлами.

## Преимущества разработанного кода

- Архитектура FSD:

  - Обеспечивает удобство в поддержке и масштабировании приложения.
  - Все ключевые элементы разнесены по слоям, что упрощает навигацию по проекту.

- Использование Suspense:

  - Позволяет реализовать отложенную загрузку компонентов, улучшая производительность.

- ErrorBoundary:

  - Обеспечивает стабильность работы приложения, несмотря на возможные ошибки.

- Reusable Components:

  - Повторно используемые компоненты делают код более гибким и упрощают разработку новых фич.

- Типизация с TypeScript:

  - Обеспечивает наглядность и предотвращает множество ошибок на этапе разработки.

## Заключение

Данное приложение предоставляет надежный и масштабируемый способ отображения данных в таблице постранично без необходимости перезагрузки страницы. Использование современного стека технологий делает его производительным и легким в поддержке, а также обеспечивает высокую степень удобства для конечных пользователей.