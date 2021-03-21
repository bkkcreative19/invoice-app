import React from "react";
import rightArrow from "../../../assets/icon-arrow-right.svg";

const Invoice = ({ invoice }) => {
  return (
    <div className="invoice">
      <span className="invoice__id">
        <span>#</span>
        {invoice.id}
      </span>
      <span className="invoice__payment-due">Due {invoice.paymentDue}</span>
      <span className="invoice__client-name">{invoice.clientName}</span>
      <span className="invoice__price">${invoice.total}</span>
      <button>{invoice.status}</button>
      <img className="invoice__arrow" src={rightArrow} alt="right-arrow" />
    </div>
  );
};

export default Invoice;
