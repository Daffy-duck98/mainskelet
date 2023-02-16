/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(
      'Games',
      [
        {
          title: 'GTA III',
          img: 'https://avatars.mds.yandex.net/i?id=416b51d5f8fc7c66f94dfa1352facef1c593046c-8343339-images-thumbs&n=13',
          description:
            'Мультиплатформенная компьютерная игра в жанре action-adventure, первая в составе известной одноимённой франшизы. Игроку предстоит взять на себя роль преступника, который может свободно перемещаться по городу и выполнять различные задания криминального характера, такие как заказные убийства, угоны и т. п',
          user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'GTA III',
          img: 'https://avatars.mds.yandex.net/i?id=416b51d5f8fc7c66f94dfa1352facef1c593046c-8343339-images-thumbs&n=13',
          description:
            'Мультиплатформенная компьютерная игра в жанре action-adventure, первая в составе известной одноимённой франшизы. Игроку предстоит взять на себя роль преступника, который может свободно перемещаться по городу и выполнять различные задания криминального характера, такие как заказные убийства, угоны и т. п',
          user_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Games', null, {});
  },
};
