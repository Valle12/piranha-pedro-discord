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

  disableButton(
    rows: ActionRow<MessageActionRowComponent>[],
    customId: string
  ): ActionRowBuilder<ButtonBuilder>[] {
    let index = 0;
    for (let row of rows) {
      for (let button of row.components) {
        if (button.customId === customId)
          return this.generateUpdatedComponents(index);
        index++;
      }
    }
    return [];
  }

  private generateUpdatedComponents(
    index: number
  ): ActionRowBuilder<ButtonBuilder>[] {
    this.gameBoard.buttonBuilders[index].setDisabled(true);

    return this.gameBoard.initActionRows();
  }
}
