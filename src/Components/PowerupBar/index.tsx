//import powerupDraw from "@Assets/icons/powerups/powerup-draw.png";
//import powerupPush from "@Assets/icons/powerups/powerup-push.png";

import "./index.scss";

const PowerupBar: React.FC = () => {
  return (
    <div className="powerupBar">
      <div className="powerupBar__powerup-container">
        <div className="powerup-slot">
        </div>
        <div className="powerup-slot">
        </div>
        <div className="powerup-slot"></div>
      </div>
    </div>
  );
};

export default PowerupBar;
