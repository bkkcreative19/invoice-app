import express from "express";

import {
  createInvoice,
  getInvoices,
  getInvoice,
} from "../controllers/invoice.js";

const router = express.Router();

router.get("/invoices", getInvoices);
router.get("/invoice/:id", getInvoice);
router.post("/new-invoice", createInvoice);

export default router;
