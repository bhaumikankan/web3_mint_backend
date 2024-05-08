const { Schema, Types, models, model } = require("mongoose");
const { ObjectId } = Types;

const WalletSchema = new Schema(
  {
    address: {
      type: String,
      required: true,
    },
    deleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

WalletSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
    delete returnedObject.createdAt;
    delete returnedObject.updatedAt;
  },
});

const Wallet = models.Wallet || model("Wallet", WalletSchema);

module.exports = Wallet;
