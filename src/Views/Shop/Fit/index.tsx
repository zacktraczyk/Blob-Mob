import { useReducer } from "react";
import Body from "./Body";
import Faces from "./Faces";
import Hat from "./Hat";

import "./index.scss";

const Fit: React.FC = () => {
  const [, forceUpdate] = useReducer((x) => x + 1, 0);

  return (
    <div className="fit">
      <Body />
      <Faces />
      <Hat />
    </div>
  );
};

export default Fit;
