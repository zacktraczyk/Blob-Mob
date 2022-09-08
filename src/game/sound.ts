import { Howl } from "howler";
import select from "@Assets/sound/select.mp3";

type sounds = "button";

const buttonNoise = new Howl({
  src: [select],
});

class Sound {
  public music: boolean;
  public effect: boolean;

  constructor() {
    this.music = true;
    this.effect = true;
  }

  public play(sound: sounds) {
    switch (sound) {
      case "button":
        buttonNoise.play();
    }
  }
}

const sound = new Sound();
export default sound;
