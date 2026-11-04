# Avito Clone

Платформа для публикации и поиска объявлений в стиле Avito.

Это веб-приложение позволяет пользователям:
- создавать, редактировать и удалять объявления;
- искать и фильтровать товары по категориям, цене и местоположению;
- просматривать карточки объявлений;
- управлять профилем и личными объявлениями;
- сохранять понравившиеся предложения в избранное.

Проект создан как MVP marketplace-платформы и отлично подходит для демонстрации в портфолио.

## Содержание

- [Описание проекта](#описание-проекта)
- [Основные функции](#основные-функции)
- [Технологии](#технологии)
- [Архитектура](#архитектура)
- [Структура проекта](#структура-проекта)
- [Требования](#требования)
- [Установка и запуск](#установка-и-запуск)
- [Переменные окружения](#переменные-окружения)
- [Использование](#использование)
- [API](#api)
- [План развития](#план-развития)
- [Лицензия](#лицензия)

## Описание проекта

Avito Clone — это marketplace-платформа, позволяющая покупателям и продавцам взаимодействовать через цифровую площадку объявлений.

Пользователь может:
- зарегистрироваться и войти в аккаунт;
- разместить объявление с фото, описанием и ценой;
- просматривать список объявлений;
- искать товары по ключевым словам;
- использовать фильтры для точного подбора;
- сохранять объявления в избранное;
- управлять своим профилем и опубликованными товарами.

## Основные функции

- Регистрация и авторизация пользователей
- Создание, редактирование и удаление объявлений
- Загрузка фотографий товара
- Поиск по названию и описанию
- Фильтрация по категории, цене, региону и другим параметрам
- Сортировка объявлений
- Карточка товара
- Личный кабинет пользователя
- Избранное
- Управление списком активных и архивных объявлений
- История и метаданные объявлений
- Адаптивный интерфейс для мобильных и десктопных устройств
- Административный интерфейс для модерации

## Технологии

### Frontend
- React
- Vite
- TypeScript
- Redux Toolkit / Zustand / Context API
- CSS Modules / SCSS / Tailwind CSS

### Backend
- Node.js
- Express.js / NestJS / Fastify
- REST API

### База данных
- PostgreSQL
- Prisma ORM / Sequelize / TypeORM

### Инструменты
- Docker
- Git
- ESLint
- Prettier
- JWT для авторизации
- Multer / Cloudinary / S3 для загрузки изображений

## Архитектура

Проект построен по принципу client-server архитектуры:

- Frontend отвечает за отображение интерфейса и взаимодействие пользователя
- Backend обрабатывает запросы, бизнес-логику и валидацию
- База данных хранит пользователей, объявления, категории и параметры фильтрации
- Медиа-файлы хранятся локально или в облачном хранилище

## Структура проекта

```text
avito-clone/
├── client/                 # Frontend
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── store/
│   │   ├── services/
│   │   ├── hooks/
│   │   └── styles/
│   └── package.json
│
├── server/                 # Backend
│   ├── src/
│   │   ├── controllers/
│   │   ├── routes/
│   │   ├── models/
│   │   ├── middleware/
│   │   ├── services/
│   │   ├── utils/
│   │   └── app.js
│   └── package.json
│
├── prisma/                 # Схема БД (если используется Prisma)
│   └── schema.prisma
│
├── .env.example
├── .gitignore
├── README.md
├── docker-compose.yml      # Опционально
├── package.json
└── LICENSE
```

## Требования

Перед запуском убедитесь, что у вас установлено:

- Node.js 18+
- npm или yarn
- PostgreSQL 14+
- Git

## Установка и запуск

### 1. Клонирование проекта

```bash
git clone https://github.com/Mikola199/avito-clone.git
cd avito-clone
```

### 2. Установка зависимостей

Для frontend:

```bash
cd client
npm install
```

Для backend:

```bash
cd ../server
npm install
```

### 3. Создание базы данных

Создайте базу данных PostgreSQL:

```sql
CREATE DATABASE avito_clone;
```

### 4. Настройка переменных окружения

Создайте файл `.env` на основе `.env.example`:

```bash
cp .env.example .env
```

Заполните значения:

```env
PORT=5000
DATABASE_URL=postgresql://postgres:password@localhost:5432/avito_clone
JWT_SECRET=your_secret_key
CLIENT_URL=http://localhost:5173
```

### 5. Применение миграций

Если используется Prisma:

```bash
npx prisma migrate dev
```

Или для других ORM:

```bash
npm run migrate
```

### 6. Запуск проекта

Запуск backend:

```bash
cd server
npm run dev
```

Запуск frontend:

```bash
cd client
npm run dev
```

После этого приложение будет доступно по адресам:

- Frontend: http://localhost:5173
- Backend: http://localhost:5000

## Переменные окружения

Пример файла `.env.example`:

```env
PORT=5000
DATABASE_URL=postgresql://postgres:password@localhost:5432/avito_clone
JWT_SECRET=supersecretkey
CLIENT_URL=http://localhost:5173
CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=
```

## Использование

### Для пользователей
1. Зарегистрируйтесь или войдите в систему.
2. Создайте объявление.
3. Добавьте описание, цену и изображения.
4. Опубликуйте объявление.
5. Используйте поиск и фильтры по категориям и цене.
6. Сохраняйте понравившиеся объявления в избранное.

### Для продавцов
- Управляйте своими объявлениями
- Редактируйте карточки товаров
- Снимаете объявления с публикации
- Просматривайте статистику и активность

## API

Пример доступных endpoints:

```http
GET /api/items
GET /api/items/:id
POST /api/items
PUT /api/items/:id
DELETE /api/items/:id

POST /api/auth/register
POST /api/auth/login

GET /api/user/profile
PUT /api/user/profile

GET /api/favorites
POST /api/favorites/:itemId
DELETE /api/favorites/:itemId
```

## План развития

- Добавить личные сообщения между продавцом и покупателем
- Поддержка нескольких фотографий на объявление
- Улучшенная система фильтрации
- Карта с геолокацией
- Система отзывов и рейтинга продавцов
- Административная панель
- Ведение статистики и аналитики
- Поддержка мобильной версии и PWA

## Лицензия

Этот проект распространяется под лицензией MIT.

```bash
MIT License

Copyright (c) 2026

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
```

## Контакты

- GitHub: [Mikola199](https://github.com/Mikola199)

---

Если хочешь, я могу также подготовить более краткую версию README для GitHub или сделать README под конкретный стек, который уже используется в проекте.
