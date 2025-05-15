# Pokemon Explorer

A React application that leverages the Pokemon API to display and explore Pokemon data.

## Features

- Browse a list of Pokemon with pagination
- Sort Pokemon by name (ascending/descending)
- View detailed information about each Pokemon
- Responsive design with Tailwind CSS

## Tech Stack

- React 19 with TypeScript
- Vite for fast development and building
- React Router for navigation
- Zustand for state management
- TanStack Query for API data fetching
- Tailwind CSS for styling

## Getting Started

### Prerequisites

- Node.js (v18+)
- pnpm (v10+)

### Installation

```bash
# Install dependencies
pnpm install
```

### Development

```bash
# Start the development server
pnpm dev
```

### Build

```bash
# Build for production
pnpm build
```

### Preview

```bash
# Preview production build
pnpm preview
```

### Linting

```bash
# Run ESLint
pnpm lint
```

## Project Structure

```
pokemon/
├── public/            # Static assets
├── src/
│   ├── assets/        # Images, fonts, etc.
│   ├── components/    # React components
│   │   └── ui/        # Reusable UI components
│   ├── lib/           # Utility functions and config
│   ├── store/         # Zustand state management
│   └── types/         # TypeScript type definitions
└── ...config files
```

## License

This project is open source and available under the [MIT License](LICENSE).
