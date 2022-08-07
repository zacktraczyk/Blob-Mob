import Login from "../../components/login";
import "./index.scss";

interface Props {
  navPlay: Function;
  navTutorial: Function;
  navShop: Function;
}

const Home: React.FC<Props> = (props: Props) => {
  const { navPlay, navTutorial, navShop } = props;

  return (
    <div className="home">
      <Login navPlay={() => navPlay()} navTutorial={() => navTutorial()} />
    </div>
  );
};

export default Home;
