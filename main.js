const port = process.env.PORT || 5000
const Koa = require('koa');
const app = new Koa();

app.use(async ctx => {
  ctx.body = 'Hello World koa!!!';
});

app.listen(port);