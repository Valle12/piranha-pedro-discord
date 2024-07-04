import type {
  ActionRow,
  ActionRowBuilder,
  ButtonBuilder,
  MessageActionRowComponent,
} from "discord.js";
import type { GameBoard } from "./gameBoard";

export class Interactions {
  gameBoard: GameBoard;

  constructor(gameBoard: GameBoard) {
    this.gameBoard = gameBoard;
  }

  updateUi(
    rows: ActionRow<MessageActionRowComponent>[],
    customId: string,
    activePlayer: boolean,
    cardsPlayed: number
  ): ActionRowBuilder<ButtonBuilder>[] {
    let index = 0;
    for (let row of rows) {
      for (let ele of row.components) {
        if (ele.customId === customId)
          return this.updateCardsAndButtons(index, activePlayer, cardsPlayed);
        index++;
      }
    }
    return [];
  }

  private updateCardsAndButtons(
    index: number,
    activePlayer: boolean,
    cardsPlayed: number
  ): ActionRowBuilder<ButtonBuilder>[] {
    this.gameBoard.buttonBuilders[index].setDisabled(true);
    this.gameBoard.buttonBuilders[1].setLabel(
      activePlayer ? `🃏 ${cardsPlayed} / 2` : `🃏 ${cardsPlayed} / 	1`
    );

    return this.gameBoard.initActionRows();
  }
}
