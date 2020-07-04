'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Farms', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      UserId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Users',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      },
      name: {
        type: Sequelize.STRING(64),
        allowNull: false
      },
      zipcode: {
        allowNull: false,
        type: Sequelize.STRING(8)
      },
      street: {
        allowNull: false,
        type: Sequelize.STRING(128)
      },
      number: {
        allowNull: true,
        type: Sequelize.STRING(32)
      },
      complement: {
        allowNull: true,
        type: Sequelize.STRING(128)
      },
      district: {
        allowNull: false,
        type: Sequelize.STRING(64)
      },
      city: {
        allowNull: false,
        type: Sequelize.STRING(128)
      },
      state: {
        allowNull: false,
        type: Sequelize.STRING(2)
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    })
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Farms')
  }
};
