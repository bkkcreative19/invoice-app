import React from "react";
import SelectInput from "../../common/SelectInput/SelectInput";
import TextField from "../../common/TextField/TextField";

const BillTo = ({ billTo, setBillTo }) => {
  return (
    <div className="bill-to">
      <h3>Bill To</h3>
      <TextField
        value={billTo.clientName}
        htmlFor="client-name"
        label="Client's Name"
        className="bill-to__client-name"
        onChange={(e) =>
          setBillTo((prev) => ({
            ...prev,
            clientName: e,
          }))
        }
      />
      <TextField
        value={billTo.clientEmail}
        htmlFor="client-email"
        label="Client's Email"
        className="bill-to__client-email"
        onChange={(e) =>
          setBillTo((prev) => ({
            ...prev,
            clientEmail: e,
          }))
        }
      />
      <TextField
        value={billTo.streetAddress}
        htmlFor="client-street-address"
        label="Street Address"
        className="bill-to__street-address"
        onChange={(e) =>
          setBillTo((prev) => ({
            ...prev,
            streetAddress: e,
          }))
        }
      />

      <div className="bill-to__location">
        <TextField
          value={billTo.city}
          htmlFor="client-city"
          label="City"
          className="bill-to__location-city"
          onChange={(e) =>
            setBillTo((prev) => ({
              ...prev,
              city: e,
            }))
          }
        />
        <TextField
          value={billTo.postalCode}
          htmlFor="client-postalCode"
          label="Post Code"
          className="bill-to__location-postalCode"
          onChange={(e) =>
            setBillTo((prev) => ({
              ...prev,
              postalCode: e,
            }))
          }
        />
        <TextField
          value={billTo.country}
          htmlFor="client-country"
          label="Country"
          className="bill-to__location-country"
          onChange={(e) =>
            setBillTo((prev) => ({
              ...prev,
              country: e,
            }))
          }
        />
      </div>
      <div className="bill-to__invoice">
        <TextField
          value={billTo.invoiceDate}
          htmlFor="client-date"
          label="Invoice Date"
          className="date"
          type="date"
          onChange={(e) =>
            setBillTo((prev) => ({
              ...prev,
              invoiceDate: e,
            }))
          }
        />

        <SelectInput
          htmlFor="payment-terms"
          className="payment-terms"
          label="Payment Terms"
          value={billTo.paymentTerms}
          onChange={(e) =>
            setBillTo((prev) => ({
              ...prev,
              paymentTerms: e,
            }))
          }
        />
      </div>

      <TextField
        value={billTo.projectDescription}
        htmlFor="project-description"
        label="Project Description"
        className="project-description"
        onChange={(e) =>
          setBillTo((prev) => ({
            ...prev,
            projectDescription: e,
          }))
        }
      />
    </div>
  );
};

export default BillTo;
