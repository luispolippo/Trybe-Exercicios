import Character from "./Character";
import LongRangeCharacter from "./LongRangeCharacter";
import MeleeCharacter from "./MeleeCharacter";

const main = (character: Character) => {
  character.talk();
  character.specialMove();
}

const char1 = new MeleeCharacter('Mario');
const char2 = new LongRangeCharacter('Link');

main(char1);
main(char2);