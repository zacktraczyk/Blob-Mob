import { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, signOut } from "../../apis/firebase";
import "./index.scss";

interface Props {
  navHome: Function;
  navInfo: Function;
}

const Navbar: React.FC<Props> = (props: Props) => {
  const { navHome, navInfo } = props;
  const [user] = useAuthState(auth);

  return (
    <div className="navbar">
      <div className="navbar__icon" onClick={() => navInfo()}>
        <i className="fa-solid fa-circle-info fa-2xl"></i>
      </div>
      <div className="navbar__icon" onClick={() => navHome()}>
        <i className="fa-solid fa-house fa-2xl"></i>
      </div>
      {user && (
        <div className="navbar__icon" onClick={() => signOut()}>
          <i className="fa-solid fa-right-to-bracket fa-2xl"></i>
        </div>
      )}
    </div>
  );
};

export default Navbar;
