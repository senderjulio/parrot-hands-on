'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    
     await queryInterface.bulkInsert('Users', [{
        name: 'John Doe',
        email: "teste@teste.com",
        apartment: 10,
        password: "123465",
        createdAt: new Date(),
        updatedAt: new Date(),
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
