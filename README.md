# Personal Website - mattwyskiel.com

This repository houses my personal website, where I showcase myself both personally and professionally.
Check back often, I seem to redesign this thing once every year or so :sweat_smile:

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Runtime**: React 19
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **CMS**: Contentful
- **Package Manager**: Bun (workspaces)
- **Icons**: Lucide React
- **Infrastructure**: Pulumi + AWS (OpenNext.js)
- **Deployment**: AWS Lambda + CloudFront + S3

## Features

- **Portfolio**: Showcase of software projects including:
  - **Whiskey**: Personal automation system and second brain
  - **A-List**: Audio player for DJ mixes
  - **mattwyskiel.com**: This website (meta!)
  - **Kingsmen Café**: Mobile pre-ordering app
- **Blog**: Stories and articles powered by Contentful CMS
- **Music**: Personal music projects and mixes
- **Contact**: Get in touch page
- **Responsive Design**: Mobile-first approach with Tailwind CSS
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

- `cd src && bun run dev` - Start development server
- `cd src && bun run build` - Build for production
- `cd src && bun run start` - Start production server
- `cd src && bun run lint` - Run ESLint (may need to install ESLint first)
- `cd src && npx tsc --noEmit` - Run TypeScript type checking (may need to install TypeScript globally)
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
├── Pulumi.yaml          # Pulumi project configuration
├── Pulumi.dev.yaml      # Development stack configuration
├── Pulumi.prod.yaml     # Production stack configuration
└── package.json         # Root package.json (workspaces)
```

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
pulumi preview

# Deploy to development
pulumi up
```

### Production Deployment

```bash
# Switch to production stack
pulumi stack select prod

# Deploy to production
pulumi up
```

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
