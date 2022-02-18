module.exports = {
  siteName: 'Sanqi Blog',
  logo: '/logo.jpg',
  siteDesc: '坚持是对平庸最好的打击！',
  nav: [
    { text: '🏠 Home', link: '/' },
    { text: '📖 Essays', link: '/categories/essays/' },
    // { text: '🐉 Maker', link: '/categories/maker/' },
    // { text: '🔥 Animation', link: '/categories/animation/' },
    // { text: '📽 Old Time', link: '/categories/oldtime/' },
    // { text: '🔗 friend-links', link: '/friend-links/' },
  ],
  searchPlaceholder: 'Search',
  searchMaxSuggestions: 10,
  social: [
    {
      type: 'email',
      link: 'sanqi377@outlook.com'
    },
    {
      type: 'github',
      link: 'sanqi377'
    },
    {
      type: 'feed',
      link: '/rss.xml'
    }
  ],
  copyright: '<p>© 2022 ❤️ <a target="_blank" href="https://www.qblog.cc/">San Qi</a></p><p><a href="http://www.beian.miit.gov.cn/">蜀ICP备15021049号-3</a></p>',
  blog: {
    directories: [
      {
        id: 'post',
        dirname: '_post',
        path: '/',
        itemPermalink: '/post/:year/:month/:day/:slug.html',
        frontmatter: { title: '' },
        pagination: {
          perPagePosts: 10,
          prevText: '',
          nextText: ''
        },
      }
    ],
    frontmatters: [
      {
        id: "tag",
        keys: ['tag', 'tags'],
        path: '/tags/',
        frontmatter: { title: 'Tag' },
        pagination: {
          lengthPerPage: 10,
          prevText: '',
          nextText: ''
        }
      },
      {
        id: "category",
        keys: ['category', 'categories'],
        path: '/categories/',
        frontmatter: { title: 'Category' },
        pagination: {
          lengthPerPage: 10,
          prevText: '',
          nextText: ''
        }
      }
    ],
    sitemap: {
      hostname: 'https://www.qblog.cc',
      exclude: ['/404.html']
    },
    feed: {
      canonical_base: 'https://www.qblog.cc',
    },
    palette: {},
    comment: {}
  }
}