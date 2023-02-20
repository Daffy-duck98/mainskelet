const router = require('express').Router();
const { Game } = require('../db/models');
const Edit = require('../views/Edit');

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const games = await Game.findOne({
      where: { id, user_id: res.app.locals.userId },
    });
    res.renderComponent(Edit, {
      title: 'Edit Game',
      games,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.put('/:id', async (req, res) => {
  try {
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
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
