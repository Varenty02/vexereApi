'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert(
      'stations', 
    [
      {
      name: 'Bến xe miền tây',
      address: '395 kinh dương vương',
      province:"HCM",
      createdAt:"2021-03-26 07:06:14",
      updatedAt:"2021-03-26 07:06:14"
      },
      {
        name: 'Bến xe đà nẵng',
        address: 'Tôn đức thắng',
        province:"DN",
        createdAt:"2022-03-26 07:06:14",
        updatedAt:"2022-03-26 07:06:14"
        }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('stations', null, {});
  }
};
