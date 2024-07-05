import type {
  ActionRow,
  ActionRowBuilder,
  ButtonBuilder,
  MessageActionRowComponent,
} from "discord.js";
import { RandomAI } from "../ai/randomAi";
import { GameBoard } from "../ui/gameBoard";
import { Interactions } from "../ui/interactions";
import { Board } from "./board";
import { Player } from "./player";
import type { Turn } from "./turn";

export class Game {
  board = new Board();
  gameBoard = new GameBoard();
  interactions = new Interactions(this.gameBoard);
  activePlayer = true;
  turns: Turn[] = new Array(3);
  cardsPlayed = 0;
  player = new Player(false);
  aiPlayer = new Player(true);
  ai = new RandomAI(this.aiPlayer);

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
        this.ai.addTurn(this.turns);
        console.log(this.turns);
      }
    } else {
      this.turns[0] = turn;
      this.cardsPlayed++;
      this.ai.addTurn(this.turns);
    }

    return this.interactions.updateUi(
      rows,
      customId,
      this.activePlayer,
      this.cardsPlayed
    );
  }
}
