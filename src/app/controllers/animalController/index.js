const db = require('../../models');
const { responseErrorHandler } = require('../../../helpers')
const { NotFoundError, BodyPropertyError} = require('../../errors')
const moment = require('moment')

 module.exports =  {
    create : async (req, res) => {
        try {
            const { FarmId } = req.body

            const farm = await db.Farm.findByPk(FarmId,{attributes:['id','UserId']})

            if(!farm) throw new NotFoundError('Fazenda não encontrada')
            console.log(req.body.boughtAt)
            const boughtAt  = moment(req.body.boughtAt,'YYYY-MM-DD')

            const animal = await db.Animal.create({
              FarmId: farm.id,
              UserId: farm.UserId,
              RealId: req.body.RealId,
              boughtAt,
              initialAge: req.body.initialAge
            })

            await db.AnimalHistory.create({
              AnimalId: animal.id,
              weightedAt:boughtAt,
              weight: req.body.initialWeight,
              initialAge: req.body.initialAge
            })

            res.status(200).json({ message: 'Animal cadastrado' });
            
        } catch (error) {
          responseErrorHandler(error, res, req)
        }
     },

  all : async (req, res) => {
    try {
      const {  FarmId  } = req.params;

      const animals = await db.Animal.findAll({
        where :{ FarmId, active:true } });
    
      const animaisFormated = await Promise.all(animals.map( async animal=>{
        const tempObject = {
          id: animal.dataValues.id,
          status: animal.dataValues.status,
          RealId: animal.dataValues.RealId,
          FarmId : animal.dataValues.FarmId,
          boughtAt: animal.dataValues.boughtAt
        }
        const now = moment()
        const boughtAt = moment(tempObject.boughtAt)
        const age = now.diff(boughtAt,'months')
        tempObject.ageMonth = age + animal.initialAge

        const animalHistory = await db.AnimalHistory.findOne({
          attributes:['weight'],
          where:{AnimalId: animal.dataValues.id},
          order:[['updatedAt','desc']]
        })
        tempObject.lastWeight = animalHistory.weight

        return tempObject
      }))

      return res.status(200).json({ animals:animaisFormated})
    } catch (error) {
      responseErrorHandler(error, res, req)
    }
  },
  
  sell : async (req, res) => {
    try {
      const { AnimalId } = req.body;

      const animal = await db.Animal.findByPk(AnimalId,{ where:{active:true}});
      console.log(animal)
      if(!animal) throw new NotFoundError('Animal não encontrado')

      if(animal.status ==='sold') throw new BodyPropertyError('Animal já foi vendido anteriormente')
      
      await animal.update({status:'sold'})
      return res.status(200).json({message:`Animal com identificador ${animal.RealId} foi atualizado para vendido com sucesso`})
    } catch (error) {
      responseErrorHandler(error, res, req)
    }
  },

  repurchase : async (req, res) => {
    try {
      const { AnimalId } = req.body;

      const animal = await db.Animal.findByPk(AnimalId,{ where:{active:true}});

      if(!animal) throw new NotFoundError('Animal não encontrado')

      if(animal.status !=='sold') throw new BodyPropertyError('Animal não pode ser recomprado')
      
      await animal.update({status:'fattening'})

      return res.status(200).json({message:`Animal com identificador ${animal.RealId} foi atualizado recomprado com sucesso`})
    } catch (error) {
      responseErrorHandler(error, res, req)
    }
  },

  deactive : async (req, res) => {
    try {
      const { AnimalId } = req.body;

      const animal = await db.Animal.findByPk(AnimalId);

      if(!animal) throw new NotFoundError('Animal não encontrado')

      if(!animal.active) throw new BodyPropertyError('Animal já desativado')
      
      await animal.update({active:false})
      return res.status(200).json({message:`Animal desativado com sucesso`})
    } catch (error) {
      responseErrorHandler(error, res, req)
    }
  },
}

