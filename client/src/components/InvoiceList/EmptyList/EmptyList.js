import React from "react";
import Empty from "../../../assets/illustration-empty.svg";

const EmptyList = () => {
  return (
    <div className="empty">
      <img src={Empty} alt="empty" />
      <div className="content">
        <h3>There is nothing here</h3>
        <p>
          Create an invoice by clicking the New Invoice button and get started
        </p>
      </div>
    </div>
  );
};

export default EmptyList;
