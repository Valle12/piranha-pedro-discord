import type {
  ActionRow,
  ActionRowBuilder,
  ButtonBuilder,
  MessageActionRowComponent,
} from "discord.js";
import { GameBoard } from "../ui/gameBoard";
import { Interactions } from "../ui/interactions";
import { Board } from "./board";

export class Game {
  board: Board;
  gameBoard: GameBoard;
  interactions: Interactions;
  activePlayer = true;

  constructor() {
    this.board = new Board();
    this.gameBoard = new GameBoard();
    this.interactions = new Interactions(this.gameBoard);
  }

  initGameBoard() {
    return this.gameBoard.initGameBoard(this.activePlayer);
  }

  disableButton(
    rows: ActionRow<MessageActionRowComponent>[],
    customId: string
  ): ActionRowBuilder<ButtonBuilder>[] {
    return this.interactions.disableButton(rows, customId);
  }
}
