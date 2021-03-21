import React from "react";
import downArrow from "../../assets/icon-arrow-down.svg";
import plus from "../../assets/icon-plus.svg";
import InvoiceList from "../../components/InvoiceList/InvoiceList";

const Dashboard = () => {
  return (
    <section className="dashboard container">
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
          <button>
            <img src={plus} alt="plus" />
            New Invoice
          </button>
        </div>
      </div>
      <InvoiceList />
    </section>
  );
};

export default Dashboard;
