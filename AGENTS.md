# AGENTS.md

## Build/Test Commands

- `bun run dev` - Start development server
- `bun run build` - Build for production
- `bun run start` - Start production server
- `bun run lint` - Run ESLint
- `tsc --noEmit` - Run TypeScript type checking
- No test framework configured

## Code Style

- **Imports**: Group by type (React, Next.js, components, utils), use `@/*` path aliases
- **Components**: Functional components with TypeScript, PascalCase naming
- **Variables/Functions**: camelCase naming
- **Formatting**: Use tabs for indentation (per Tailwind config), double quotes for strings
- **Types**: Strict TypeScript, avoid `any`, use proper interface definitions
- **CSS**: Tailwind classes with consistent ordering, shadcn/ui components from `components/ui/`
- **Error Handling**: Use try/catch for async operations
- **File Structure**: Pages in `app/` directory, reusable components in `components/`
- **Exports**: Named exports preferred, use `export default` for page components
- **Props**: Use proper TypeScript interfaces extending HTML attributes when applicable

## Framework

Next.js 15 with App Router, React 19, TypeScript, Tailwind CSS, shadcn/ui, Contentful CMS
