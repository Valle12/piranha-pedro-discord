import {
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  Client,
} from "discord.js";
import { Commands } from "./commands";
import { Game } from "./game/game";
import { RegisterCommands } from "./registerCommands";

declare module "bun" {
  interface Env {
    TOKEN: string;
    GUILD_ID: string;
    CLIENT_ID: string;
    PEDRO_ID: string;
  }
}

const client = new Client({
  intents: ["Guilds", "GuildMessages", "GuildMembers", "MessageContent"],
});

client.once("ready", c => {
  console.log(`✅ ${c.user.tag} is online`);
  console.log(c.user.avatarURL());
  new RegisterCommands();
});

client.on("interactionCreate", interaction => {
  if (!interaction.isChatInputCommand()) return;
  if (interaction.commandName === Commands.PIRANHA_PEDRO) {
    const pedroLabel = new ButtonBuilder()
      .setCustomId("pedro-label")
      .setLabel("AI")
      .setEmoji({ name: "pedro", id: process.env.PEDRO_ID })
      .setStyle(ButtonStyle.Primary);
    const pedroLabelRow = new ActionRowBuilder<ButtonBuilder>().addComponents(
      pedroLabel
    );

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
    const northRow = new ActionRowBuilder<ButtonBuilder>().addComponents(
      north1,
      north2,
      north3
    );

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
    const eastRow = new ActionRowBuilder<ButtonBuilder>().addComponents(
      east1,
      east2,
      east3
    );

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
    const southRow = new ActionRowBuilder<ButtonBuilder>().addComponents(
      south1,
      south2,
      south3
    );

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
    const westRow = new ActionRowBuilder<ButtonBuilder>().addComponents(
      west1,
      west2,
      west3
    );

    let game = new Game();
    interaction.reply({
      content: game.board.toString(),
      components: [pedroLabelRow, northRow, eastRow, southRow, westRow],
    });
  }
});

client.login(process.env.TOKEN);
