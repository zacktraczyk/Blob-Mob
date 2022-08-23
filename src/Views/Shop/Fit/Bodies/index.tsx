import Canvas from "@Components/Canvas";
import PlayerFit, { PlayerFitType } from "@Components/PlayerFit";
import { player } from "@Game/entities/player";
import { Body } from "@Game/shop/bodies";
import { Face } from "@Game/shop/faces";
import { Hat } from "@Game/shop/hats";

interface Props {
  fit: {
    body: keyof typeof Body;
    face: keyof typeof Face;
    hat: keyof typeof Hat;
  };
}

const Bodies: React.FC<Props> = (props: Props) => {
  const { face, hat } = props.fit;

  let bodies = new Array();
  let body: keyof typeof Body;
  for (body in Body) {
    bodies.push(
      <PlayerFit
        key={body}
        type={PlayerFitType.Body}
        body={body}
        face={face}
        hat={hat}
      />
    );
  }

  return (
    <div className="fit-faces">
      <h2>Bodies</h2>
      <div className="fit-items">{bodies}</div>
    </div>
  );
};

export default Bodies;
