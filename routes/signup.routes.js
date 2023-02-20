const router = require('express').Router();
const bcrypt = require('bcrypt');
const Signup = require('../views/Signup');
const { User } = require('../db/models');

router.get('/', (req, res) => {
  try {
    res.renderComponent(Signup, {
      title: 'SIGN UP',
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post('/', async (req, res) => {
  try {
    const { name, login, email, password, password2 } = req.body;
    console.log(name, login, email, password, password2);
    const userLogin = await User.findOne({ where: { login } });
    const userEmail = await User.findOne({ where: { email } });

    if (!name && !login && !email && !password && !password2) {
      res.status(400).json({ message: 'Эти поля пустые ' });
      return;
    }
    if (userLogin) {
      res
        .status(400)
        .json({ message: 'Пользователь с такими логином уже есть !' });
      return;
    }
    if (userEmail) {
      res
        .status(400)
        .json({ message: 'Пользователь с такими email уже есть !' });
      return;
    }
    if (password === password2) {
      const hashPassword = await bcrypt.hash(password, 7);
      const newUser = await User.create({
        name,
        login,
        email,
        password: hashPassword,
      });
      res.app.locals.user = { id: newUser.id };
      req.session.userid = newUser.id;
      res.json({ signup: 'ok' });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
