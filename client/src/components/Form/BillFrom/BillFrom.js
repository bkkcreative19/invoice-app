import React from "react";
import TextField from "../../common/TextField/TextField";

const BillFrom = ({ setBillFrom, billFrom }) => {
  return (
    <div className="bill-from">
      <h3>Bill From</h3>
      <TextField
        htmlFor="streetAddress"
        value={billFrom.streetAddress}
        label="Street Address"
        className="bill-from__address"
        onChange={(e) =>
          setBillFrom((prev) => ({
            ...prev,
            streetAddress: e,
          }))
        }
      />

      <div className="bill-from__location">
        <TextField
          value={billFrom.city}
          htmlFor="city"
          label="City"
          className="bill-from__location-city"
          onChange={(e) =>
            setBillFrom((prev) => ({
              ...prev,
              city: e,
            }))
          }
        />
        <TextField
          value={billFrom.postalCode}
          htmlFor="postalCode"
          label="Post Code"
          className="bill-from__location-postalCode"
          onChange={(e) =>
            setBillFrom((prev) => ({
              ...prev,
              postalCode: e,
            }))
          }
        />
        <TextField
          value={billFrom.country}
          htmlFor="country"
          label="Country"
          className="bill-from__location-country"
          onChange={(e) =>
            setBillFrom((prev) => ({
              ...prev,
              country: e,
            }))
          }
        />
      </div>
    </div>
  );
};

export default BillFrom;
