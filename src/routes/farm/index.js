const { requiresAdminToken } = require('../../app/middlewares')
const { farmController } = require('../../app/controllers')
const router = require('express-promise-router')()
    
/**
 * @api {post} /farm/create Create
 * @apiParam {String} data - name string
 * @apiParam {String} data - UserId number
 * @apiParam {String} data - street string
 * @apiParam {String} data - number number
 * @apiParam {String} data - complement string
 * @apiParam {String} data - district string
 * @apiParam {String} data - city string
 * @apiParam {String} data -     string
 *
 * @apiName Farm
 * @apiGroup create
 */
router.post('/create', requiresAdminToken, farmController.create)

/**
 * @api {post} /farm/all
 *
 * @apiName Farm
 */
router.post('/all', requiresAdminToken, farmController.all)



module.exports = router