const express = require('express');
const bodyParser = require('body-parser');
const routeHandler = require('./routes');

module.exports = config => {
  // App goes here

  const app = express();
  app.set('trust proxy', 1); // trust first proxy

  // Routes
  app.use('/', routeHandler(config));

  // 404 handling
  app.use((req, res, next) => {
    const err = new Error(`Not Found (${req.url})`);
    err.status = 404;
    next(err);
  });

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));

  return app;
};
