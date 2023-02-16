const bcrypt = require('bcrypt');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(
      'Users',
      [
        {
          name: 'John Doe',
          login: 'Leo',
          email: '22@22.ru',
          password: await bcrypt.hash('111111', 7),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Doe',
          login: 'Leo1',
          email: '11@11.ru',
          password: await bcrypt.hash('111111', 7),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Users', null, {});
  },
};
