const config = require('../config');

const log = config.logger;

const contexts = [];
// const order = {}; // Setup empty order
// const sizeRx = RegExp('size_*', 'g'); // RegEx for size

async function sendMessage(message, number, twilioNumber) {
  // coming in!

  let context = null; // Sets up the context of Watson convo
  let index = 0;
  let contextIndex = 0;
  contexts.forEach(value => {
    // console.log(value.from);
    if (value.from === number) {
      log.info('CONTEXT: ', context);
      context = value.context;
      contextIndex = index;
    }
    index += 1;
  });

  log.info('DEBUG!', message, number, twilioNumber);
}

module.exports = {
  sendMessage
};
