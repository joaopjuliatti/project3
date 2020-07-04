module.exports = {
    username: process.env.PROD_POSTGRES_USERNAME,
    password: process.env.PROD_POSTGRES_PASSWORD,
    database: process.env.PROD_POSTGRES_DATABASE,
    host: process.env.PROD_POSTGRES_HOST,
    port: process.env.PROD_POSTGRES_PORT,
    options: {
      dialect: 'postgres',
      ssl: true,
      dialectOptions: {
        ssl: {
          require: true,
          rejectUnauthorized: false
        }
      },
      logging: false,
      operatorsAliases: false
    }
  }
  