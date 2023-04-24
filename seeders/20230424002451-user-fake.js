'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('users', [
      {
      name: "hiếu",
      email: "hieudk2182@gmail.com",
      password: "123456",
      numberPhone: "0327810932",
      type: "admin",
      avatar: null,
      createdAt:"2021-03-26 07:06:14",
      updatedAt:"2021-03-26 07:06:14"
      },
      {
        name: "tài",
        email: "trantai@gmail.com",
        password: "123456",
        numberPhone: "0327810932",
        type: "client",
        avatar: null,
        createdAt:"2021-03-26 07:06:14",
        updatedAt:"2021-03-26 07:06:14"
        },
  ], {})
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
