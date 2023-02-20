const router = require('express').Router();
const Main = require('../views/Main');
const { Game } = require('../db/models');

router.get('/', async (req, res) => {
  try {
    const games = await Game.findAll();
    res.renderComponent(Main, {
      title: 'MAIN PAGE',
      games,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
