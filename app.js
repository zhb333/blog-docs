const path = require('path')
const Koa = require('koa')
const KoaStatic = require('koa-static')

const app = new Koa()

app.use(KoaStatic(path.join(__dirname, './dist/')))

app.listen(80, () => {
    console.log('app running at port 80')
})