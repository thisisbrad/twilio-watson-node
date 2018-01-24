const express = require('express');
const orderService = require('../../services/orderService');

module.exports = config => {
  const router = express.Router();
  const log = config.logger;

  router.get('/', async (req, res, next) => {
    try {
      const items = await orderService.getAll();
      log.info('Found items: ', items);
      return res.json({
        items
      });
    } catch (err) {
      return next(err);
    }
  });

  return router;
};
