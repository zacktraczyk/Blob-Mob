import LoginUser from "./LoginUser";
import CreateUser from "./CreateUser";

import { motion, AnimatePresence } from "framer-motion";

import "./Login.css";
import { useState } from "react";
import React from "react";

interface LoginProps {
  onSubmission: Function;
}

export default function Login(props: LoginProps) {
  const [loginSlide, setLoginSlide] = useState(true);

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -100, opacity: 0 }}
    >
      <div className="login">
        <ol>
          <li>
            <h1
              className={loginSlide ? "selected" : ""}
              onClick={() => setLoginSlide(true)}
            >
              Login
            </h1>
          </li>
          <li>
            <h1
              className={!loginSlide ? "selected" : ""}
              onClick={() => setLoginSlide(false)}
            >
              Create User
            </h1>
          </li>
        </ol>

        <div className="slider-container">
          <AnimatePresence>
            {loginSlide && (
              <LoginUser
                onSubmission={(data: Object, newUser: boolean) =>
                  props.onSubmission(data, true)
                }
              />
            )}
            {!loginSlide && (
              <CreateUser
                onSubmission={(data: Object, newUser: boolean) =>
                  props.onSubmission(data, false)
                }
              />
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
}
