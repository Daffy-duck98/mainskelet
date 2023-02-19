const router = require('express').Router();
const Mygames = require('../views/Mygames');
const Mygame = require('../views/Mygame');
const { Game } = require('../db/models');

router.get('/', async (req, res) => {
  const games = await Game.findAll({
    where: { user_id: res.app.locals.userId },
  });
  res.renderComponent(Mygames, {
    title: 'My Games',
    games,
  });
});

router.post('/', async (req, res) => {
  const id = res.app.locals.userId;
  const { title, img, description } = req.body;

  const games = await Game.create({
    title,
    img,
    description,
    user_id: id,
  });

  res.renderComponent(Mygame, {
    games,
  });
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const games = await Game.destroy({
    where: { id: Number(id), user_id: res.app.locals.userId },
  });
  res.json({ delete: 'ok' });
});

module.exports = router;
