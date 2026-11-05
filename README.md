# Personal Website - mattwyskiel.com

Source for Matt Wyskiel's personal website and its AWS deployment.

## Tech Stack

- **Framework**: Next.js 16 with App Router
- **Runtime**: React 19
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **CMS**: Contentful
- **Package Manager**: Bun (workspaces; use the version in the root `packageManager` field)
- **Monorepo Tool**: Turborepo
- **Icons**: Lucide React
- **Infrastructure**: Pulumi + AWS (OpenNext.js)
- **Deployment**: AWS Lambda + CloudFront + S3

## Features

- **Home page**: A short introduction, then three sections: Building (Whiskey and recent work), Mixing (the four latest A-List mixes), and Writing (the three latest stories). Mixes come from the public A-List `GET /api/entries` route and are cached for hours. Covers load through A-List's image endpoint, because this site does not optimize images and the originals are megabytes each. If A-List does not answer, the home page shows only the links.
- **Portfolio**: Project index grouped into personal, work, and archive sections, with a page for each personal project:
  - **Whiskey**: A dated timeline of how the platform grew, what it does today, and where it runs
  - **A-List**: DJ mix site with track chapters and a podcast feed
  - **mattwyskiel.com**: This website
  - **Kingsmen Café**: Archived mobile pre-ordering app

  Project pages share the layout parts in `src/components/project-page.tsx`. Project page text must match current, verified behavior. Do not publish private hostnames, machine names, or costs.

- **Blog**: Stories and articles powered by Contentful CMS
- **Music**: Personal music projects and mixes
- **Contact**: Get in touch page
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Now listening**: A top-right Roon playback card on all pages; hidden when idle or unavailable. It uses the public Whiskey API and needs no Last.fm credentials. See [Now listening](../../docs/services/roon/now-listening.md) for source, privacy, local API setup, and rollout.
- **Dark Mode**: Theme switching capability
- **Type Safety**: Full TypeScript implementation
- **Serverless Deployment**: AWS Lambda with CloudFront CDN
- **Infrastructure as Code**: Pulumi-managed AWS resources
- **Performance**: Optimized with OpenNext.js for serverless

## Development: Getting Started

### Prerequisites

- [Bun](https://bun.sh/) installed on your machine
- [Pulumi](https://www.pulumi.com/) installed and configured
- AWS CLI configured with appropriate permissions
- Contentful account and space (for blog functionality)

### Installation

1. Clone the repository:

```bash
git clone https://github.com/mattwyskiel/mattwyskiel.com.git
cd mattwyskiel.com
```

2. Install dependencies:

```bash
bun install
```

3. Set up environment variables:

Create a `.env` file in the root directory with your credentials:

```
CONTENTFUL_SPACE_ID=your_space_id
CONTENTFUL_ACCESS_TOKEN=your_access_token
```

4. Run the development server:

```bash
cd src && bun run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Development Commands

- `turbo dev` - Start development server
- `turbo build` - Build for production
- `turbo start` - Start production server
- `turbo lint` - Run ESLint (may need to install ESLint first)
- `turbo check-types` - Run TypeScript type checking
- `turbo build` - Build the webapp workspace
- `pulumi preview` - Preview infrastructure changes
- `pulumi up` - Deploy infrastructure changes
- `pulumi refresh` - Refresh infrastructure state

## Project Structure

```
├── src/                   # Next.js application directory
│   ├── app/              # Next.js App Router pages
│   │   ├── music/        # Music showcase page
│   │   ├── projects/     # Portfolio projects
│   │   │   ├── a-list/   # A-List music player project
│   │   │   ├── kingsmen-cafe/  # Kingsmen Café project
│   │   │   ├── mattwyskiel-com/ # This website project
│   │   │   ├── whiskey/  # Whiskey personal automation
│   │   │   └── page.tsx  # Projects listing page
│   │   ├── stories/      # Blog posts
│   │   │   ├── [slug]/   # Dynamic blog post pages
│   │   │   └── page.tsx  # Blog listing page
│   │   ├── globals.css   # Global styles
│   │   ├── layout.tsx    # Root layout
│   │   └── page.tsx      # Home page
│   ├── components/       # Reusable components
│   │   ├── project-page.tsx # Shared project page layout parts
│   │   ├── ui/          # shadcn/ui components
│   │   ├── footer.tsx   # Site footer
│   │   ├── header.tsx   # Site header
│   │   └── theme-provider.tsx # Theme provider
│   ├── lib/             # Utility functions
│   │   ├── contentful.ts # Contentful CMS integration
│   │   ├── projects.ts  # Project data and utilities
│   │   └── utils.ts     # General utilities
│   ├── hooks/           # Custom React hooks
│   ├── styles/          # Additional styles
│   └── public/          # Static assets
├── index.ts             # Pulumi infrastructure entry point
├── nextjs.ts            # Next.js deployment component
├── turbo.json           # Turborepo configuration
├── Pulumi.yaml          # Pulumi project configuration
├── Pulumi.dev.yaml      # Development stack configuration
├── Pulumi.prod.yaml     # Production stack configuration
└── package.json         # Root package.json (workspaces)
```

## Monorepo Management

This project uses Turborepo for efficient monorepo management:

- **Workspace Structure**: Organized with `src/` as the main application workspace
- **Task Orchestration**: Configured for build, dev, and type checking tasks
- **Caching**: Intelligent caching of build outputs and dependencies
- **Pipeline Optimization**: Dependency-aware task scheduling with `turbo.json` configuration

## Infrastructure

This project uses Infrastructure as Code with Pulumi to manage AWS resources:

- **NextJsSite Component**: Custom Pulumi component for OpenNext.js deployment
- **AWS Services**: Lambda, CloudFront, S3, Route 53, SQS, IAM
- **Build Process**: Automated Next.js build and asset optimization
- **Multi-environment**: Separate stacks for development and production

## Content Management

Blog posts are managed through Contentful CMS with the following content model:

- **Content Type**: `blogPost`
- **Fields**:
  - `title` (Text)
  - `slug` (Text)
  - `content` (Rich Text)
  - `excerpt` (Text)
  - `publishDate` (Date & Time)
  - `tags` (Text, List)

Project portfolio data is managed through the `lib/projects.ts` file with TypeScript interfaces for type safety.

## Deployment

The site is deployed using Pulumi and AWS with OpenNext.js for serverless deployment:

### Development Deployment

```bash
# Preview changes
infisical run --env=dev -- pulumi preview --stack dev

# Deploy to development
infisical run --env=dev -- pulumi up --stack dev --yes
```

### Production Deployment

Production deploys only through GitHub Actions after a pull request merges to
`main`. Do not deploy production locally.

### Infrastructure Overview

- **Serverless Functions**: AWS Lambda for Next.js server-side rendering
- **CDN**: CloudFront for global content delivery
- **Storage**: S3 for static assets
- **Domain**: Custom domain (mattwyskiel.com) with Route 53
- **Image Optimization**: Lambda function for Next.js image optimization
- **Build Process**: OpenNext.js transforms Next.js for AWS deployment

### Environment Variables

Set the following environment variables in your Pulumi configuration:

```bash
pulumi config set CONTENTFUL_SPACE_ID your_space_id
pulumi config set CONTENTFUL_ACCESS_TOKEN your_access_token
```

## Contributing

This is a personal website, but suggestions and improvements are welcome! Please open an issue or submit a pull request.

## License

This project is open source and available under the [MIT License](LICENSE).
