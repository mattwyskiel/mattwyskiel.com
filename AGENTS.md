# Agent Guidelines for mattwyskiel.com

## Commands
- **Build**: `turbo build`
- **Dev**: `turbo dev`
- **Lint**: `turbo lint` (ESLint configured with Next.js strict rules - may need installation)
- **Type Check**: `turbo check-types`
- **Single Test**: No test framework configured
- **Infrastructure Preview**: `pulumi preview`
- **Infrastructure Deploy**: `pulumi up`
- **Infrastructure Refresh**: `pulumi refresh`

## Code Style
- **Language**: TypeScript with strict mode enabled
- **Framework**: Next.js 15 App Router, React 19
- **Styling**: Tailwind CSS with shadcn/ui components
- **Imports**: Type imports first, then regular imports; use semicolons
- **Path Aliases**: Use `@/` for src directory imports
- **Naming**: PascalCase for components, camelCase for functions/variables
- **Formatting**: Prettier (default config)
- **Types**: Explicit typing required, use interfaces for complex objects
- **Error Handling**: Use try/catch for async operations
- **Components**: Functional components with TypeScript props
- **Icons**: Lucide React icons
- **Package Manager**: Bun 1.2.20 (workspaces setup)

## Infrastructure
- **Provider**: AWS (serverless deployment)
- **IaC Tool**: Pulumi with TypeScript
- **Build Tool**: OpenNext.js for AWS Lambda deployment
- **Monorepo Tool**: Turborepo for workspace management
- **CDN**: CloudFront
- **Storage**: S3 for static assets
- **Domain**: Custom domain (mattwyskiel.com) with Route 53
