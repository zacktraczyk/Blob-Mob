import logo from "@Assets/favicon.svg";

import "./index.scss";

const About: React.FC = () => {
  return (
    <div className="about">
      <h2>ABOUT</h2>
      <div className="about__body">
        <p>
          <h3>Howdy There!</h3> This game was one of my first coding projects,
          and I originally made it using a single file of javascript and some
          boilerplate HTML.
        </p>
        <p>
          The game has evolved a lot since then, using typescript for the core
          game and React for the UI components.
        </p>
        <p>
          You can look at the code below, or visit my website to see other my
          other projects.
        </p>
        <p className="about__body-signature">-- Zack Traczyk</p>
        <div className="about__body-buttons">
          <a
            href="https://github.com/xxzbuckxx/Blob-Mob"
            target="_blank"
            className="code"
          >
            View Code <i className="fa-brands fa-github fa-2xl"></i>
          </a>
          <a
            href="http://zacktraczyk.com"
            target="_blank"
            className="portfolio"
          >
            My Website <img src={logo} alt="Zack Traczyk logo" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
