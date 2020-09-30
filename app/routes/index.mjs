import Router from 'koa-router'

import users from './users'

const router = new Router()

const pingPong = new Router().get('/', (ctx, next) => {
  ctx.body = { message: 'Pong' }
})


router.use('/users', users.routes())
router.use('/ping', pingPong.routes())

export default router
