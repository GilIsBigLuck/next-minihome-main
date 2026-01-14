# Next.js Minihome

미니멀 웹 에이전시 포트폴리오 사이트

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS 3.4
- **Data Fetching**: TanStack React Query 5
- **UI Components**: Radix UI
- **Type Safety**: TypeScript 5, Zod
- **Email**: Resend

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/next-minihome-main.git
cd next-minihome-main

# Install dependencies
npm install

# Copy environment variables
cp .env.example .env.local

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Scripts

```bash
npm run dev     # Start development server
npm run build   # Build for production
npm run start   # Start production server
npm run lint    # Run ESLint
```

## Project Structure

```
src/
├── api/           # API request wrappers
├── app/           # Next.js App Router (pages, layouts, API routes)
├── components/    # React components
├── hooks/         # Custom hooks (including React Query hooks)
├── lib/           # Utility functions
├── providers/     # Context providers
└── types/         # TypeScript type definitions
```

## Documentation

- [Starter Guide](./docs/STARTER_GUIDE.md) - Tailwind CSS, React Query usage
- [Refactoring Guide](./docs/REFACTORING.md) - Design token system
- [Dialog Usage](./docs/DIALOG_USAGE.md) - Dialog component guide

## Environment Variables

See [.env.example](./.env.example) for required environment variables.

## License

MIT
