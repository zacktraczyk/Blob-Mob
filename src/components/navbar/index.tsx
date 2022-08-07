import { LayoutGroupContext } from "framer-motion";
import { useState } from "react";
import "./index.scss";

interface Props {
  navHome: Function;
  loggedin: boolean;
  logout: Function;
  coins: Number;
}

const Navbar: React.FC<Props> = (props: Props) => {
  const { navHome, loggedin, logout, coins } = props;

  return (
    <div className="navbar">
      <p className="navbar__coins">${"" + coins}</p>
      <div className="navbar__icon" onClick={() => navHome()}>
        <i className="fa-solid fa-house fa-2xl"></i>
      </div>
      {loggedin && (
        <div className="navbar__icon" onClick={() => logout()}>
          <i className="fa-solid fa-right-to-bracket fa-2xl"></i>
        </div>
      )}
    </div>
  );
};

export default Navbar;
