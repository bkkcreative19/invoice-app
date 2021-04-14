import React from "react";

const BillFrom = ({ setBillFrom, billFrom, register }) => {
  // const billFrom = state.billFrom;
  // console.log(billFrom);
  return (
    <div className="bill-from">
      <h3>Bill From</h3>
      <div className="bill-from__address">
        <label htmlFor="streetAddress">Street Address</label>
        <input
          {...register("billFrom.streetAddress", "text")}
          type="text"
          // value={billFrom.streetAddress}
        />
      </div>
      <div className="bill-from__location">
        <div className="bill-from__location-city">
          <label htmlFor="city">City</label>
          <input
            {...register("billFrom.city", "text")}
            type="text"
            // value={billFrom.city}
          />
        </div>
        <div className="bill-from__location-postalCode">
          <label htmlFor="postalCode">Post Code</label>
          <input
            name="postalCode"
            type="text"
            {...register("billFrom.postalCode", "text")}
          />
        </div>
        <div className="bill-from__location-country">
          <label htmlFor="country">Country</label>
          <input
            name="country"
            id="country"
            type="text"
            {...register("billFrom.country", "text")}
          />
        </div>
      </div>
    </div>
  );
};

export default BillFrom;
