module.exports = {
  auth: {
    adminToken :  process.env.PRODUCTION_ADMIN_TOKEN,
    appSecret : process.env.JWT_USER_TOKEN_HASH,
    appSecretExpiresIn : process.env.JTW_USER_TOKEN_EXPIRATION
  }
}
  