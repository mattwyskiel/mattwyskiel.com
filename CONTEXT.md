# Development Context

## Commands
- `bun run dev` - Start development server
- `bun run build` - Build for production
- `bun run start` - Start production server
- `bun run lint` - Run ESLint
- `bun run typecheck` - Run TypeScript type checking (use `tsc --noEmit`)

## Code Style
- **Imports**: Group imports by type (React, Next.js, components, utils)
- **Components**: Use functional components with TypeScript
- **Naming**: PascalCase for components, camelCase for functions/variables
- **Formatting**: Use 4-space indentation, single quotes for strings
- **CSS**: Use Tailwind classes with consistent ordering
- **Types**: Use strict TypeScript typing, avoid `any`
- **Error Handling**: Use try/catch for async operations
- **File Structure**: Page components in app/ directory, reusable components in components/
- **Path Aliases**: Use @/* for imports (configured in tsconfig.json)
- **UI Components**: Use shadcn/ui components from components/ui/

## Project Structure
This is a Next.js 15 project using App Router, React 19, TypeScript, Tailwind CSS, and shadcn/ui components.