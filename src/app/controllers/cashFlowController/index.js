const db = require('../../models');
const { Op } = require('sequelize')
const { responseErrorHandler } = require('../../../helpers')
const { NotFoundError, BodyPropertyError} = require('../../errors')
const moment = require('moment')
const  Big = require('big-js')

 module.exports =  {
    create : async (req, res) => {
        try {
            const { FarmId, flowType:flowTypeName, decription } = req.body

            const farm = await db.Farm.findByPk(FarmId,{attributes:['id','UserId']})

            if(!farm) throw new NotFoundError('Fazenda não encontrada')

            const flowType = await db.FlowType.findOne({ where: { name:flowTypeName } })

            if(!flowType) throw new NotFoundError('FlowType não encontrado')
            console.log(req.body.receiveOrPaidAt)
            const receiveOrPaidAt  = moment(req.body.receiveOrPaidAt,'YYYY-MM-DD')

            const value =  Big(req.body.value)
            
            await db.CashFlow.create({
              value,  
              FarmId,
              FlowTypeId:flowType.id,
              receiveOrPaidAt,
              decription
            })

            res.status(200).json({ message: 'Despesa adicionado ao fluxo de caixa' });
            
        } catch (error) {
          responseErrorHandler(error, res, req)
        }
     },

  all : async (req, res) => {
    try {
      const {  FarmId  } = req.params;
      const {  initialDate, finalDate  } = req.body;
      const where = initialDate && finalDate ? { 
        FarmId,
        receiveOrPaidAt: { [Op.gte]: moment(initialDate,'YYYY/MM/DD'), [Op.lte]: moment(finalDate,'YYYY/MM/DD') }
       } :{ 
        FarmId,
       }

      const farm = await db.Farm.findByPk(FarmId,{attributes:['id','UserId']})

      if(!farm) throw new NotFoundError('Fazenda não encontrada')

      const cashFlows = await db.CashFlow.findAll({ 
        include:[{
          model: db.FlowType,
          attributes:['id','name']
        }],
        where,
        order:[['receiveOrPaidAt','desc']] });
  
      const cashFlowFomarted = cashFlows.map(cashFlow=>{
        return {
          CashFlowId: cashFlow.id,
          receiveOrPaidAt: cashFlow.receiveOrPaidAt,
          value: cashFlow.value,
          description:cashFlow.decription,
          flowType:cashFlow.dataValues.FlowType.dataValues.name
        }
      })
      return res.status(200).json({cashFlows:cashFlowFomarted})
    } catch (error) {
      responseErrorHandler(error, res, req)
    }
  },

  delete : async (req, res) => {
    try {

      const { CashFlowId } = req.body;

      const cashFlow = await db.CashFlow.findByPk(CashFlowId)

      if(!cashFlow)  throw new NotFoundError('Movimentação não encontrada')

      await cashFlow.destroy()

      return res.status(200).json({msg:'Movimentação deletada com sucesso'})
    } catch (error) {
      responseErrorHandler(error, res, req)
    }
  }
}

