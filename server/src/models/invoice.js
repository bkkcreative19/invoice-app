import mongoose from "mongoose";
const Schema = mongoose.Schema;
let invoiceSchema = new Schema(
  {
    id: {
      type: String,
    },
    clientName: {
      type: String,
      required: false,
    },
    clientEmail: {
      type: String,
      required: false,
    },
    description: {
      type: String,
      required: false,
    },
    paymentTerms: {
      type: Number,
      required: false,
    },
    paymentDue: {
      type: String,
      required: false,
    },
    status: {
      type: String,
      required: false,
    },
    senderAddress: {
      street: {
        type: String,
        required: false,
      },
      city: {
        type: String,
        required: false,
      },
      postCode: {
        type: String,
        required: false,
      },
      country: {
        type: String,
        required: false,
      },
    },
    clientAddress: {
      street: {
        type: String,
        required: false,
      },
      city: {
        type: String,
        required: false,
      },
      postCode: {
        type: String,
        required: false,
      },
      country: {
        type: String,
        required: false,
      },
    },
    items: {
      type: Array,
      required: false,
    },
    total: {
      type: Number,
      required: false,
    },
  },
  {
    timestamps: true,
    collection: "invoices",
  }
);

const Invoice = mongoose.model("Invoice", invoiceSchema);

export default Invoice;
