module.exports = {
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
    }
  }
}
