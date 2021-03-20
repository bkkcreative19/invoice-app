import React, { useContext, useEffect, useState } from "react";
import { InvoiceContext } from "../../context/InvoiceContext";
import { data } from "../../data";
import Invoice from "./Invoice/Invoice";

const InvoiceList = () => {
  const [invoices, setInvoices] = useState(data);

  return (
    <div className="invoice-list">
      {invoices.map((invoice) => {
        return <Invoice key={invoice.id} invoice={invoice} />;
      })}
    </div>
  );
};

export default InvoiceList;
