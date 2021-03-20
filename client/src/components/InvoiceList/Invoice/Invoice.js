import React from "react";
import rightArrow from "../../../assets/icon-arrow-right.svg";

const Invoice = ({ invoice }) => {
  return (
    <div className="invoice">
      <p className="invoice__id">
        <span>#</span>
        {invoice.id}
      </p>
      <p className="invoice__payment-due">Due {invoice.paymentDue}</p>
      <p className="invoice__client-name">{invoice.clientName}</p>
      <p className="invoice__price">${invoice.total}</p>
      <button>{invoice.status}</button>
      <img className="invoice__arrow" src={rightArrow} alt="right-arrow" />
    </div>
  );
};

export default Invoice;
