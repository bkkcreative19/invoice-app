import React, { useContext } from "react";
import Skeleton from "react-loading-skeleton";
import downArrow from "../../assets/icon-arrow-down.svg";
import plus from "../../assets/icon-plus.svg";
import Form from "../../components/Form";
import InvoiceList from "../../components/InvoiceList";
import { InvoiceContext } from "../../context/InvoiceContext";
import useFetch from "../../hooks/useFetch";

const Dashboard = () => {
  const { isOpen, setIsOpen } = useContext(InvoiceContext);
  const { data: invoices, loading } = useFetch("/api/invoices");
  return (
    <>
      {loading ? (
        <div className="container">
          <Skeleton height={"90vh"} style={{ margin: "1rem 0" }} />
        </div>
      ) : (
        <section className={isOpen ? "dashboard invoice-open" : "dashboard"}>
          <div className="container">
            <div className="dashboard__header">
              <div className="dashboard__header-left">
                <h2>Invoices</h2>
                <p>{`There are ${invoices.length} total invoices`}</p>
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
            <InvoiceList invoices={invoices} />
          </div>
        </section>
      )}
    </>
  );
};

export default Dashboard;
