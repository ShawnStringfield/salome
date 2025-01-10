# Salome

A modern web application built with Next.js 14, React 18, TypeScript, and Tailwind CSS. This project serves as a personal dashboard with journal capabilities, book tracking, and life management features.

## 🚀 Features

- Journal entries management
- Kindle book synchronization via Notion
- Calendar integration
- Personal dashboard
- Life tracking capabilities

## 🛠️ Tech Stack

- **Framework:** Next.js 14
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Components:**
  - Shadcn UI
  - Radix UI primitives
  - Framer Motion for animations
- **Authentication:** Supabase Auth
- **Database:** Supabase
- **Form Handling:** React Hook Form with Zod validation
- **API Integration:** Notion API for book syncing
- **Email Service:** Resend
- **Development Tools:**
  - ESLint for linting
  - Prettier for code formatting
  - Husky for git hooks
  - Lint-staged for pre-commit checks

## 📦 Installation

1. Clone the repository:

```bash
git clone [repository-url]
cd salome
```

2. Install dependencies:

```bash
yarn install
```

3. Set up environment variables:

```bash
cp .env.example .env.local
```

4. Start the development server:

```bash
yarn dev
```

The application will be available at [http://localhost:3000](http://localhost:3000).

## 🔧 Scripts

- `yarn dev` - Run development server
- `yarn build` - Build production bundle
- `yarn start` - Start production server
- `yarn lint` - Run ESLint
- `yarn type-check` - Run TypeScript type checking
- `yarn prepare` - Setup Husky hooks

## 📁 Project Structure

```
src/
├── app/
│   ├── components/     # Reusable UI components
│   ├── lib/           # Utility functions and configurations
│   ├── types/         # TypeScript type definitions
│   ├── utils/         # Helper functions
│   └── (features)/    # Feature-specific components and logic
├── assets/           # Static assets
└── styles/          # Global styles and Tailwind configurations
```

## 🧪 Development

- The project uses TypeScript for type safety
- Follows React best practices and functional components
- Implements proper error handling and loading states
- Ensures accessibility compliance (WCAG 2.1)
- Uses Tailwind's utility classes for styling
- Includes comprehensive Git hooks for code quality

## 🔐 Environment Variables

Required environment variables:

- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `NOTION_API_KEY`
- `RESEND_API_KEY`

## 📚 Additional Tools

- NGrok for local tunneling
- NextUI components library integration
- Custom Google Font optimization with `next/font`

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is private and not open for public use.
