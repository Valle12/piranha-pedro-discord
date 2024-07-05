import { Turn } from "../game/turn";
import { AI } from "./ai";

export class RandomAI extends AI {
  addTurn(turns: Turn[]) {
    if (turns[2] === undefined) {
      let falseIndices = this.player.cardsPlayed
        .map((played, index) => (!played ? index : -1))
        .filter(index => index !== -1);
      let index = Math.floor(Math.random() * falseIndices.length);
      turns[1] = Turn.indexToTurn(falseIndices[index]);
      this.player.cardsPlayed[falseIndices[index]] = true;

      falseIndices = this.player.cardsPlayed
        .map((played, index) => (!played ? index : -1))
        .filter(index => index !== -1);
      index = Math.floor(Math.random() * falseIndices.length);
      turns[2] = Turn.indexToTurn(falseIndices[index]);
      this.player.cardsPlayed[falseIndices[index]] = true;
    } else {
      let falseIndices = this.player.cardsPlayed
        .map((played, index) => (!played ? index : -1))
        .filter(index => index !== -1);
      let index = Math.floor(Math.random() * falseIndices.length);
      turns[1] = Turn.indexToTurn(falseIndices[index]);
      this.player.cardsPlayed[falseIndices[index]] = true;
    }
  }
}
