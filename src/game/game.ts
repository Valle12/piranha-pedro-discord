import { Board } from "./board";

export class Game {
  board: Board;

  constructor() {
    this.board = new Board();
  }
}
