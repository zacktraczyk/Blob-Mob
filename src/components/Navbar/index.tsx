import { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, signOut } from "../../apis/firebase";
import "./index.scss";

interface Props {
  navHome: Function;
  coins: Number;
}

const Navbar: React.FC<Props> = (props: Props) => {
  const { navHome, coins } = props;

  const [user] = useAuthState(auth);

  return (
    <div className="navbar">
      <p className="navbar__coins">${"" + coins}</p>
      <div className="navbar__left">
        <div className="navbar__left-icon" onClick={() => navHome()}>
          <i className="fa-solid fa-house fa-2xl"></i>
        </div>
        {user && (
          <div className="navbar__left-icon" onClick={() => signOut()}>
            <i className="fa-solid fa-right-to-bracket fa-2xl"></i>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
