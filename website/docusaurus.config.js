// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer').themes.github;
const darkCodeTheme = require('prism-react-renderer').themes.dracula;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Corso',
  tagline: 'Free, Secure, and Open-Source Backup for Microsoft 365',
  url: 'https://corso.ll.vg',
  baseUrl: process.env.CORSO_DOCS_BASEURL || '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',
  favicon: 'img/corso_logo.svg',
  trailingSlash: true,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'alcionai', // Usually your GitHub org/user name.
  projectName: 'corso', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  staticDirectories: ['static', 'public'],

  plugins: [
    'docusaurus-plugin-sass',
    require.resolve('docusaurus-plugin-image-zoom')
  ],

  customFields: {
    corsoVersion: `${process.env.CORSO_VERSION}`,
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          remarkPlugins: [require('mdx-mermaid')],
          editUrl:
            'https://github.com/alcionai/corso/tree/main/website',
        },
        blog: {
          showReadingTime: true,
          blogTitle: 'Corso Blog',
          blogDescription: 'Blog about Microsoft 365 protection, backup, and security',
        },
        sitemap: {
          ignorePatterns: ['/tags/**'],
          filename: 'sitemap.xml',
        },
        gtag: {
          trackingID: 'GTM-KM3XWPV',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.scss'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: '',
        logo: {
          alt: 'Corso Logo',
          src: '/img/corso_horizontal_logo.svg',
          srcDark: 'img/corso_horizontal_logo_white.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'quickstart',
            position: 'left',
            label: 'Quick Start',
          },
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Docs',
          },
          {
            href: 'https://discord.gg/63DTTSnuhT',
            label: 'Community',
            position: 'left',
          },
          {
            to: '/blog',
            label: 'Blog',
            position: 'left'
          },
          {
            href: 'https://github.com/alcionai/corso',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        logo: {
          alt: 'Corso Logo',
          src: 'img/corso_horizontal_logo_white.svg',
          height: 60,
        },
        links: [
          {
            title: 'Open Source',
            items: [
              {
                label: 'Docs',
                to: '/docs/intro',
              },
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/alcionai/corso',
              },
              {
                label: 'Corso Discord',
                href: 'https://discord.gg/63DTTSnuhT',
              },
            ],
          },
          {
            title: ' ',
          },
          {
            title: 'Alcion, Powered by Corso',
            items: [
              {
                label: 'Backup as a Service',
                href: 'https://www.alcion.ai',
              },
              {
                label: 'Alcion Discord',
                href: 'https://www.alcion.ai/discord',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} | Version ${process.env.CORSO_VERSION}`,
      },
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },

      zoom: {
        selector: '.markdown img',
        background: {
          light: 'rgb(255, 255, 255)',
          dark: 'rgb(50, 50, 50)'
        },
        // options you can specify via https://github.com/francoischalifour/medium-zoom#usage
        config: {
          margin: 24,
          background: '#242526',
          scrollOffset: 0,
        },
      },

      algolia: {
        appId: 'EPJZU1WKE7',
        apiKey: 'd432a94741013719fdd0d78275c7aa9c',
        indexName: 'corsobackup',
        contextualSearch: true,
      },

      image: 'img/cloudbackup.png',

      metadata : [
        {name: 'twitter:card', content: 'summary_large_image'},
        {name: 'twitter:site', content: '@corsobackup'},
      ],

      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['powershell'],
      },
    }),
};

module.exports = config;
