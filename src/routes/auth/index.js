const { passwordlessLoginMiddleware } = require('../../app/middlewares')
const { authControler } = require('../../app/controllers')
    
module.exports = app => {
    /**
     * @api {post} /cpf Create a CPF if no exists
     * @apiParam {String} data - CPF string
     *
     * @apiName Create
     * @apiGroup CPF
     */
    app.post('/auth/login', authControler.login)
        /**
     * @api {post} /cpf Create a CPF if no exists
     * @apiParam {String} data - CPF string
     *
     * @apiName Create
     * @apiGroup CPF
     */
    app.post('/auth/signup', passwordlessLoginMiddleware, authControler.signup)
}