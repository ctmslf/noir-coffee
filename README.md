# НУАР — Авторская кофейня

Современный landing page для кофейни с тёмной темой оформления, анимациями и формой бронирования.

## Технологии

- **Next.js 14** — React фреймворк с App Router
- **TypeScript** — type safety
- **Tailwind CSS** — стилизация
- **Framer Motion** — плавные анимации
- **Lucide React** — иконки
- **Resend** — отправка email уведомлений

## Установка

```bash
npm install
```

## Запуск

```bash
npm run dev
```

Откройте [http://localhost:3000](http://localhost:3000)

## Функционал

- ✅ Адаптивный дизайн (mobile, tablet, desktop)
- ✅ Тёмная тема с акцентным оранжевым
- ✅ Плавные анимации при скролле
- ✅ Секции: Hero, Меню, Цены, Преимущества, Галерея, Отзывы, Бронь, Карта, Контакты
- ✅ Форма бронирования с валидацией
- ✅ Email уведомления через Resend API
- ✅ Интеграция соцсетей (Instagram, Telegram, WhatsApp)

## Настройка Email

Создайте `.env.local`:

```env
RESEND_API_KEY=your_resend_api_key
OWNER_EMAIL=your@email.com
```

Получить API ключ: [resend.com](https://resend.com)

## Деплой

```bash
npm run build
```

Деплой на Vercel в один клик или любой другой хостинг с поддержкой Next.js.

## Структура

```
noir-coffee/
├── app/
│   ├── api/booking/     # API endpoint для формы
│   ├── layout.tsx       # Root layout
│   ├── page.tsx         # Главная страница
│   └── globals.css      # Глобальные стили
├── components/          # React компоненты
├── lib/
│   └── constants.ts     # Константы (меню, цены, контакты)
└── public/              # Статика
```

## Лицензия

MIT
