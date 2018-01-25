const ConversationV1 = require('watson-developer-cloud/conversation/v1');
const client = require('twilio')(
  process.env.TWILIO_SID,
  process.env.TWILIO_TOKEN
);
const orderService = require('./orderService');
const config = require('../config');

const log = config.logger;

// Setup the Watson Converstion with your keys. Use .env file, duh!
const conversation = new ConversationV1({
  username: process.env.WATSON_KEY,
  password: process.env.WATSON_SECRET,
  version_date: ConversationV1.VERSION_DATE_2016_09_20
});

const contexts = [];
const order = {}; // Setup empty order
const sizeRx = RegExp('size_*', 'g'); // RegEx for size

async function sendMessage(message, number, twilioNumber) {
  // You know, debugging stuff
  // log.info(`Recieved message from ${number} saying '${message}'`);

  let context = null; // Sets up the context of Watson convo
  let index = 0;
  let contextIndex = 0;
  contexts.forEach(value => {
    if (value.from === number) {
      context = value.context;
      // log.info('CONTEXT: ', context.system);
      contextIndex = index;
    }
    index += 1;
  });

  conversation.message(
    {
      input: { text: message },
      workspace_id: process.env.WATSON_WORKSPACE_ID,
      context
    },
    async (err, response) => {
      if (err) throw err;

      // console.log(response.output.text[0]);
      if (context === null) {
        order.convoId = response.context.conversation_id; // attach convo id to the order
        order.from = number; // attach the user's phone number
        order.status = 'Just Placed'; // attach the user's phone number
        contexts.push({ from: number, context: response.context });
      } else {
        contexts[contextIndex].context = response.context;
      }

      const { intent } = response.intents[0];

      if (sizeRx.test(intent)) {
        order.size = intent.replace('size_', ''); // Catpure selected size
        console.log(`They picked a ${order.size} size.`);
      }

      if (intent === 'flavor') {
        order.flavor = response.entities[0].value; // Catpure selected flavor
        console.log(`They picked ${order.flavor} flavor.`);
      }

      // Cherries
      if (
        (intent === 'no' || intent === 'yes') &&
        order.nuts &&
        order.cherry === undefined
      ) {
        order.cherry = intent;
        console.log('Picking CHERRY! ', order.cherry);
      }

      // Nuts
      if ((intent === 'no' || intent === 'yes') && order.nuts === undefined) {
        order.nuts = intent;
        console.log('Picking nuts! ', order.nuts);
      }

      if (intent === 'done') {
        try {
          const placed = await orderService.create(order); // Save to MongoDB
          console.log('Complete! ', placed); // Just to log what comes back from MongoDB}
        } catch(err){
          log.fatal(err)
        }

      client.messages.create(
        {
          from: twilioNumber,
          to: number,
          body: response.output.text[0]
        },
        errTwilio => {
          if (err) {
            console.error(errTwilio.message);
          }
        }
      );
    }
  );
}

module.exports = {
  sendMessage
};
