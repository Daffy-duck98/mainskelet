const router = require('express').Router();

router.get('/', (req, res) => {
  res.app.locals.user = {};
  req.session.destroy((err) => {
    if (err) {
      return res.status(400).json({ message: 'Ошибка удаления сессии' });
    }
    res.clearCookie('user_sid');
    res.redirect('/');
  });
});

module.exports = router;
