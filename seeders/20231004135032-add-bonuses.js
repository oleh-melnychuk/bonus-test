'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('bonus', [
      {
        bonus_limit: 2,
        user_bonus_limit: 2,
      },
      {
        bonus_limit: 5,
        user_bonus_limit: 1,
      },
    ]);
  },

  async down(queryInterface) {
    queryInterface.bulkDelete('bonus');
  },
};
