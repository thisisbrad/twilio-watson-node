const mongoose = require('mongoose');

const OrderSchema = mongoose.Schema(
  {
    convo_id: { type: Number, required: true, index: { unique: true } },
    from: { type: String, required: true, index: true },
    size: { type: String, required: true, index: false },
    flavor: { type: String, required: true, index: false },
    nuts: { type: String, required: true, index: false },
    cherry: { type: String, required: true, index: false }
  },
  { timestamps: true }
);

module.exports = mongoose.model('Order', OrderSchema);
