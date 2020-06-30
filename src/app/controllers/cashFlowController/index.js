const db = require('../../models');
const { responseErrorHandler } = require('../../../helpers')
const { NotFoundError, BodyPropertyError} = require('../../errors')
const moment = require('moment')
const  Big = require('big-js')

 module.exports =  {
    create : async (req, res) => {
        try {
            const { FarmId, FlowTypeId, isExpenses } = req.body

            const farm = await db.Farm.findByPk(FarmId,{attributes:['id','UserId']})

            if(!farm) throw new NotFoundError('Fazenda não encontrada')

            const flowType = await db.FlowType.findByPk(FlowTypeId)

            if(!flowType) throw new NotFoundError('FlowType não encontrado')

            const receiveOrPaidAt  = moment(req.body.receiveOrPaidAt,'DD-MM-YYYY')

            const value = isExpenses ? new Big(req.body.value).times(-1) : new Big(req.body.value)
            
            await db.CashFlow.create({
              value,
              FarmId,
              FlowTypeId,
              receiveOrPaidAt,
            })

            res.status(200).json({ message: 'Despesa adicionado ao fluxo de caixa' });
            
        } catch (error) {
          responseErrorHandler(error, res, req)
        }
     },

  all : async (req, res) => {
    try {
      const {  FarmId  } = req.body;

      const farm = await db.Farm.findByPk(FarmId,{attributes:['id','UserId']})

      if(!farm) throw new NotFoundError('Fazenda não encontrada')

      const cashFlows = await db.CashFlow.findAll({ where : { FarmId }, order:[['FlowTypeId','asc']] });
  
      if(!cashFlows.length) throw new NotFoundError('Nenhum Fluxo de caixa encontrado')

      return res.status(200).json({cashFlows})
    } catch (error) {
      responseErrorHandler(error, res, req)
    }
  },

  delete : async (req, res) => {
    try {

    } catch (error) {
      responseErrorHandler(error, res, req)
    }
  }
}

