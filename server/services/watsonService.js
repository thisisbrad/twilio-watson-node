const ConversationV1 = require('watson-developer-cloud/conversation/v1');
const config = require('../config');

const log = config.logger;
// Setup the Watson Converstion with your keys. Use .env file, duh!
const conversation = new ConversationV1({
  username: process.env.WATSON_KEY,
  password: process.env.WATSON_SECRET,
  version_date: ConversationV1.VERSION_DATE_2016_09_20
});

const contexts = [];
// const order = {}; // Setup empty order
// const sizeRx = RegExp('size_*', 'g'); // RegEx for size

async function sendMessage(message, number, twilioNumber) {
  // You know, debugging stuff
  // log.info(`Recieved message from ${number} saying '${message}'`);

  let context = null; // Sets up the context of Watson convo
  let index = 0;
  let contextIndex = 0;
  contexts.forEach(value => {
    if (value.from === number) {
      log.info('CONTEXT: ', context);
      context = value.context;
      contextIndex = index;
    }
    index += 1;
  });

  log.info('CONTEXT: ', JSON.stringify(context));
  log.info('where at', contexts.length);

  // log.info('DEBUG!', message, number, twilioNumber);
}

module.exports = {
  sendMessage
};
