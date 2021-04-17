import React from "react";
import rightArrow from "../../../assets/icon-arrow-right.svg";

const Invoice = ({ invoice }) => {
  const status =
    invoice.status.charAt(0).toUpperCase() + invoice.status.slice(1);
  return (
    <div className="invoice">
      <span className="invoice__id">
        <span>#</span>
        {invoice.id}
      </span>
      <span className="invoice__payment-due">Due {invoice.paymentDue}</span>
      <span className="invoice__client-name">{invoice.clientName}</span>
      <span className="invoice__price">${500}</span>
      <button className={invoice.status}>{status}</button>
      <img className="invoice__arrow" src={rightArrow} alt="right-arrow" />
    </div>
  );
};

export default Invoice;
