import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { getAuth } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { app, signInGoogle, signOut } from "../../apis/firebase";

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
          Play
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
              </button>
              <button className="facebook-button">Facebook</button>
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
