import React, { useContext, useState } from "react";
import { nanoid } from "nanoid";

import { withRouter } from "react-router-dom";
import { InvoiceContext } from "../../context/InvoiceContext";
import axios from "axios";
import ItemList from "./ItemList/ItemList";
import BillFrom from "./BillFrom/BillFrom";
import BillTo from "./BillTo/BillTo";

const Form = (props) => {
  const { setIsOpen } = useContext(InvoiceContext);
  console.log();
  const testt = props.location.pathname.slice(9);
  const [items, setItems] = useState([
    {
      name: "Banner Design",
      quantity: 1,
      price: 156.0,
      total: 156.0,
    },
    {
      name: "Email Design",
      quantity: 2,
      price: 200.0,
      total: 400.0,
    },
  ]);
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

  const handleSend = async () => {
    const obj = {
      id: nanoid(6).toUpperCase(),
      clientName: billTo.clientName,
      clientEmail: billTo.clientEmail,
      description: billTo.projectDescription,
      paymentTerms: billTo.paymentTerms,
      status: "pending",
      senderAddress: {
        street: billFrom.streetAddress,
        city: billFrom.city,
        postCode: billFrom.postalCode,
        country: billFrom.country,
      },
      clientAddress: {
        street: billTo.streetAddress,
        city: billTo.city,
        postCode: billTo.postalCode,
        country: billTo.country,
      },
      items,
      total: 14002.33,
    };
    const { data } = await axios.post("/api/new-invoice", obj);
    console.log(data);
  };

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
        <BillFrom setBillFrom={setBillFrom} billFrom={billFrom} />
        <BillTo setBillTo={setBillTo} billTo={billTo} />
        <ItemList />
      </div>

      <div className="create-buttons">
        <button onClick={() => setIsOpen(false)} className="discard">
          Discard
        </button>
        <div className="save">
          <button>Save as Draft</button>
          <button onClick={handleSend}>Save & Send</button>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Form);
