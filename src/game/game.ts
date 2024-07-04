import type {
  ActionRow,
  ActionRowBuilder,
  ButtonBuilder,
  MessageActionRowComponent,
} from "discord.js";
import { GameBoard } from "../ui/gameBoard";
import { Interactions } from "../ui/interactions";
import { Board } from "./board";
import type { Turn } from "./turn";

export class Game {
  board: Board;
  gameBoard: GameBoard;
  interactions: Interactions;
  activePlayer = true;
  turns: Turn[] = new Array(3);
  cardsPlayed = 0;

  constructor() {
    this.board = new Board();
    this.gameBoard = new GameBoard();
    this.interactions = new Interactions(this.gameBoard);
  }

  initGameBoard() {
    return this.gameBoard.initGameBoard(this.activePlayer);
  }

  addTurn(
    turn: Turn,
    rows: ActionRow<MessageActionRowComponent>[],
    customId: string
  ): ActionRowBuilder<ButtonBuilder>[] {
    if (this.activePlayer) {
      if (this.cardsPlayed === 0) {
        this.turns[0] = turn;
        this.cardsPlayed++;
      } else {
        this.turns[2] = turn;
        this.cardsPlayed++;
        // TODO get last turn from ai and execute turns
      }
    } else {
      this.turns[0] = turn;
      this.cardsPlayed++;
      // TODO get last turns from ai and execute turns
    }

    return this.interactions.updateUi(
      rows,
      customId,
      this.activePlayer,
      this.cardsPlayed
    );
  }
}
