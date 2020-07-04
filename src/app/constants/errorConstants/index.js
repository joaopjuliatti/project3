module.exports = {
  auth:{
    invalidToken: 'Token used is not valid, please try a another one',
    couldNotEncrypt: 'It was not possible to generate encrypt token',
    tokenNotProvided : 'Token was not provided'
  },
  notFound: (instance = null) => `${instance} not found`,
  notAuthorized: 'Not authorized',
  defaultMessage: 'Erro, por favor tente novamente'
}
