import React, { useContext } from "react";
import Skeleton from "react-loading-skeleton";
import { useParams, Link } from "react-router-dom";
import backArrow from "../../assets/icon-arrow-left.svg";
import { InvoiceContext } from "../../context/InvoiceContext";
import useFetch from "../../hooks/useFetch";

const InvoiceDetails = () => {
  const { setIsOpen } = useContext(InvoiceContext);
  const params = useParams();

  const { data: invoice, loading } = useFetch(`/api/invoice/${params.id}`);

  return (
    <>
      <div
        className="invoice-details container"
        style={{ background: "background-color " }}
      >
        <Link to="/">
          <div className="invoice-details__go-back">
            <img src={backArrow} alt="back-arrow" />
            <span>Go back</span>
          </div>
        </Link>
        {loading ? (
          <Skeleton style={{ margin: "3rem 0" }} height={100} />
        ) : (
          <div className="invoice-details__head">
            <div className="invoice-details__head-pending">
              <span>Status</span>
              <button className={invoice.status}>
                {invoice.status.charAt(0).toUpperCase() +
                  invoice.status.slice(1)}
              </button>
            </div>
            <div className="invoice-details__head-options">
              {invoice.status === "paid" ? (
                <>
                  <button className="delete">Delete</button>
                </>
              ) : (
                <>
                  <button onClick={() => setIsOpen(true)} className="edit">
                    Edit
                  </button>
                  <button className="delete">Delete</button>
                  <button className="mark-paid">Mark as Paid</button>
                </>
              )}
              {/* <button className="edit">Edit</button>

        <button className="paid">Mark as Paid</button> */}
            </div>
          </div>
        )}

        {/* body */}
        {loading ? (
          <Skeleton height={"100vh"} />
        ) : (
          <div className="invoice-details__body">
            <div className="invoice-details__body-info">
              <div className="top">
                <div className="head">
                  <span>
                    <span>#</span>
                    {invoice.id}
                  </span>
                  <p>{invoice.description}</p>
                </div>
                <div className="send-address">
                  <span>{invoice.senderAddress.street}</span>
                  <span>{invoice.senderAddress.city}</span>
                  <span>{invoice.senderAddress.postCode}</span>
                  <span>{invoice.senderAddress.country}</span>
                </div>
              </div>
              <div className="bottom">
                <div className="dates">
                  <div className="invoice-date">
                    <span>Invoice Date</span>
                    <p>{invoice.date}</p>
                  </div>
                  <div className="payment-due">
                    <span>Payment Due</span>
                    <p>{invoice.paymentDue}</p>
                  </div>
                </div>
                <div className="client-address">
                  <span>Bill To</span>
                  <span>{invoice.clientName}</span>
                  <div className="actual-address">
                    <span>{invoice.clientAddress.street}</span>
                    <span>{invoice.clientAddress.city}</span>
                    <span>{invoice.clientAddress.postCode}</span>
                    <span>{invoice.clientAddress.country}</span>
                  </div>
                </div>
                <div className="client-email">
                  <span>Sent To</span>
                  <span>{invoice.clientEmail}</span>
                </div>
              </div>
            </div>
            <div className="invoice-details__body-items">
              <div className="table-head">
                <span>Item Name</span>
                <span>QTY.</span>
                <span>Price</span>
                <span>Total</span>
              </div>
              <div className="table-grid">
                {invoice.items.map((item) => {
                  return (
                    <div key={item.name} className="table-grid__item">
                      <span>{item.name}</span>
                      <span>{item.quantity}</span>
                      <span>${item.price}</span>
                      <span>${item.total.toFixed(2)}</span>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="total-price">
              <span>Amout Due</span>
              <span>${invoice.total.toFixed(2)}</span>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default InvoiceDetails;
