const { requiresAdminToken } = require('../../app/middlewares')
const { cashFlowController } = require('../../app/controllers')
const router = require('express-promise-router')()
    
/**
 * @api {post} /cash-flow/create Create
 * @apiParam {String} data - name string
 * @apiName CashFlow
 * @apiGroup create
 */
router.post('/create', requiresAdminToken, cashFlowController.create)

/**
 * @api {post} /cash-flow/all
 * @apiParam {Number} data - FlowTypeId number 
 * @apiName CashFlow
 * @apiGroup all
 */
router.post('/all', requiresAdminToken, cashFlowController.all)



module.exports = router