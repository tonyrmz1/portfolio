# Antonio Marín Belmonte - Portfolio

A modern, AI-assisted personal portfolio website demonstrating professional software development practices with emphasis on clean architecture, code quality, and maintainability.

## 🎯 Project Objective

This portfolio showcases my commitment to **learning AI-assisted software development** with a focus on:

- **Clean Architecture** - Modular, scalable design patterns and separation of concerns
- **Code Quality** - Type-safe development with TypeScript, adherence to SOLID principles
- **Best Practices** - Industry-standard tooling, testing-ready architecture, performance optimization
- **Long-term Maintainability** - Clear code structure, comprehensive documentation, AI-friendly patterns for future enhancements

## 🛠️ Technology Stack

### Core Framework & Build
- **React 18.3.1** - Modern UI library with hooks and concurrent features
- **TypeScript** - Static typing for safer, more maintainable code (96.6% of codebase)
- **Vite 6.3.5** - Next-generation build tool with lightning-fast dev server

### Styling & Design System
- **Tailwind CSS 4.1.12** - Utility-first CSS framework for rapid UI development
- **Emotion 11.14** - CSS-in-JS for component-scoped styling
- **Radix UI** - Unstyled, accessible component primitives (20+ components)
- **shadcn/ui patterns** - High-quality component patterns built on Radix

### UI & Icons
- **Material-UI Icons 7.3.5** - Professional Material Design icons
- **Lucide React** - Modern, customizable icon library

### Features & Functionality
- **React Router 7.13.0** - Client-side routing and navigation
- **React Hook Form 7.55.0** - Performant form state management with minimal re-renders
- **Recharts 2.15.2** - Composable charting library for data visualization
- **Motion 12.23.24** - Framer Motion-based animation library
- **react-dnd 16.0.1** - Drag-and-drop functionality with HTML5 backend
- **Embla Carousel 8.6.0** - Carousel/slider component
- **date-fns 3.6.0** - Modern date utility library
- **next-themes 0.4.6** - Dark/light theme management

### Developer Experience
- **PostCSS** - CSS transformation and optimization
- **Path Aliases** - Clean imports using `@/` prefix
- **Custom Vite Plugins** - Figma asset resolver integration

## 📁 Project Structure

```
src/
├── components/      # Reusable UI components (Radix UI based, ~20+ components)
├── pages/          # Page-level components and layouts
├── hooks/          # Custom React hooks for logic reuse
├── utils/          # Utility functions and helpers
├── styles/         # Global styles and theme configuration
├── assets/         # Images, icons, and static files
└── types/          # TypeScript type definitions
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18 or higher
- npm, yarn, or pnpm

### Installation & Development

```bash
# Install dependencies
npm install

# Start development server (opens at http://localhost:5173)
npm run dev

# Build for production
npm run build
```

## ✨ Key Features

✅ **Type-Safe Development** - Full TypeScript support throughout the codebase
✅ **Responsive Design** - Mobile-first approach with Tailwind CSS
✅ **Accessible Components** - WCAG-compliant UI patterns via Radix UI
✅ **Modular Architecture** - Small, focused components with single responsibility
✅ **Production Ready** - Optimized builds, code splitting, lazy loading
✅ **AI-Optimized Structure** - Code organized for clarity and AI analysis
✅ **Performance Focused** - Minimal dependencies, efficient rendering

## ��� AI Development Approach

This project demonstrates:
- **AI-Assisted Coding** - Using GitHub Copilot for intelligent code suggestions
- **Prompt-Friendly Architecture** - Well-organized code structure for effective AI analysis
- **Self-Documenting Code** - Clear naming conventions and patterns that AI can easily understand
- **Maintainability First** - Code written with future AI review and enhancement in mind

## 📋 Development Best Practices

### Component Design
- Single Responsibility Principle - Each component has one clear purpose
- Props-driven configuration - Flexible, reusable components
- Composition over inheritance - Building UIs through component composition

### State Management
- React Context for global state
- React Hook Form for form state
- Custom hooks for logic extraction and reuse

### Code Organization
- Feature-based folder structure (when scaled)
- Separate concerns: UI, logic, utilities, types
- Centralized type definitions

### Performance
- Code splitting by route
- Lazy loading of components
- Optimized bundle size
- Vite's fast refresh during development

### Documentation
- Clear, descriptive naming conventions
- TypeScript interfaces for self-documentation
- JSDoc comments for complex functions

## 📦 Package Management

- **Package Manager**: npm (with pnpm lock override)
- **Module Type**: ES modules
- **Build Output**: Optimized production bundles with tree-shaking

## 🔧 Configuration Files

- `vite.config.ts` - Vite build configuration with custom Figma asset resolver
- `postcss.config.mjs` - PostCSS processing
- `tailwind.config.*` - Tailwind CSS theme and customization
- `tsconfig.json` - TypeScript compiler options

## 📝 Future Enhancements

- Unit and integration tests with Vitest
- E2E testing with Playwright
- Component documentation with Storybook
- API integration layer
- State management with Zustand or Redux
- CI/CD pipeline with GitHub Actions

## 📄 Attribution

See [ATTRIBUTIONS.md](./ATTRIBUTIONS.md) for credits to libraries, frameworks, and inspiration sources.

## 💡 Learning Philosophy

This project serves as a practical example of how modern development practices and AI tools can work together to create maintainable, scalable applications. By combining best practices in architecture, clean code, and type safety with AI-assisted development, we can build software that is not only functional but also easy to understand, modify, and extend.