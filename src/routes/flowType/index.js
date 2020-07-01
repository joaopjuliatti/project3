const { loginMiddleware } = require('../../app/middlewares')
const { flowTypeController } = require('../../app/controllers')
const router = require('express-promise-router')()
    
/**
 * @api {post} /flow-type/create Create
 * @apiParam {String} data - name string
 * @apiName FlowType
 * @apiGroup create
 */
router.post('/create', loginMiddleware, flowTypeController.create)

/**
 * @api {post} /flow-type/deactivate
 * @apiParam {Number} data - FlowTypeId number 
 * @apiName flow-type
 * @apiGroup deactivate
 */
router.post('/deactivate', loginMiddleware, flowTypeController.deactivate)



module.exports = router