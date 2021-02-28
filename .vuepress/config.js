module.exports = {
  "title": "Forapi.cn",
  "description": "虽千万里，吾往矣！",
  "dest": "dist",
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "/favicon.ico"
      }
    ],
    [
      "meta",
      {
        "name": "viewport",
        "content": "width=device-width,initial-scale=1,user-scalable=no"
      }
    ]
  ],
  // "theme": "reco",
  "themeConfig": {
    "nav": [
      {
        "text": "首页",
        "link": "/",
        "icon": "reco-home"
      },
      {
        "text": "时间轴",
        "link": "/timeline/",
        "icon": "reco-date"
      },
      {
        "text": "联系",
        "icon": "reco-message",
        "items": [
          {
            "text": "简书",
            "link": "https://www.jianshu.com/u/f22487800f07",
            "icon": "reco-jianshu"
          },
          {
            "text": "GitHub",
            "link": "https://github.com/zhb333",
            "icon": "reco-github"
          },
          {
            "text": "Gitee",
            "link": "https://gitee.com/zhanghuanbiao",
            "icon": "reco-mayun"
          },
        ]
      }
    ],
    "type": "blog",
    "blogConfig": {
      "category": {
        "location": 2,
        "text": "分类"
      },
      "tag": {
        "location": 3,
        "text": "标签"
      }
    },
    "friendLink": [
      {
        "title": "游戏管理后台",
        "desc": "纯前端的游戏管理后台系统，后端数据为模拟数据",
        "email": "1140454303@qq.com",
        "link": "https://zhanghuanbiao.gitee.io/vv-admin"
      },
      {
        "title": "专题编辑器",
        "desc": "机顶盒专题拖拽编辑器",
        "email": "1140454303@qq.com",
        "link": "https://zhanghuanbiao.gitee.io/topic-editor/"
      },
      {
        "title": "tv.js文档",
        "desc": "tv.js 纯es3规范，编写的机顶盒 JavaScript 运行库",
        "email": "1140454303@qq.com",
        "link": "https://zhanghuanbiao.gitee.io/tv-docs/"
      }
    ],
    "logo": "/logo.png",
    "search": true,
    "searchMaxSuggestions": 10,
    "lastUpdated": "Last Updated",
    "author": "zhb333",
    "authorAvatar": "/avatar.jpeg",
    "record": "xxxx",
    "startYear": "2017",
  },
  "markdown": {
    "lineNumbers": true
  }
}