import React, { useContext, useReducer, useState } from "react";

import { withRouter } from "react-router-dom";
import { InvoiceContext } from "../../context/InvoiceContext";
import SelectInput from "../common/SelectInput/SelectInput";
import TextField from "../common/TextField/TextField";
// import BillFrom from "./BillFrom/BillFrom";
// import BillTo from "./BillTo/BillTo";

const Form = (props) => {
  const { setIsOpen } = useContext(InvoiceContext);
  const testt = props.location.pathname.slice(9);
  const [billFrom, setBillFrom] = useState({
    streetAddress: "",
    city: "",
    postalCode: "",
    country: "",
  });
  const [billTo, setBillTo] = useState({
    clientName: "",
    clientEmail: "",
    streetAddress: "",
    city: "",
    postalCode: "",
    country: "",
    invoiceDate: "",
    paymentTerms: "",
    projectDescription: "",
  });

  const initValues = {
    billFrom: {
      streetAddress: "",
      city: "",
      postalCode: "",
      country: "",
    },
    billTo: {
      clientName: "",
      clientEmail: "",
      streetAddress: "",
      city: "",
      postalCode: "",
      country: "",
      invoiceDate: "",
      paymentTerms: "",
      projectDescription: "",
    },
  };

  const handleSend = () => {
    console.log();
    console.log(billTo);
  };

  function handleSubmit(e, isValid) {
    console.log(e);
  }
  const handleDraft = () => {};
  return (
    <div className="form">
      {testt.length > 0 ? (
        <h1>
          Edit <span className="yay">#</span>
          {testt}
        </h1>
      ) : (
        <h1>New Invoice</h1>
      )}

      <div className="form__container">
        <div className="bill-from">
          <h3>Bill From</h3>
          <TextField
            htmlFor="streetAddress"
            label="Street Address"
            className="bill-from__address"
          />
          {/* <div className="bill-from__address">
            <label htmlFor="streetAddress">Street Address</label>
            <input
              type="text"
              // value={billFrom.streetAddress}
            />
          </div> */}
          <div className="bill-from__location">
            <TextField
              htmlFor="city"
              label="City"
              className="bill-from__location-postalCode"
            />
            <TextField
              htmlFor="postalCode"
              label="Post Code"
              className="bill-from__location-postalCode"
            />
            <TextField
              htmlFor="country"
              label="Country"
              className="bill-from__location-country"
            />

            {/* <div className="bill-from__location-city">
              <label htmlFor="city">City</label>
              <input
                type="text"
                // value={billFrom.city}
              />
            </div> */}
            {/* <div className="bill-from__location-postalCode">
              <label htmlFor="postalCode">Post Code</label>
              <input name="postalCode" type="text" />
            </div>
            <div className="bill-from__location-country">
              <label htmlFor="country">Country</label>
              <input name="country" id="country" type="text" />
            </div> */}
          </div>
        </div>
        <div className="bill-to">
          <h3>Bill To</h3>
          <TextField
            htmlFor="client-name"
            label="Client's Name"
            className="bill-to__client-name"
          />
          <TextField
            htmlFor="client-email"
            label="Client's Email"
            className="bill-to__client-email"
          />
          <TextField
            htmlFor="client-street-address"
            label="Street Address"
            className="bill-to__street-address"
          />
          {/* <div className="bill-to__client-name">
            <label htmlFor="client-name">Client's Name</label>
            <input type="text" />
          </div>
          <div className="bill-to__client-email">
            <label htmlFor="client-email">Client's Email</label>
            <input type="text" />
          </div>
          <div className="bill-to__street-address">
            <label htmlFor="street-address">Street Address</label>
            <input type="text" />
          </div> */}
          <div className="bill-to__location">
            <TextField
              htmlFor="client-city"
              label="City"
              className="bill-to__location-city"
            />
            <TextField
              htmlFor="client-postalCode"
              label="Post Code"
              className="bill-to__location-postalCode"
            />
            <TextField
              htmlFor="client-country"
              label="Country"
              className="bill-to__location-country"
            />
            {/* <div className="bill-to__location-city">
              <label htmlFor="city">City</label>
              <input id="City" type="text" />
            </div>
            <div className="bill-to__location-postalCode">
              <label htmlFor="postalCode">Post Code</label>{" "}
              <input type="text" />
            </div>
            <div className="bill-to__location-country">
              <label htmlFor="country">Country</label>
              <input id="country" type="text" />
            </div> */}
          </div>
          <div className="bill-to__invoice">
            <TextField
              htmlFor="client-date"
              label="Invoice Date"
              className="date"
              type="date"
            />

            {/* <div className="date">
              <label htmlFor="">Invoice Date</label>
              <input type="date" name="" id="" />
            </div> */}
            <SelectInput
              htmlFor="payment-terms"
              className="payment-terms"
              label="Payment Terms"
            />
          </div>

          <TextField
            htmlFor="project-description"
            label="Project Description"
            className="project-description"
          />
          <div className="item-list"></div>
        </div>
        {/* <BillFrom
          register={register}
          setBillFrom={setBillFrom}
          billFrom={billFrom}
        /> */}
        {/* <BillTo register={register} setBillTo={setBillTo} billTo={billTo} /> */}
      </div>
      {testt.length > 0 ? (
        <div className="edit-buttons">
          <button onClick={() => setIsOpen(false)}>Cancel</button>
          <button>Save Changes</button>
        </div>
      ) : (
        <div className="create-buttons">
          <button onClick={() => setIsOpen(false)} className="discard">
            Discard
          </button>
          <div className="save">
            <button onClick={handleDraft}>Save as Draft</button>
            <button>Save & Send</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default withRouter(Form);
