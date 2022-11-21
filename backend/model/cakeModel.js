const mongoose = require("mongoose");

const cakeSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please add Cake Name"],
    },

    price: {
      type: String,
      required: [true, "Please enter price of cake"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Cake", cakeSchema);
