const koa = require('koa')
const app = new koa()
app.use(async ctx => {
    ctx.body = {
        data: '能跑的小蜗牛'
    }
})
app.listen(3000)
module.exports = app