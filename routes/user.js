const router = require('koa-router')()
router.prefix('/api/user')

router.post('/login', async (ctx, next) => {
    const {username, password} = ctx.request.body
    const query = ctx.query
    ctx.body = {
        errno:0,
        query,
        data:[username, password]
    }
})

module.exports = router