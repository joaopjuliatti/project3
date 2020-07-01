module.exports = {
  auth: {
    adminToken :  process.env.LOCAL_ADMIN_TOKEM,
    appSecret : process.env.JWT_USER_TOKEN_HASH,
    appSecretExpiresIn : process.env.JTW_USER_TOKEN_EXPIRATION
  }
}
  