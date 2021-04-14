import React, { useState, useContext } from "react";
import downArrow from "../../assets/icon-arrow-down.svg";
import plus from "../../assets/icon-plus.svg";
import Form from "../../components/Form";
import InvoiceList from "../../components/InvoiceList/InvoiceList";
import { InvoiceContext } from "../../context/InvoiceContext";

const Dashboard = () => {
  const { isOpen, setIsOpen } = useContext(InvoiceContext);
  return (
    <section className={isOpen ? "dashboard invoice-open" : "dashboard"}>
      <div className="container">
        <div className="dashboard__header">
          <div className="dashboard__header-left">
            <h2>Invoices</h2>
            <p>There are 7 total invoices</p>
          </div>
          <div className="dashboard__header-right">
            <div className="filter">
              <span>Filter by status</span>
              <img src={downArrow} alt="open" />
            </div>
            <button onClick={() => setIsOpen(true)}>
              <img src={plus} alt="plus" />
              New Invoice
            </button>
          </div>
        </div>
        <InvoiceList />
      </div>
    </section>
  );
};

export default Dashboard;
