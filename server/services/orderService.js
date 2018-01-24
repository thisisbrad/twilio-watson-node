const Order = require('../models/Order');

async function getAll() {
  return Order.find({}).sort({ createdAt: -1 });
}

async function create(data) {
  const order = new Order(data);
  return order.save();
}

module.exports = {
  getAll,
  create
};
