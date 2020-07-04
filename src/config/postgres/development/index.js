module.exports = {
    username: process.env.DEV_POSTGRES_RDS_USERNAME,
    password: process.env.DEV_POSTGRES_RDS_PASSWORD,
    database: process.env.DEV_POSTGRES_RDS_DATABASE,
    host: process.env.DEV_POSTGRES_RDS_HOST,
    port: process.env.DEV_POSTGRES_RDS_PORT,
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false
      }
    },
    options: {
      dialect: 'postgres',
      operatorsAliases: false,
      logging: false,
    }
  }
  