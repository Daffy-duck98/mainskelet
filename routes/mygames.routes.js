const router = require('express').Router();
const Mygames = require('../views/Mygames');
const Mygame = require('../views/Mygame');
const { Game } = require('../db/models');

router.get('/', async (req, res) => {
  try {
    const games = await Game.findAll({
      where: { user_id: req.session.userid },
    });
    res.renderComponent(Mygames, {
      title: 'My Games',
      games,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post('/', async (req, res) => {
  try {
    const id = req.session.userid;
    const { title, img, description } = req.body;

    if ((title, img, description)) {
      const games = await Game.create({
        title,
        img,
        description,
        user_id: id,
      });
      res.renderComponent(Mygame, {
        games,
      });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const games = await Game.destroy({
      where: { id: Number(id), user_id: req.session.userid },
    });
    res.json(games);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
