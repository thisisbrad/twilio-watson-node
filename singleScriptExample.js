const express = require('express');
const mongoose = require('mongoose');
const ConversationV1 = require('watson-developer-cloud/conversation/v1');

const app = express();

const mongoURI = process.env.MONGO_URI;

mongoose.connect(mongoURI);

const Order = require('./models/Order');

let contexts = [];
const order = {}; // Setup empty order
const sizeRx = RegExp('size_*', 'g'); // RegEx for size

app.get('/smssent', (req, res) => {
  const message = req.query.Body; // Grabs the text message
  const number = req.query.From; // Grabs the from cell number
  const twilioNumber = req.query.To; // Grabs the Twilio cell number

  let context = null; // Sets up the context of Watson convo
  let index = 0;
  let contextIndex = 0;
  contexts.forEach(value => {
    // console.log(value.from);
    if (value.from == number) {
      context = value.context;
      contextIndex = index;
    }
    index = index + 1;
  });

  // You know, debugging stuff
  console.log(`Recieved message from ${number} saying '${message}'`);

  // Setup the Watson Converstion with your keys. Use .env file, duh!
  const conversation = new ConversationV1({
    username: process.env.WATSON_KEY,
    password: process.env.WATSON_SECRET,
    version_date: ConversationV1.VERSION_DATE_2016_09_20
  });

  console.log(JSON.stringify(context));
  console.log(contexts.length);

  conversation.message(
    {
      input: { text: message },
      workspace_id: process.env.WATSON_WORKSPACE_ID,
      context
    },
    (err, response) => {
      if (err) {
        console.error(err);
      } else {
        // console.log(response.output.text[0]);
        if (context == null) {
          order.convo_id = response.context.conversation_id; // attach convo id to the order
          order.from = number; // attach the user's phone number
          contexts.push({ from: number, context: response.context });
        } else {
          contexts[contextIndex].context = response.context;
        }

        const intent = response.intents[0].intent;
        console.log(intent);

        if (sizeRx.test(intent)) {
          order.size = intent.replace('size_', ''); // Catpure selected size
          console.log(`They picked a ${order.size} size.`);
        }

        if (intent == 'flavor') {
          order.flavor = response.entities[0].value; // Catpure selected flavor
          console.log(`They picked ${order.flavor} flavor.`);
        }

        // Cherries
        if (
          (intent == 'no' || intent == 'yes') &&
          order.nuts &&
          order.cherry == undefined
        ) {
          order.cherry = intent;
          console.log('Picking CHERRY! ', order.cherry);
        }

        // Nuts
        if ((intent == 'no' || intent == 'yes') && order.nuts == undefined) {
          order.nuts = intent;
          console.log('Picking nuts! ', order.nuts);
        }

        if (intent == 'done') {
          const context = contexts.splice(contextIndex, 1);
          console.log('Complete! ', order);
          const newOrder = new Order(order);
          newOrder.save(); // SAVE TO MONGODB!
        }

        const client = require('twilio')(
          process.env.TWILIO_SID,
          process.env.TWILIO_TOKEN
        );

        client.messages.create(
          {
            from: twilioNumber,
            to: number,
            body: response.output.text[0]
          },
          function(err, message) {
            if (err) {
              console.error(err.message);
            }
          }
        );
      }
    }
  );

  res.send('');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Watson is listening on port ${PORT}!`);
});
