import React, { useState, createContext } from "react";
import axios from "axios";

export const InvoiceContext = createContext();

export const InvoiceProvider = ({ children }) => {
  return (
    <InvoiceContext.Provider value={{}}>{children}</InvoiceContext.Provider>
  );
};
