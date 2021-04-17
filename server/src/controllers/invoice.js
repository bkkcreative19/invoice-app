import Invoice from "../models/invoice.js";
import moment from "moment";

const createInvoice = async (req, res) => {
  let {
    id,
    clientName,
    clientEmail,
    description,
    paymentTerms,
    status,
    senderAddress,
    clientAddress,
    items,
    total,
  } = req.body;
  const pay = Number(paymentTerms);

  try {
    const newInvoice = new Invoice({
      id,
      clientName,
      clientEmail,
      description,
      pay,
      paymentDue: "2021-09-20",
      status,
      senderAddress,
      clientAddress,
      items,
      total,
      //   userId: req.user,
    });

    const savedInvoice = await newInvoice.save();
    res.json(savedInvoice);
  } catch (err) {
    res.status(400).json(err);
  }
};

const getInvoices = async (req, res) => {
  const invoices = await Invoice.find({});
  res.json(invoices);
};
const getInvoice = async (req, res) => {
  const invoice = await Invoice.findOne({ id: req.params.id });
  console.log(invoice);
  const fomatted_date = moment(invoice.createdAt).format("YYYY-MM-DD");
  const newObj = {
    clientName: invoice.clientName,
    clientEmail: invoice.clientEmail,
    description: invoice.description,
    items: invoice.items,
    paymentTerms: invoice.paymentTerms,
    paymentDue: invoice.paymentDue,
    status: invoice.status,
    id: invoice.id,
    total: invoice.total,
    date: fomatted_date,
    senderAddress: {
      street: invoice.senderAddress.street,
      city: invoice.senderAddress.city,
      postCode: invoice.senderAddress.postCode,
      country: invoice.senderAddress.country,
    },
    clientAddress: {
      street: invoice.clientAddress.street,
      city: invoice.clientAddress.city,
      postCode: invoice.clientAddress.postCode,
      country: invoice.clientAddress.country,
    },
  };
  // console.log(newObj);
  res.json(newObj);
};

export { createInvoice, getInvoices, getInvoice };
