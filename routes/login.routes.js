const router = require('express').Router();
const bcrypt = require('bcrypt');
const Login = require('../views/Login');
const { User } = require('../db/models');

router.get('/', (req, res) => {
  res.renderComponent(Login, {
    title: 'LOG IN',
  });
});

router.post('/', async (req, res) => {
  try {
    const { login, password } = req.body;
    const userLogin = await User.findOne({ where: { login } });

    if (!login && !password) {
      res.status(400).json({ message: 'Эти поля пустые' });
      return;
    }
    if (!userLogin) {
      res.status(400).json({ message: 'Не правильный логин' });
      return;
    }
    const hash = await bcrypt.compare(password, userLogin.password);
    if (hash) {
      res.app.locals.user = { id: userLogin.id };
      req.session.userid = userLogin.id;
      res.json({ login: 'ok' });
    } else {
      res.status(400).json({ message: 'Не правильный пароль' });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
