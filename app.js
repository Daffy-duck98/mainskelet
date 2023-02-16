require('@babel/register');
require('dotenv').config();

const express = require('express');

const app = express();
const db = require('./db/models');
const config = require('./config/config');

const PORT = process.env.PORT ?? 5000;

config(app);

const mainRoutes = require('./routes/main.routes');
const signUpRoutes = require('./routes/signup.routes');
const logInRoutes = require('./routes/login.routes');
const logOutRoutes = require('./routes/logout.routes');
const allGamesRouters = require('./routes/allgames.routes');

app.use('/', mainRoutes);
app.use('/signup', signUpRoutes);
app.use('/login', logInRoutes);
app.use('/logout', logOutRoutes);
app.use('/mygames', allGamesRouters);

async function server() {
  try {
    await db.sequelize.authenticate();
    app.listen(PORT, () => {
      console.log(`great port ${PORT}`);
    });
  } catch (err) {
    console.log(err.message);
  }
}
server();
