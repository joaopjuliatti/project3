const { loginMiddleware } = require('../../app/middlewares')
const { animalHistoryController } = require('../../app/controllers')
const router = require('express-promise-router')()
    
/**
 * @api {post} /animal-history/create Create
 * @apiParam {String} data - FarmId number
 * @apiParam {String} data - RealId number
 * @apiParam {String} data - boughtAt string
 * @apiParam {number} data - initialAge string
 * @apiName Farm
 * @apiGroup create
 */
router.post('/create', loginMiddleware, animalHistoryController.create)

/**
 * @api {post} /animal-history/all
 * @apiParam {Number} data - FarmId number 
 * @apiName Farm
 * @apiGroup all
 */
router.post('/all', loginMiddleware, animalHistoryController.all)

module.exports = router