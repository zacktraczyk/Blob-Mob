import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { getAuth } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { app, signInGoogle, signInFacebook, signOut } from "../../apis/firebase";

import "./index.scss";

interface Props {
  navPlay: Function;
  navTutorial: Function;
}

const Login: React.FC<Props> = (props: Props) => {
  const { navPlay, navTutorial } = props;

  const auth = getAuth(app);
  const [user] = useAuthState(auth);

  return (
    <div className="login">
      <h2>BLOB MOB</h2>

      <div className="login__buttons">
        <button className="play-button" onClick={() => navPlay()}>
          {user ? ("Play") : ("Play as Guest")}
        </button>
        <div className="login__buttons-auth">
          {user ? (
            <button className="signout-button" onClick={() => signOut()}>
              Sign Out
            </button>
          ) : (
            <>
              <button className="google-button" onClick={() => signInGoogle()}>
                Google
                <i className="fa-brands fa-google"></i>
              </button>
              <button className="facebook-button" onClick={() => signInFacebook()}>
                Facebook
                <i className="fa-brands fa-square-facebook"></i>
              </button>
            </>
          )}
        </div>
      </div>

      <div className="login__tutorial-blurb">
        <b>WASD</b> to move, <b>SPACE</b> to attack, or play...
      </div>

      <button className="tutorial-button" onClick={() => navTutorial()}>
        Tutorial
      </button>
    </div>
  );
};

export default Login;
