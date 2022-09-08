import sound from "@Game/sound";
import React from "react";
import "./index.scss";

interface Props {
  color: ButtonColors;
  children: React.ReactNode;
  onClick: Function;
  height: string;
  width: string;
}

type ButtonColors =
  | "play"
  | "signout"
  | "google"
  | "facebook"
  | "tutorial"
  | "upgrade"
  | "github"
  | "website";

const Button: React.FC<Props> = (props: React.PropsWithChildren<Props>) => {
  const { color, children, onClick, height, width } = props;

  return (
    <button
      className={`button__back opt-${color}`}
      style={{ height: height, width: width }}
      onClick={() => {
        sound.play("button");
        onClick();
      }}
    >
      <span className={`button__front opt-${color}`}>{children}</span>
    </button>
  );
};

export default Button;
