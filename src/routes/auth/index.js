const { requiresAdminToken } = require('../../app/middlewares')
const { authControler } = require('../../app/controllers')
    
module.exports = app => {
    /**
     * @api {post} /auth/login Create a CPF if no exists
     * @apiParam {String} data - email string
     * @apiParam {String} data - password string
     *
     * @apiName Auth
     * @apiGroup Login
     */
    app.post('/auth/login', authControler.login)
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
    app.post('/auth/signup', requiresAdminToken, authControler.signup)
}