import React from "react";
import "./index.scss";

interface Props {
  className: string;
  children: React.ReactNode;
  onClick: Function;
}

const Button: React.FC<Props> = (props: React.PropsWithChildren<Props>) => {
  const { className, children, onClick } = props;

  return (
    <button className={`button__back ${className}`} onClick={() => onClick()}>
      <span className={`button__front ${className}`}>{children}</span>
    </button>
  );
};

export default Button;
