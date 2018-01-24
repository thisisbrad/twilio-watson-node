const express = require('express');
const botRoute = require('./botRoute');
const orderRoute = require('./orderRoute');

module.exports = config => {
  const router = express.Router();
  router.get('/', (req, res) => {
    res.json({ howdy: 'partner' });
  });

  router.use('/smssent', botRoute(config));
  router.use('/orders', orderRoute(config));

  return router;
};
