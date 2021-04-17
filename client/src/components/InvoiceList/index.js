import React, { useContext, useEffect } from "react";
import { InvoiceContext } from "../../context/InvoiceContext";
import { Link } from "react-router-dom";
import axios from "axios";
import { data } from "../../data";
import Invoice from "./Invoice/Invoice";
import useFetch from "../../hooks/useFetch";
import Skeleton from "react-loading-skeleton";

import EmptyList from "./EmptyList/EmptyList";

const InvoiceList = ({ invoices }) => {
  // const [invoices, setInvoices] = useState([]);

  return (
    <div className="invoice-list">
      {invoices.length === 0 ? (
        <EmptyList />
      ) : (
        invoices.map((invoice) => {
          return (
            <Link key={invoice.id} to={`/invoice/${invoice.id}`}>
              <Invoice invoice={invoice} />
            </Link>
          );
        })
      )}
    </div>
  );
};

export default InvoiceList;
