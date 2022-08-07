import { motion } from "framer-motion";

import "./SummonLogin.css";

interface PropsSummonLogin {
  loggedIn: boolean;
  onLogin: Function;
}

export default function SummonLogin(props: PropsSummonLogin) {
  return (
    <div className="summon-login">
      <motion.div
        initial={{ x: 300, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: 300, opacity: 0 }}
      >
        <button onClick={() => props.onLogin()}>
          {props.loggedIn ? "Logout" : "Login"}
        </button>
      </motion.div>
    </div>
  );
}
