const { loginMiddleware } = require('../../app/middlewares')
const { animalController } = require('../../app/controllers')
const router = require('express-promise-router')()
    
/**
 * @api {post} /farm/create Create
 * @apiParam {String} data - FarmId number
 * @apiParam {String} data - RealId number
 * @apiParam {String} data - boughtAt string
 * @apiParam {number} data - initialAge string
 * @apiName Farm
 * @apiGroup create
 */
router.post('/create', loginMiddleware, animalController.create)
    
/**
 * @api {post} /farm/all
 * @apiParam {Number} data - FarmId number 
 * @apiName Farm
 * @apiGroup all
 */
router.get('/:FarmId/all', loginMiddleware, animalController.all)

/**
 * @api {post} /farm/sell
 * @apiParam {Number} data - FarmId number 
 * @apiParam {Number} data - RealId number 
 * @apiName Farm
 * @apiGroup sell
 */
router.put('/sell', loginMiddleware, animalController.sell)


/**
 * @api {post} /animal/repurchase
 * @apiParam {Number} data - FarmId number 
 * @apiParam {Number} data - RealId number 
 * @apiName Farm
 * @apiGroup repurchase
 */
router.put('/repurchase', loginMiddleware, animalController.repurchase)


/**
 * @api {post} /animal/deactive
 * @apiParam {Number} data - FarmId number 
 * @apiParam {Number} data - RealId number 
 * @apiName Farm
 * @apiGroup repurchase
 */
router.put('/deactive', loginMiddleware, animalController.deactive)


module.exports = router