const db = require('../../models');
const { responseErrorHandler } = require('../../../helpers')
const { NotFoundError, BodyPropertyError} = require('../../errors')
const moment = require('moment')

 module.exports =  {
    create : async (req, res) => {
        try {
            const { RealId, FarmId, pasture, weight } = req.body

            const animal = await db.Animal.findOne({ where: { RealId, FarmId } });

            if(!animal) throw new NotFoundError('Animal não encontrado')

            const weightedAt  = moment(req.body.weightedAt,'DD-MM-YYYY')

            await db.AnimalHistory.create({
              AnimalId: animal.id,
              weightedAt,
              weight: req.body.weight,
              pasture: req.body.pasture
            })

            res.status(200).json({ message: `Historico do Animal com id ${ RealId} cadastrado` });
            
        } catch (error) {
          responseErrorHandler(error, res, req)
        }
     },

  all : async (req, res) => {
    try {
      const {  RealId, FarmId  } = req.body;

      const animal = await db.Animal.findOne({ where: { RealId, FarmId } });

      console.log(animal)

      if(!animal) throw new NotFoundError('Animal não encontrado')

      const animalHistories = await db.AnimalHistory.findAll({ where : { AnimalId:animal.id } });
  
      if(!animalHistories.length) throw new NotFoundError('Nenhum histórico encontrado pra esse animal')

      return res.status(200).json({animalHistories})
    } catch (error) {
      responseErrorHandler(error, res, req)
    }
  },
}

