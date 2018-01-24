const express = require('express');
const botRoute = require('./botRoute');

module.exports = config => {
  const router = express.Router();
  router.get('/', (req, res) => {
    res.json({ howdy: 'partner' });
  });

  router.get('/smssent', botRoute(config));

  return router;
};
