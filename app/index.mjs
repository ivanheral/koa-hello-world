import Koa from 'koa'
import bodyParser from 'koa-bodyparser'
import router from './routes'

const app = new Koa()

const PORT = process.env.PORT || 8007

app.context.hello = 'Hello, world!'

// Error handling
app.on('error', (err, ctx) => {
  console.error(err.message, ctx.response.status)
})

app.use(bodyParser({
  onerror: (err, ctx) => {
    ctx.throw('body parse error', 422)
  },
}))

// Using middleware
app.use(async (ctx, next) => {
  const start = Date.now()
  await next()
  const ms = Date.now() - start
  ctx.set('X-Response-Time', `${ms}ms`)
})

app.use(async (ctx, next) => {
  const start = Date.now()
  await next()
  const ms = Date.now() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}`)
})

app.use(async (ctx) => {
  ctx.body = 'Hello, world!'
})

// Use routes
app
  .use(router.routes())
  .use(router.allowedMethods())

// Listen
app.listen(PORT, () => {
  console.log(`Listening to port ${PORT}`)
})
