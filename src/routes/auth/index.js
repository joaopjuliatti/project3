const { requiresAdminToken } = require('../../app/middlewares')
const { authController } = require('../../app/controllers')
const router = require('express-promise-router')()
    
/**
 * @api {post} /auth/login 
 * @apiParam {String} data - email string
 * @apiParam {String} data - password string
 *
 * @apiName Auth
 * @apiGroup Login
 */
router.post('/login', authController.login)
    /**
 * @api {post} /auth/signup Create a User if no exists
 * @apiParam {String} data - email string
 * @apiParam {String} data - password string
 * @apiParam {String} data - name string
 * @apiParam {String} data - cpf string
 *
 * @apiName Auth
 * @apiGroup Sign-up
 */
router.post('/signup', requiresAdminToken, authController.signup)

module.exports = router