const { loginMiddleware } = require('../../app/middlewares')
const { cashFlowController } = require('../../app/controllers')
const router = require('express-promise-router')()
    
/**
 * @api {post} /cash-flow/create Create
 * @apiParam {String} data - name string
 * @apiName CashFlow
 * @apiGroup create
 */
router.post('/create', loginMiddleware, cashFlowController.create)

/**
 * @api {post} /cash-flow/all
 * @apiParam {Number} data - FlowTypeId number 
 * @apiName CashFlow
 * @apiGroup all
 */
router.post('/all', loginMiddleware, cashFlowController.all)



module.exports = router