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

  // Update Order
  router.post('/', async (req, res) => {
    const { _id, convo_id, from, size, flavor, nuts, cherry } = req.body;
    log.info('BODY', req.body);

    try {
      const itemData = { convo_id, from, size, flavor, nuts, cherry };
      const item = await orderService.update(_id, itemData);
      return res.json({ item });
    } catch (err) {
      log.fatal(err);
      return res.json({ error: err });
    }
  });

  return router;
};
