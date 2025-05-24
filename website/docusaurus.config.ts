import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'The Open Path - Global Flourishing Initiative',
  tagline: 'An open-source knowledge commons for individual well-being and global flourishing',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://cschanhniem.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/TheOpenPath/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'cschanhniem', // Usually your GitHub org/user name.
  projectName: 'TheOpenPath', // Usually your repo name.

  onBrokenLinks: 'warn', // Temporarily set to warn to allow build with translation issues
  onBrokenMarkdownLinks: 'warn',

  // Google site verification
  headTags: [
    {
      tagName: 'meta',
      attributes: {
        name: 'google-site-verification',
        content: 'fqsbgZCRj4E4_HtMh3iAsSBMFqS8AbUtMqOvRveOYOQ',
      },
    },
  ],

  // Multi-language support
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es', 'vi'],
    localeConfigs: {
      en: {
        label: 'English',
        direction: 'ltr',
        htmlLang: 'en-US',
      },
      es: {
        label: 'Español',
        direction: 'ltr',
        htmlLang: 'es-ES',
      },
      vi: {
        label: 'Tiếng Việt',
        direction: 'ltr',
        htmlLang: 'vi-VN',
      },
    },
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/cschanhniem/TheOpenPath/tree/main/',
          routeBasePath: '/', // Serve docs at the site's root
        },
        blog: false, // Disable blog
        theme: {
          customCss: './src/css/custom.css',
        },
        gtag: {
          trackingID: 'G-NRX3NSDM1N',
          anonymizeIP: true,
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'The Open Path',
      logo: {
        alt: 'The Open Path Logo',
        src: 'img/logo.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'mainSidebar',
          position: 'left',
          label: 'Documentation',
        },
        {
          type: 'localeDropdown',
          position: 'right',
        },
        {
          href: 'https://github.com/cschanhniem/TheOpenPath',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentation',
          items: [
            {
              label: 'The Open Path',
              to: '/',
            },
            {
              label: 'Contributing',
              to: '/contributing',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'GitHub Discussions',
              href: 'https://github.com/cschanhniem/TheOpenPath/discussions',
            },
            {
              label: 'Issues',
              href: 'https://github.com/cschanhniem/TheOpenPath/issues',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/cschanhniem/TheOpenPath',
            },
            {
              label: 'License',
              to: '/license',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} The Open Path - Global Flourishing Initiative. Licensed under Creative Commons.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
