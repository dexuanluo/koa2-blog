const router = require('koa-router')()
router.prefix('/api/blog')

router.get('/list', (ctx, next)=>{
    const query = ctx.query
    ctx.body = {
        errno:0,
        query,
        data:['api blog list']
    }
})

module.exports = router