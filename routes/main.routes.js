const router = require('express').Router();
const Main = require('../views/Main');

router.get('/', (req, res) => {
  res.renderComponent(Main, {
    title: 'MAIN PAGE',
  });
});

module.exports = router;
