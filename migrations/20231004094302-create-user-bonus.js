'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.createTable(
      'user_bonus',
      {
        id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          autoIncrement: true,
          unique: true,
          primaryKey: true,
        },
        bonus_limit: {
          type: Sequelize.SMALLINT,
          allowNull: false,
        },
        user_id: {
          type: Sequelize.SMALLINT,
          allowNull: false,
        },
        bonus_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: {
              tableName: 'bonus',
            },
            key: 'id',
          },
        },
        created_at: {
          allowNull: false,
          type: Sequelize.DATE,
          defaultValue: Sequelize.fn('now'),
        },
        updated_at: {
          allowNull: false,
          type: Sequelize.DATE,
          defaultValue: Sequelize.fn('now'),
        },
      },
      {
        uniqueKeys: {
          actions_unique: {
            fields: ['user_id', 'bonus_id'],
          },
        },
      },
    );
  },

  async down(queryInterface) {
    return queryInterface.dropTable('user_bonus');
  },
};
