async function sendMessage(message, number, twilioNumber) {
  // coming in!

  let context = null; // Sets up the context of Watson convo
  let index = 0;
  let contextIndex = 0;
  contexts.forEach(value => {
    // console.log(value.from);
    if (value.from === number) {
      context = value.context;
      contextIndex = index;
    }
    index += 1;
  });

  console.log('DEBUG!', message, number, twilioNumber);
}

module.exports = {
  sendMessage
};
