const { requiresAdminToken } = require('../../app/middlewares')
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
router.post('/create', requiresAdminToken, animalController.create)

/**
 * @api {post} /farm/all
 * @apiParam {Number} data - FarmId number 
 * @apiName Farm
 * @apiGroup all
 */
router.post('/all', requiresAdminToken, animalController.all)

/**
 * @api {post} /farm/sell
 * @apiParam {Number} data - FarmId number 
 * @apiParam {Number} data - RealId number 
 * @apiName Farm
 * @apiGroup sell
 */
router.post('/sell', requiresAdminToken, animalController.sell)


/**
 * @api {post} /animal/repurchase
 * @apiParam {Number} data - FarmId number 
 * @apiParam {Number} data - RealId number 
 * @apiName Farm
 * @apiGroup repurchase
 */
router.post('/repurchase', requiresAdminToken, animalController.repurchase)


module.exports = router