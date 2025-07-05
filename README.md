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
- **Package Manager**: Bun
- **Icons**: Lucide React

## Features

- **Portfolio**: Showcase of software projects and work
- **Blog**: Stories and articles powered by Contentful CMS
- **Music**: Personal music projects and mixes (currently only links out to the dedicated web app (source))
- **Contact**: Get in touch page
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Dark Mode**: Theme switching capability
- **Type Safety**: Full TypeScript implementation

## Development: Getting Started

### Prerequisites

- [Bun](https://bun.sh/) installed on your machine
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

```bash
cp .env.local.example .env.local
```

Edit `.env.local` with your Contentful credentials:

```
NEXT_PUBLIC_CONTENTFUL_SPACE_ID=your_space_id
NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN=your_access_token
NEXT_PUBLIC_GOOGLE_ANALYTICS_ID=your_ga_id
```

4. Run the development server:

```bash
bun run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Development Commands

- `bun run dev` - Start development server
- `bun run build` - Build for production
- `bun run start` - Start production server
- `bun run lint` - Run ESLint
- `tsc --noEmit` - Run TypeScript type checking

## Project Structure

```
├── app/                    # Next.js App Router pages
│   ├── contact/           # Contact page
│   ├── music/             # Music showcase
│   ├── projects/          # Portfolio projects
│   ├── stories/           # Blog posts
│   └── layout.tsx         # Root layout
├── components/            # Reusable components
│   ├── ui/               # shadcn/ui components
│   ├── footer.tsx        # Site footer
│   └── header.tsx        # Site header
├── lib/                  # Utility functions
│   ├── contentful.ts     # Contentful CMS integration
│   └── utils.ts          # General utilities
├── hooks/                # Custom React hooks
├── styles/               # Global styles
└── public/               # Static assets
```

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

## Deployment

The site is optimized for deployment on Vercel:

1. Connect your GitHub repository to Vercel
2. Add environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

## Contributing

This is a personal website, but suggestions and improvements are welcome! Please open an issue or submit a pull request.

## License

This project is open source and available under the [MIT License](LICENSE).
