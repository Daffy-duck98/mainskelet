const router = require('express').Router();
const Mygames = require('../views/Mygames');
const { Game } = require('../db/models');

router.get('/', async (req, res) => {
  const games = await Game.findAll();
  res.renderComponent(Mygames, {
    title: 'My Games',
    games,
  });
});

module.exports = router;
