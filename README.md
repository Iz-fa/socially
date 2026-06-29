# Socially

Socially is a modern full-stack social media platform built with **Next.js**, **TypeScript**, **Prisma**, and **PostgreSQL**. It features secure authentication with **Clerk**, a responsive user interface built with **shadcn/ui** and **Tailwind CSS**, and a scalable architecture for creating social networking applications.

## ✨ Features

- 🔐 Secure authentication and user management with Clerk
- 👤 User profiles
- 📝 Create, edit, and delete posts
- ❤️ Like posts
- 💬 Comment on posts
- 📱 Fully responsive design
- 🎨 Modern UI built with shadcn/ui and Tailwind CSS
- 🗄️ PostgreSQL database with Prisma ORM
- ⚡ Fast server-side rendering and optimized performance with Next.js

## 🛠️ Tech Stack

- **Framework:** Next.js
- **Language:** TypeScript
- **Authentication:** Clerk
- **Database:** PostgreSQL
- **ORM:** Prisma
- **Styling:** Tailwind CSS
- **UI Components:** shadcn/ui

## 🚀 Getting Started

### Prerequisites

- Node.js
- PostgreSQL
- npm, yarn, pnpm, or bun

### Installation

```bash
git clone https://github.com/Iz-fa/socially.git

cd socially

npm install
```

Create a `.env` file and add your environment variables (Clerk, PostgreSQL, etc.).

Run the database migrations:

```bash
npx prisma migrate dev
```

Start the development server:

```bash
npm run dev
```

Open http://localhost:3000 in your browser.

## 📚 What I Learned

This project strengthened my experience with:

- Building full-stack applications using Next.js and TypeScript
- Designing relational databases with PostgreSQL and Prisma
- Implementing secure authentication with Clerk
- Creating reusable and responsive UI components
- Managing server-side rendering and modern web application architecture
- Writing clean, scalable, and maintainable code
