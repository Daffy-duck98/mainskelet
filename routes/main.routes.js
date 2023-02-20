const router = require('express').Router();
const Main = require('../views/Main');
const { Game } = require('../db/models');

router.get('/', async (req, res) => {
  const games = await Game.findAll();

  res.renderComponent(Main, {
    title: 'MAIN PAGE',
    games,
  });
});

module.exports = router;
