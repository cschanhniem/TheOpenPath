# The Open Path - Docusaurus Website

This directory contains the Docusaurus-based website for The Open Path - Global Flourishing Initiative.

## Overview

The website is built using [Docusaurus 3](https://docusaurus.io/), a modern static website generator that provides:

- **Documentation-focused**: Optimized for content-heavy sites
- **Multi-language support**: Ready for internationalization
- **Search functionality**: Built-in search capabilities
- **Mobile responsive**: Works seamlessly on all devices
- **GitHub Pages deployment**: Automated deployment via GitHub Actions

## Project Structure

```
website/
├── docs/                    # Main documentation content
│   ├── index.md            # Homepage
│   ├── TheOpenPath/        # Module 00: The Open Path
│   ├── TheFlourishingStart/ # Module 01: The Flourishing Start
│   ├── EcologicalIntegrity/ # Module 02: Ecological Integrity
│   ├── UniversalBasicNeeds/ # Module 03: Universal Basic Needs
│   ├── GlobalHealth_DiseaseEradication/ # Module 04: Global Health
│   ├── GlobalPeace_Cooperation/ # Module 05: Global Peace & Cooperation
│   ├── CONTRIBUTING.md     # Contributing guidelines
│   ├── LICENSE.md          # License information
│   └── ...                 # Additional documentation
├── i18n/                   # Internationalization files (future)
├── src/                    # Custom React components and CSS
├── static/                 # Static assets (images, files)
├── docusaurus.config.ts    # Main configuration file
├── package.json            # Dependencies and scripts
└── README.md              # This file
```

## Getting Started

### Prerequisites

- Node.js 18+
- pnpm (recommended package manager)

### Installation

```bash
cd website
pnpm install
```

### Development

Start the development server:

```bash
pnpm start
```

This opens the website at `http://localhost:3000/TheOpenPath/` with hot reloading.

### Building

Create a production build:

```bash
pnpm build
```

The static files will be generated in the `build/` directory.

### Local Testing

Test the production build locally:

```bash
pnpm serve
```

## Configuration

### Main Configuration

The main configuration is in `docusaurus.config.ts`. Key settings include:

- **Base URL**: `/TheOpenPath/` (for GitHub Pages)
- **Organization**: `cschanhniem`
- **Repository**: `TheOpenPath`
- **Deployment**: GitHub Pages via GitHub Actions

### Navigation

The sidebar navigation is automatically generated from the file structure in the `docs/` directory. Each folder becomes a section, and markdown files become pages.

### Styling

Custom styles are in `src/css/custom.css`. The site uses:

- **Primary color**: Deep blue (#1e3a8a)
- **Secondary color**: Warm gold (#f59e0b)
- **Font**: System fonts for optimal performance

## Multi-Language Support

The site is configured for multi-language support but currently only English is active. To enable other languages:

1. Update `docusaurus.config.ts` to include additional locales
2. Add translation files in the `i18n/` directory
3. Translate content in the respective language directories

## Deployment

### GitHub Pages

The site automatically deploys to GitHub Pages when changes are pushed to the `main` branch via the GitHub Actions workflow in `.github/workflows/deploy.yml`.

**Note**: The configuration is already set up for the `cschanhniem/TheOpenPath` repository.

### Manual Deployment

For manual deployment to other platforms:

```bash
pnpm build
# Upload the contents of build/ to your hosting provider
```

## Content Management

### Adding New Pages

1. Create a new `.md` file in the appropriate directory under `docs/`
2. Add frontmatter with title and description
3. The page will automatically appear in navigation

### Editing Existing Content

Simply edit the markdown files in the `docs/` directory. Changes will be reflected immediately in development mode.

### Adding Images

Place images in the `static/img/` directory and reference them in markdown:

```markdown
![Alt text](/img/your-image.png)
```

## Contributing

See [CONTRIBUTING.md](../CONTRIBUTING.md) for guidelines on contributing to the project.

## License

This project is licensed under CC0 1.0 Universal. See [LICENSE.md](../LICENSE) for details.

## Support

For questions or issues with the website:

1. Check the [Docusaurus documentation](https://docusaurus.io/docs)
2. Open an issue in the GitHub repository
3. Refer to the main project documentation

---

*Built with ❤️ using Docusaurus*
