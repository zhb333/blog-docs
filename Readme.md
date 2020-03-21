# VuePress 开发静态博客

## 预览

**点击 [静态博客](https://zhb333.github.io/readme-blog/) 查看线上效果**

## 本地运行

```sh
git clone https://github.com/zhb333/readme-blog.git

cd readme-blog

yarn
# npm install

yarn dev
# npm run dev
```

## 评论和订阅功能需要自定义的参数

**.vuepress/config.js**

```js
comment: {
  owner: '', // github 用户名
  repo: '', // 仓库地址
  clientId: '', 
  clientSecret: '',
},

newsletter: {
  // ...
  endpoint: ''
},
```

**如果不清楚上面的参数，请先阅读 [VuePress 开发静态博客](https://zhb333.github.io/readme-blog/2020/03/21/vuepress%E5%BC%80%E5%8F%91%E9%9D%99%E6%80%81%E5%8D%9A%E5%AE%A2/)**