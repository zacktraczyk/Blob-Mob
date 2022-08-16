import Canvas from "@Components/Canvas";
import {
  drawFace,
  Face,
  faceCyclops,
  faceNormal,
} from "@Game/entities/player/faces/faces";
import { faceTooth } from "@Game/entities/player/faces/faceTooth";
import "./index.scss";
import { player } from "@Game/entities/player/player";

const Fit: React.FC = () => {
  return (
    <div className="fit">
      <div className="fit__body">
        <h2>Body</h2>
        <div className="fit__body-items">
          <div className="fit__body-item-normal">
            <Canvas
              draw={(ctx: CanvasRenderingContext2D) =>
                faceNormal(
                  ctx,
                  ctx.canvas.width / 2,
                  ctx.canvas.height / 2,
                  ctx.canvas.width,
                  ctx.canvas.height,
                  0,
                  0,
                  player.frownCount,
                  player.frownCountMax
                )
              }
            />
          </div>
        </div>
      </div>

      <div className="fit__face">
        <h2>Face</h2>
        <div className="fit__face-items">
          <div
            className="fit__face-items-normal"
            onClick={() => (player.face = Face.Normal)}
          >
            <Canvas
              draw={(ctx: CanvasRenderingContext2D) =>
                faceNormal(
                  ctx,
                  ctx.canvas.width / 2,
                  ctx.canvas.height / 2,
                  ctx.canvas.width,
                  ctx.canvas.height,
                  0,
                  0,
                  player.frownCount,
                  player.frownCountMax
                )
              }
            />
          </div>
          <div
            className="fit__face-items-tooth"
            onClick={() => (player.face = Face.Tooth)}
          >
            <Canvas
              draw={(ctx: CanvasRenderingContext2D) =>
                faceTooth(
                  ctx,
                  ctx.canvas.width / 2,
                  ctx.canvas.height / 2,
                  ctx.canvas.width,
                  ctx.canvas.height,
                  0,
                  0,
                  player.frownCount,
                  player.frownCountMax
                )
              }
            />
          </div>
          <div
            className="fit__face-items-cyclops"
            onClick={() => (player.face = Face.Cyclops)}
          >
            <Canvas
              draw={(ctx: CanvasRenderingContext2D) =>
                faceCyclops(
                  ctx,
                  ctx.canvas.width / 2,
                  ctx.canvas.height / 2,
                  ctx.canvas.width,
                  ctx.canvas.height,
                  0,
                  0,
                  player.frownCount,
                  player.frownCountMax
                )
              }
            />
          </div>
        </div>
      </div>

      <div className="fit__hat">
        <h2>Hat</h2>
      </div>
    </div>
  );
};

export default Fit;
