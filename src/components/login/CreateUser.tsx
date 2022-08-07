import React from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

import "./Login.css";

interface LoginProps {
  onSubmission: Function;
}

export default function LoginUser(props: LoginProps) {
  const formSchema = Yup.object().shape({
    username: Yup.string()
      .required("This is Required")
      .min(6, "Username should be at least 6 characters"),
    password: Yup.string()
      .required("This is Required")
      .min(8, "Password should be at least 8 characters"),
    passwordConfirm: Yup.string()
      .required("This is Required")
      .oneOf([Yup.ref("password")], "Passwords don't match ;("),
  });

  const validationOpt = { resolver: yupResolver(formSchema) };
  const { register, handleSubmit, watch, formState } = useForm(validationOpt);
  const { errors } = formState;

  return (
    <motion.div
      initial={{ x: -30, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: 30, opacity: 0 }}
    >
      <form
        onSubmit={handleSubmit((data) => {
          props.onSubmission(data);
        })}
      >
        <div className="field">
          <input placeholder="Username" type="text" {...register("username")} />
          <p className="errors">{errors.username?.message}</p>
        </div>
        <div className="field">
          <input
            placeholder="Password"
            type="password"
            {...register("password")}
          />
          <p className="errors">{errors.password?.message}</p>
        </div>
        <div className="field">
          <input
            placeholder="Confirm Password"
            type="password"
            {...register("passwordConfirm")}
          />
          <p className="errors">{errors.passwordConfirm?.message}</p>
        </div>
        <input type="submit" value="submit"></input>
      </form>
    </motion.div>
  );
}
