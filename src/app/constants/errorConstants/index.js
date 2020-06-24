module.exports = {
  auth:{
    invalidToken: 'Token used is not valid, please try a another one'
  },
  notFound: (instance = null) => `${instance} not found`,
  notAuthorized: 'Not authorized',
  defaultMessage: 'Erro, por favor tente novamente'
}
