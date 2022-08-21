import powerupDraw from "../../assets/icons/powerups/powerup-draw.png";
import powerupPush from "../../assets/icons/powerups/powerup-push.png";

import "./index.scss";

const PowerupBar: React.FC = () => {
  return (
    <div className="powerupBar">
      <div className="powerupBar__powerup-container">
        <div className="powerup-slot">
          <img src={powerupDraw} />
        </div>
        <div className="powerup-slot">
          <img src={powerupPush} />
        </div>
        <div className="powerup-slot"></div>
      </div>
    </div>
  );
};

export default PowerupBar;
