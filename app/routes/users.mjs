import Router from 'koa-router'

const router = new Router()

router
  .get('/', (ctx, next) => {
    ctx.body = { message: 'ユーザー一覧' }
  })
  .get('/:id', (ctx, next) => {
    ctx.body = { message: `ユーザーID: ${ctx.params.id}` }
  })

export default router
