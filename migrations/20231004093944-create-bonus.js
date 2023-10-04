'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.createTable('bonus', {
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
      user_bonus_limit: {
        type: Sequelize.SMALLINT,
        allowNull: false,
      },
    });
  },

  async down(queryInterface) {
    return queryInterface.dropTable('bonus');
  },
};
