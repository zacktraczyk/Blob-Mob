import Canvas from "@Components/Canvas";
import PlayerFit, { PlayerFitType } from "@Components/PlayerFit";
import { Face } from "@Game/shop/faces";
import { player } from "@Game/entities/player";
import { Body } from "@Game/shop/bodies";

interface Props {
  fit: {
    body: keyof typeof Body;
    face: keyof typeof Face;
  };
}

const Faces: React.FC<Props> = (props: Props) => {
  const { body } = props.fit;

  let faces = new Array();
  let face: keyof typeof Face;
  for (face in Face) {
    faces.push(
      <PlayerFit key={face} type={PlayerFitType.Face} body={body} face={face} />
    );
  }

  return (
    <div className="fit-faces">
      <h2>Faces</h2>
      <div className="fit-items">{faces}</div>
    </div>
  );
};

export default Faces;
