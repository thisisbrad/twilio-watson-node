const mongoose = require('mongoose');

const OrderSchema = mongoose.Schema(
  {
    convo_id: { type: String, required: true, index: { unique: true } },
    from: { type: String, required: true, index: true }, // Needs to be Number(7)
    status: { type: String, required: true, index: false },
    size: { type: String, required: true, index: false },
    flavor: { type: String, required: true, index: false },
    nuts: { type: String, required: true, index: false }, // Needs to be bool
    cherry: { type: String, required: true, index: false } // Needs to be bool
  },
  { timestamps: true }
);

module.exports = mongoose.model('Order', OrderSchema);
