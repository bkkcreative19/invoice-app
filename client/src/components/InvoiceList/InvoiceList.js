import React, { useContext, useEffect, useState } from "react";
import { InvoiceContext } from "../../context/InvoiceContext";
import { Link } from "react-router-dom";
import { data } from "../../data";
import Invoice from "./Invoice/Invoice";

const InvoiceList = () => {
  const [invoices, setInvoices] = useState(data);

  return (
    <div className="invoice-list">
      {invoices.map((invoice) => {
        return (
          <Link to={`/invoice/${invoice.id}`}>
            <Invoice key={invoice.id} invoice={invoice} />
          </Link>
        );
      })}
    </div>
  );
};

export default InvoiceList;
