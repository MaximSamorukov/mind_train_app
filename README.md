# Mind Train App

A web application for cognitive and brain training exercises built with React, TypeScript, and Vite.

## Features

The app includes three cognitive training exercises:

### 1. Tables (Schulte Tables)
A grid-based attention training exercise where numbers are randomly distributed. Configure the grid size (rows/columns) and timer duration to challenge your visual search speed.

### 2. Painted Words (Stroop Test)
Words representing colors are displayed in mismatched font colors. Train your cognitive flexibility by identifying the font color rather than reading the word meaning.

### 3. Gestures
Visual memory exercise with 10 hand gesture diagrams. Select and study different gesture patterns to improve spatial memory.

## Tech Stack

- **React 19.2** - UI framework
- **TypeScript 5.9** - Type safety
- **Vite 7.3** - Build tool and dev server
- **React Router 7.13** - Client-side routing
- **Ant Design 6.3** - UI component library
- **SCSS Modules** - Component-scoped styling

## Prerequisites

- Node.js (v18 or later recommended)
- npm

## Installation

```bash
npm install
```

## Development

Start the development server with hot module replacement:

```bash
npm run dev
```

The app will be available at `http://localhost:5173` (or the next available port).

## Build

Create a production build:

```bash
npm run build
```

## Preview Production Build

Preview the production build locally:

```bash
npm run preview
```

## Linting

Run ESLint to check code quality:

```bash
npm run lint
```

## Project Structure

```
src/
├── app/          # App-wide configuration (router, constants)
├── pages/        # Page components (Tables, PaintedWords, Gestures)
├── widgets/      # Composite widgets (Menu)
├── providers/    # Context providers
├── types/        # TypeScript type definitions
├── utils/        # Custom hooks and utilities
└── assets/       # Static assets
```
