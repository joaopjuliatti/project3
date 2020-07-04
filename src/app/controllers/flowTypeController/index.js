const db = require('../../models');
const { responseErrorHandler } = require('../../../helpers')
const { NotFoundError, BodyPropertyError } = require('../../errors')
const moment = require('moment')

 module.exports =  {
    create : async (req, res) => {
        try {
            const { name } = req.body

            const flowType = await db.FlowType.findOne({where: {name}})

            if(!flowType){
              await db.FlowType.create({
                name
              })
  
              res.status(200).json({ message: `FlowType cadastrado` });
            }else{
              if(flowType.active) throw new BodyPropertyError('FlowType já está cadastrado')
                await flowType.update({active:true})
                return res.status(200).json({ message: `FlowType atualizado` });
            }

        } catch (error) {
          responseErrorHandler(error, res, req)
        }
     },
     all : async (req, res) => {
      try {
          const flowTypes = await db.FlowType.findAll({
            where: {active: true},
            order:[['name','desc']]
          })

          res.status(200).json({ flowTypes });

      } catch (error) {
        responseErrorHandler(error, res, req)
      }
   },

    deactivate : async (req, res) => {
    try {
      const { FlowTypeId } = req.body;

      const flowType = await db.FlowType.findByPk(FlowTypeId);

      if(!flowType) throw new NotFoundError('FlowType não encontrado')

      await flowType.update({active:false})
  
      return res.status(200).json({message: 'Flowtype desativado'})
    } catch (error) {
      responseErrorHandler(error, res, req)
    }
  },
}

