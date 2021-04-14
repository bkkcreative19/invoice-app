import React from "react";

const BillTo = ({ billTo, register }) => {
  return (
    <div className="bill-to">
      <h3>Bill To</h3>
      <div className="bill-to__client-name">
        <label htmlFor="client-name">Client's Name</label>
        <input type="text" {...register("billTo.clientName", "text")} />
      </div>
      <div className="bill-to__client-email">
        <label htmlFor="client-email">Client's Email</label>
        <input {...register("billTo.clientEmail", "text")} type="text" />
      </div>
      <div className="bill-to__street-address">
        <label htmlFor="street-address">Street Address</label>
        <input {...register("billTo.streetAddress", "text")} type="text" />
      </div>
      <div className="bill-to__location">
        <div className="bill-to__location-city">
          <label htmlFor="city">City</label>
          <input id="City" type="text" {...register("billTo.city", "text")} />
        </div>
        <div className="bill-to__location-postalCode">
          <label htmlFor="postalCode">Post Code</label>{" "}
          <input type="text" {...register("billTo.postalCode", "text")} />
        </div>
        <div className="bill-to__location-country">
          <label htmlFor="country">Country</label>
          <input
            id="country"
            type="text"
            {...register("billTo.country", "text")}
          />
        </div>
      </div>
      <div className="bill-to__invoice">
        <div className="date">
          <label htmlFor="">Invoice Date</label>
          <input
            type="date"
            name=""
            id=""
            {...register("billTo.invoiceDate", "text")}
          />
        </div>
        <div className="payment-terms">
          <label htmlFor="">Payment Terms</label>
          <select {...register("billTo.paymentTerms", "text")} name="" id="">
            <option value="">hi</option>
          </select>
        </div>
      </div>
      <div className="project-description">
        <label htmlFor="">Project Description</label>
        <input {...register("billTo.projectDescription", "text")} type="text" />
      </div>
      <div className="item-list"></div>
    </div>
  );
};

export default BillTo;
