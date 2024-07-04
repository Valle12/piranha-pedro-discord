import { ActionRowBuilder, ButtonBuilder, ButtonStyle } from "discord.js";

export class GameBoard {
  buttonBuilders: ButtonBuilder[] = [];

  initGameBoard(activePlayer: boolean): ActionRowBuilder<ButtonBuilder>[] {
    this.initButtonBuilders(activePlayer);
    return this.initActionRows();
  }

  initButtonBuilders(activePlayer: boolean) {
    const pedroLabel = new ButtonBuilder()
      .setCustomId("pedroLabel")
      .setLabel(activePlayer ? "You" : "AI")
      .setEmoji({ name: "pedro", id: process.env.PEDRO_ID })
      .setStyle(ButtonStyle.Primary)
      .setDisabled(true);
    const cardsSelected = new ButtonBuilder()
      .setCustomId("cardsSelected")
      .setLabel(activePlayer ? "🃏 0 / 2" : "🃏 0 / 1")
      .setStyle(ButtonStyle.Primary)
      .setDisabled(true);
    const north1 = new ButtonBuilder()
      .setCustomId("north1")
      .setLabel("⬆️ 1")
      .setStyle(ButtonStyle.Primary);
    const north2 = new ButtonBuilder()
      .setCustomId("north2")
      .setLabel("⬆️ 2")
      .setStyle(ButtonStyle.Primary);
    const north3 = new ButtonBuilder()
      .setCustomId("north3")
      .setLabel("⬆️ 3")
      .setStyle(ButtonStyle.Primary);
    const east1 = new ButtonBuilder()
      .setCustomId("east1")
      .setLabel("➡️ 1")
      .setStyle(ButtonStyle.Primary);
    const east2 = new ButtonBuilder()
      .setCustomId("east2")
      .setLabel("➡️ 2")
      .setStyle(ButtonStyle.Primary);
    const east3 = new ButtonBuilder()
      .setCustomId("east3")
      .setLabel("➡️ 3")
      .setStyle(ButtonStyle.Primary);
    const south1 = new ButtonBuilder()
      .setCustomId("south1")
      .setLabel("⬇️ 1")
      .setStyle(ButtonStyle.Primary);
    const south2 = new ButtonBuilder()
      .setCustomId("south2")
      .setLabel("⬇️ 2")
      .setStyle(ButtonStyle.Primary);
    const south3 = new ButtonBuilder()
      .setCustomId("south3")
      .setLabel("⬇️ 3")
      .setStyle(ButtonStyle.Primary);
    const west1 = new ButtonBuilder()
      .setCustomId("west1")
      .setLabel("⬅️ 1")
      .setStyle(ButtonStyle.Primary);
    const west2 = new ButtonBuilder()
      .setCustomId("west2")
      .setLabel("⬅️ 2")
      .setStyle(ButtonStyle.Primary);
    const west3 = new ButtonBuilder()
      .setCustomId("west3")
      .setLabel("⬅️ 3")
      .setStyle(ButtonStyle.Primary);

    this.buttonBuilders.push(
      pedroLabel,
      cardsSelected,
      north1,
      north2,
      north3,
      east1,
      east2,
      east3,
      south1,
      south2,
      south3,
      west1,
      west2,
      west3
    );
  }

  initActionRows(): ActionRowBuilder<ButtonBuilder>[] {
    const pedroLabelRow = new ActionRowBuilder<ButtonBuilder>().addComponents(
      this.buttonBuilders[0],
      this.buttonBuilders[1]
    );
    const northRow = new ActionRowBuilder<ButtonBuilder>().addComponents(
      this.buttonBuilders[2],
      this.buttonBuilders[3],
      this.buttonBuilders[4]
    );
    const eastRow = new ActionRowBuilder<ButtonBuilder>().addComponents(
      this.buttonBuilders[5],
      this.buttonBuilders[6],
      this.buttonBuilders[7]
    );
    const southRow = new ActionRowBuilder<ButtonBuilder>().addComponents(
      this.buttonBuilders[8],
      this.buttonBuilders[9],
      this.buttonBuilders[10]
    );
    const westRow = new ActionRowBuilder<ButtonBuilder>().addComponents(
      this.buttonBuilders[11],
      this.buttonBuilders[12],
      this.buttonBuilders[13]
    );

    return [pedroLabelRow, northRow, eastRow, southRow, westRow];
  }
}
