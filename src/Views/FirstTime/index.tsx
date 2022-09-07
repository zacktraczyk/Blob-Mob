import { game } from "@App";
import Button from "@Components/Button";
import "./index.scss";

interface Props {
  navTutorial: Function;
  navPlay: Function;
}

const FirstTime: React.FC<Props> = (props: Props) => {
  const { navPlay, navTutorial } = props;
  return (
    <div className="firstTime">
      <h2>Need a Tutorial?</h2>
      <div className="firstTime__buttons">
        <Button
          width="100%"
          height="auto"
          color="play"
          onClick={() => navPlay()}
        >
          Nah, Play
        </Button>
        <Button
          width="100%"
          height="auto"
          color="tutorial"
          onClick={() => navTutorial()}
        >
          Tutorial
        </Button>
      </div>
    </div>
  );
};

export default FirstTime;
