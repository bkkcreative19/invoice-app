import mongoose from "mongoose";
const Schema = mongoose.Schema;
let invoiceSchema = new Schema(
  {
    billFrom: {
      streetAddress: {
        type: String,
        required: true,
      },
      city: {
        type: String,
        required: true,
      },
      postalCode: {
        type: String,
        required: true,
      },
      country: {
        type: String,
        required: true,
      },
    },
    billTo: {
      clientName: {
        type: String,
        required: true,
      },
      clientEmail: {
        type: String,
        required: true,
      },
      streetAddress: {
        type: String,
        required: true,
      },
      city: {
        type: String,
        required: true,
      },
      postalCode: {
        type: String,
        required: true,
      },
      country: {
        type: String,
        required: true,
      },
      invoiceDate: {
        type: String,
        required: true,
      },
      paymentTerms: {
        type: String,
        required: true,
      },
      projectDescription: {
        type: String,
        required: true,
      },
    },
  },
  {
    timestamps: true,
    collection: "invoices",
  }
);

const Invoice = mongoose.model("Invoice", invoiceSchema);

export default Invoice;
