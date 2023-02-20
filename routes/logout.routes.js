const router = require('express').Router();

router.get('/', (req, res) => {
  try {
    res.app.locals.user = '';
    req.session.destroy((err) => {
      if (err) {
        return res.status(400).json({ message: 'Ошибка удаления сессии' });
      }
      res.clearCookie('user_sid');
      res.redirect('/');
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
