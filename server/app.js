const express = require('express');
const bodyParser = require('body-parser');

module.exports = config => {
  // App goes here

  const app = express();

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));

  return app;
};
