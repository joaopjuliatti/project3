const db = require('../../models');
const { passwordManager, logger} = require('../../../helpers');
const { tokenEncryptionService } = require('../../services');


 module.exports =  {
    signup : async (req, res) => {
    const { email,cpf,name } = req.body;
    const userExist = await db.User.findOne({ where : { email} });

    if (userExist) {
      res.status(400).json({ message: 'Usuário já cadastrado' });
      return;
    }
    const encryptedPassword = passwordManager.encrypt(req.body.password);

    logger.info('Creating new User')
    await db.User.create({email,cpf,name, encryptedPassword});

    res.status(200).json({ message: 'Usuário cadastrado com sucessso' });
  },

  login : async (req, res) => {
    const { email, password } = req.body;

    const user = await db.User.findOne({ where : {email} });

    if (!user) {
      res.status(401).json({ message: 'Usuário ou senha errados' });
      return;
    }

    const passwordCorrect = passwordManager.verify(password, user.encryptedPassword);

    if (!passwordCorrect) {
      res.status(401).json({ message: 'Usuário ou senha errados' });

      return;
    }
    const token = tokenEncryptionService.encrypt({ name: user.name, email: user.email, userId: user.id })

    res.status(200).json({
      type: 'Bearer',
      token,
    });
  }
}

