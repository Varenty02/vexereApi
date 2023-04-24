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
    await queryInterface.bulkInsert('trips', [
      {
      startTime:"2021-03-26 07:06:14",
      price:100000,
      fromStation:1,
      toStation:2,
      createdAt:"2021-03-26 07:06:14",
      updatedAt:"2021-03-26 07:06:14"
      },
      {
        startTime:"2021-03-26 07:06:14",
        price:100000,
        fromStation:2,
        toStation:1,
        createdAt:"2021-03-26 07:06:14",
        updatedAt:"2021-03-26 07:06:14"
      }], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
