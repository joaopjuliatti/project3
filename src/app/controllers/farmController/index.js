const db = require('../../models');
const { logger } = require('../../../helpers');


 module.exports =  {
    create : async (req, res) => {
      const { UserId, zipcode, name, street, number, complement, district, city, state } = req.body
      
      logger.info(`Creating new Farm for UserId:${UserId}`)

      await db.Farm.create({ UserId, zipcode, name, street, number, complement, district, city, state});

      res.status(200).json({ message: 'Fazenda cadastrada com sucessso' });
  },

  all : async (req, res) => {

    const farms = await db.Farm.findAll({ 
      where : {UserId: req.user.userId},
      order:[['updatedAt','asc']]
     });

    if (!farms.length) {
      res.status(401).json({ message: 'Fazendas não encontradas para este usuário' });
      return;
    }

    return res.status(200).json({farms})
  }
}

