'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.sequelize.query(`
      CREATE OR REPLACE FUNCTION bonus_availability() RETURNS TRIGGER LANGUAGE PLPGSQL AS $$
      BEGIN
      
      UPDATE bonus SET is_active = false WHERE id = NEW.bonus_id AND
      (SELECT SUM(bonus_limit) from user_bonus WHERE bonus_id = NEW.bonus_id) >= bonus.bonus_limit;
      
      return NEW;
      END;
      $$;
    `);

    await queryInterface.sequelize.query(`
      CREATE TRIGGER bonus_availability_trigger AFTER
      INSERT ON user_bonus REFERENCING NEW TABLE AS inserted
      FOR EACH ROW EXECUTE FUNCTION bonus_availability();
    `);
  },

  async down(queryInterface) {
    queryInterface.sequelize.query(`
      DROP TRIGGER IF EXISTS bonus_availability_trigger ON user_bonus;
      DROP FUNCTION bonus_availability
    `);
  },
};
