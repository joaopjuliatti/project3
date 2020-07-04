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
router.post('/:FarmId/all', loginMiddleware, cashFlowController.all)

/**
 * @api {post} /cash-flow/delete Create
 * @apiParam {String} data - CashFlowId
 * @apiName CashFlow
 * @apiGroup delete
 */
router.post('/delete', loginMiddleware, cashFlowController.delete)


module.exports = router