import React, { useState, createContext } from "react";
import axios from "axios";

export const InvoiceContext = createContext();

export const InvoiceProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <InvoiceContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </InvoiceContext.Provider>
  );
};
