import { createRequire } from 'module'
import { defineConfig, type DefaultTheme } from 'vitepress'

const require = createRequire(import.meta.url)
const pkg = require('vitepress/package.json')

export default defineConfig({
  lang: 'en-US',
  title: 'Jrepus',
  // description: '555555Vite & Vue powered static site generator.',
  
  // lastUpdated: true,
  // cleanUrls: true,

  // sitemap: {
  //   hostname: 'https://vitepress.dev',
  //   transformItems(items) {
  //     return items.filter((item) => !item.url.includes('migration'))
  //   }
  // },

  // head: [
  //   ['link', { rel: 'icon', href: '/vitepress-logo-mini.svg' }],
  //   ['meta', { name: 'theme-color', content: '#5f67ee' }],
  //   ['meta', { name: 'og:type', content: 'website' }],
  //   ['meta', { name: 'og:locale', content: 'en' }],
  //   ['meta', { name: 'og:site_name', content: 'VitePress' }],
  //   [
  //     'meta',
  //     { name: 'og:image', content: 'https://vitepress.dev/vitepress-og.jpg' }
  //   ],
  //   [
  //     'meta',
  //     {
  //       name: 'twitter:image',
  //       content: 'https://vitepress.dev/vitepress-og.jpg'
  //     }
  //   ],
  //   [
  //     'script',
  //     {
  //       src: 'https://cdn.usefathom.com/script.js',
  //       'data-site': 'AZBRSFGG',
  //       'data-spa': 'auto',
  //       defer: ''
  //     }
  //   ]
  // ],

  themeConfig: {
    logo: { src: '/1280_1280.png', width: 24, height: 24 },
  
    nav: nav(),

    // sidebar: {
    //   '/guide/': { base: '/guide/', items: sidebarGuide() },
    //   '/reference/': { base: '/reference/', items: sidebarReference() }
    // },

    // sidebar: [
    //   {
    //     text: 'Section Title A',
    //     items: [
    //       { text: 'Item A', link: '/item-a' },
    //       { text: 'Item B', link: '/item-b' },
          
    //     ]
    //   },
    //   {
    //     text: 'Section Title B',
    //     items: [
    //       { text: 'Item C', link: '/item-c' },
    //       { text: 'Item D', link: '/item-d' },
          
    //     ]
    //   }
    // ],

    sidebar: [
      // This sidebar gets displayed when a user
      // is on `guide` directory.
      {
        text: 'Concept Explanation', link: '/guide',
        items: []
      },

      {
        text: 'Getting Started', link: '/introduction/getting-started',
        items: []
      },      
        {
          text: 'Guide',
          collapsed: true,
          items: [
            { text: 'Index', link: '/guide/' },
            { text: 'One', link: '/guide/one' },
            { text: 'Two', link: '/guide/two' },
          ]
        },

        {
          text: 'Config',
          collapsed: true,
          items: [
            { text: 'Index', link: '/config/' },
            { text: 'Three', link: '/config/three' },
            { text: 'Four', link: '/config/four' },
          ]
        }

      ],

      // This sidebar gets displayed when a user
      // is on `config` directory.
      // '/config/': [
      //   {
      //     text: 'Config',
      //     collapsed: true,
      //     items: [
      //       { text: 'Index', link: '/config/' },
      //       { text: 'Three', link: '/config/three' },
      //       { text: 'Four', link: '/config/four' },
      //     ]
      //   }
      // ],
    

    // editLink: {
    //   pattern: 'https://github.com/vuejs/vitepress/edit/main/docs/:path',
    //   text: 'Edit this page on GitHub'
    // },

    // socialLinks: [
    //   { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    // ],

    footer: {
      // message: 'Released under the MIT License.',
      copyright: 'Copyright © 2023 Jrepus'
    },

    // search: {
    //   provider: 'algolia',
    //   options: {
    //     appId: '8J64VVRP8K',
    //     apiKey: 'a18e2f4cc5665f6602c5631fd868adfd',
    //     indexName: 'vitepress'
    //   }
    // },

    // carbonAds: {
    //   code: 'CEBDT27Y',
    //   placement: 'vuejsorg'
    // }
  }
})

function nav(): DefaultTheme.NavItem[] {
  return [
    // {
    //   text: 'Guide',
    //   link: '/guide/what-is-vitepress',
    //   activeMatch: '/guide/'
    // },
    // {
    //   text: 'Reference',
    //   link: '/reference/site-config',
    //   activeMatch: '/reference/'
    // },
    // {
    //   text: pkg.version,
    //   items: [
    //     {
    //       text: 'Changelog',
    //       link: 'https://github.com/vuejs/vitepress/blob/main/CHANGELOG.md'
    //     },
    //     {
    //       text: 'Contributing',
    //       link: 'https://github.com/vuejs/vitepress/blob/main/.github/contributing.md'
    //     }
    //   ]
    // }
  ]
}

/* prettier-ignore */
function sidebarGuide(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'Introduction',
      collapsed: false,
      items: [
        { text: 'What is VitePress?', link: 'what-is-vitepress' },
        { text: 'Getting Started', link: 'getting-started' },
        { text: 'Routing', link: 'routing' },
        { text: 'Deploy', link: 'deploy' }
      ]
    },
    {
      text: 'Writing',
      collapsed: false,
      items: [
        { text: 'Markdown Extensions', link: 'markdown' },
        { text: 'Asset Handling', link: 'asset-handling' },
        { text: 'Frontmatter', link: 'frontmatter' },
        { text: 'Using Vue in Markdown', link: 'using-vue' },
        { text: 'Internationalization', link: 'i18n' }
      ]
    },
    {
      text: 'Customization',
      collapsed: false,
      items: [
        { text: 'Using a Custom Theme', link: 'custom-theme' },
        { text: 'Extending the Default Theme', link: 'extending-default-theme' },
        { text: 'Build-Time Data Loading', link: 'data-loading' },
        { text: 'SSR Compatibility', link: 'ssr-compat' },
        { text: 'Connecting to a CMS', link: 'cms' }
      ]
    },
    {
      text: 'Experimental',
      collapsed: false,
      items: [
        { text: 'MPA Mode', link: 'mpa-mode' },
        { text: 'Sitemap Generation', link: 'sitemap-generation' }
      ]
    },
    { text: 'Config & API Reference', base: '/reference/', link: 'site-config' }
  ]
}

function sidebarReference(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'Reference',
      items: [
        { text: 'Site Config', link: 'site-config' },
        { text: 'Frontmatter Config', link: 'frontmatter-config' },
        { text: 'Runtime API', link: 'runtime-api' },
        { text: 'CLI', link: 'cli' },
        {
          text: 'Default Theme',
          base: '/reference/default-theme-',
          items: [
            { text: 'Overview', link: 'config' },
            { text: 'Nav', link: 'nav' },
            { text: 'Sidebar', link: 'sidebar' },
            { text: 'Home Page', link: 'home-page' },
            { text: 'Footer', link: 'footer' },
            { text: 'Layout', link: 'layout' },
            { text: 'Badge', link: 'badge' },
            { text: 'Team Page', link: 'team-page' },
            { text: 'Prev / Next Links', link: 'prev-next-links' },
            { text: 'Edit Link', link: 'edit-link' },
            { text: 'Last Updated Timestamp', link: 'last-updated' },
            { text: 'Search', link: 'search' },
            { text: 'Carbon Ads', link: 'carbon-ads' }
          ]
        }
      ]
    }
  ]
}