'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('AnimalHistories', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      AnimalId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Animals',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      },
      weightedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      weight: {
        allowNull: false,
        type: Sequelize.DECIMAL(10, 2)
      },
      pasture: {
        allowNull: false,
        type: Sequelize.INTEGER
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
    return queryInterface.dropTable('AnimalHistories')
  }
};
