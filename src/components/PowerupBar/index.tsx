import powerupDraw from "../../assets/icons/powerups/powerup-draw.png"
import powerupPush from "../../assets/icons/powerups/powerup-push.png"

import "./index.scss";

const PowerupBar: React.FC = () => {
  return (
    <div className="powerupBar">
      <div className="powerupBar__powerup">
        <img src={powerupDraw} />
      </div>
      <div className="powerupBar__powerup">
        <img src={powerupPush} />
      </div>
      <div className="powerupBar__powerup">
      </div>
    </div>
  )
}

export default PowerupBar;