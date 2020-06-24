const db = require('../../models');
const { responseErrorHandler } = require('../../../helpers')
const { NotFoundError, BodyPropertyError} = require('../../errors')
const moment = require('moment')

 module.exports =  {
    create : async (req, res) => {
        try {
            const { name } = req.body

            await db.FlowType.create({
              name
            })

            res.status(200).json({ message: `FlowType cadastrado` });
            
        } catch (error) {
          responseErrorHandler(error, res, req)
        }
     },

  desactive : async (req, res) => {
    try {
      const {  FlowTypeId } = req.body;

      const flowType = await db.FlowType.findByPk(FlowTypeId);

      if(!flowType) throw new NotFoundError('FlowType não encontrado')

      await flowType.update({active:false})
  
      return res.status(200).json({message: 'Flowtype desativado'})
    } catch (error) {
      responseErrorHandler(error, res, req)
    }
  },
}

