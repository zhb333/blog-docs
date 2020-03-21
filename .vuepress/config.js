module.exports = {
  base: '/readme-blog/',
  title: 'forapi.cn', // Title for the site. This will be displayed in the navbar.
  description: '学习记录 代码分享 经验总结 开发教程',
  lange: 'zh-CN',
  theme: require.resolve('./theme/'),
  markdown: {
    lineNumbers: true
  },
  themeConfig: {
    dateFormat: 'YYYY-MM-DD',
    nav: [
      {
        text: 'Blog',
        link: '/posts/',
      },
      {
        text: 'Tags',
        link: '/tag/',
      },
    ],
    directories: [
      {
        id: 'home',
        dirname: '_posts',
        path: '/',
        layout: 'IndexHome'
      },
      {
        id: 'post',
        dirname: '_posts',
        path: '/posts/',
        itemPermalink: '/posts/:year/:month/:day/:slug'
      },
    ],
    footer: {
      contact: [
        {
          type: 'github',
          link: 'https://github.com/zhb333/readme-blog',
        }
      ],
      copyright: [
        {
          text: '粤ICP备20016112号',
          link: 'http://beian.miit.gov.cn',
        },
        {
          text: 'MIT Licensed | Copyright © 2020-present forapi.cn',
          link: 'https://github.com/zhb333/readme-blog',
        },
      ]
    },
    comment: {
      service: 'vssue',
      owner: 'zhb333',
      repo: 'readme-blog', 
      clientId: '',
      clientSecret: '',
    },

    newsletter: {
      title: '邮件订阅',
      content: '请输入您的邮箱...',
      submitText: '订阅',
      endpoint: 'https://forapi.us19.list-manage.com/subscribe/post?u=ac82b3046426d14cad8f2a3ef&amp;id=ebfc431c44'
    },

    sitemap: {
      hostname: 'http://forapi.cn'
    },

    feed: {
      canonical_base:'http://forapi.cn',
    },

    smoothScroll: true
  }
}