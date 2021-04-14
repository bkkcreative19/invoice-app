import React, { useContext } from "react";
import Logo from "../../../assets/logo.svg";
import Moon from "../../../assets/icon-moon.svg";
import User from "../../../assets/image-avatar.jpg";
import Form from "../../Form";
import { InvoiceContext } from "../../../context/InvoiceContext";

const Nav = () => {
  const { isOpen } = useContext(InvoiceContext);
  return (
    <>
      <nav className="nav">
        <div className="nav__logo">
          <img src={Logo} alt="nav-logo" />
        </div>
        <img src={Moon} className="nav__theme-switcher" alt="theme-swticher" />
        <div className="nav__user-photo">
          <img src={User} alt="user" />
        </div>
      </nav>
      {isOpen && <Form />}
    </>
  );
};

export default Nav;
