const express = require('express');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const path = require('path');
const sessionConfig = require('./sessionConfig');
const ssr = require('../middleware/ssr');
const { getUser, resLocals } = require('../middleware/userLoc');

const config = (app) => {
  app.use(morgan('dev'));
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
  app.use(express.static(path.join(__dirname, '../public')));
  app.use(cookieParser());
  app.use(session(sessionConfig));
  app.use(ssr);
  app.use(getUser);
  app.use(resLocals);
  app.disable('x-powered-by');
};

module.exports = config;
