const { loginMiddleware } = require('../../app/middlewares')
const { farmController } = require('../../app/controllers')
const router = require('express-promise-router')()
    
/**
 * @api {post} /farm/create Create
 * @apiParam {String} data - name string
 * @apiParam {Number} data - UserId number
 * @apiParam {String} data - street string
 * @apiParam {Number} data - number number
 * @apiParam {String} data - complement string
 * @apiParam {String} data - district string
 * @apiParam {String} data - city string
 * @apiParam {String} data - state string
 *
 * @apiName Farm
 * @apiGroup create
 */
router.post('/create', loginMiddleware, farmController.create)

/**
 * @api {post} /farm/all
 * @apiParam {Number} data - UserId number 
 * @apiName Farm
 */
router.get('/all', loginMiddleware, farmController.all)



module.exports = router