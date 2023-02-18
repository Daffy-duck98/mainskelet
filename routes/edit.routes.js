const router = require('express').Router();
const { Game } = require('../db/models');
const Edit = require('../views/Edit');

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const games = await Game.findOne({
    where: { id, user_id: res.app.locals.userId },
  });
  res.renderComponent(Edit, {
    title: 'Edit Game',
    games,
  });
});

router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { title, img, description } = req.body;

  if (title && img && description) {
    const games = await Game.findOne({
      where: { id, user_id: res.app.locals.userId },
    });
    games.title = title;
    games.img = img;
    games.description = description;
    games.save();
    res.json({ edit: 'ok' });
  } else {
    res.status(400).json({ message: 'Заполните все поля...' });
  }
});

module.exports = router;
