const Order = require('../models/Order');

async function getAll() {
  return Order.find({}).sort({ createdAt: -1 });
}

async function getOne(id) {
  return Order.findById({ _id: id }).sort({ createdAt: -1 });
}

async function create(data) {
  console.log('Its here! ', data.convoId);
  const order = new Order(data);
  return order.save();
}

async function update(id, data) {
  const order = await getOne(id);

  if (!order) throw new Error('Could not find the requested item');

  Object.keys(data).forEach(key => {
    order[key] = data[key];
  });

  return order.save();
}

module.exports = {
  getAll,
  getOne,
  create,
  update
};
