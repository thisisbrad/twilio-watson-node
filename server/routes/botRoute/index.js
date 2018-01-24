const express = require('express');

module.exports = config => {
  const router = express.Router();
  const log = config.logger;

  return router;
};
