const express = require('express');
const wastonService = require('../../services/watsonService');

module.exports = config => {
  const router = express.Router();
  const log = config.logger;
  const waston = wastonService;

  router.get('/', async (req, res) => {
    log.info('here');
    const message = req.query.Body; // Grabs the text message
    const number = req.query.From; // Grabs the from cell number
    const twilioNumber = req.query.To; // Grabs the Twilio cell number
    await waston.sendMessage(message, number, twilioNumber);
    return res.send('');
  });

  return router;
};
