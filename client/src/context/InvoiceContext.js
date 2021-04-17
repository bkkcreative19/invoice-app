import React, { useState, createContext } from "react";
export const InvoiceContext = createContext();

export const InvoiceProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <InvoiceContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </InvoiceContext.Provider>
  );
};
