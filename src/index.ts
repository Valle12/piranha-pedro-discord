import { Client } from "discord.js";
import { Commands } from "./commands";
import { Game } from "./game/game";
import { RegisterCommands } from "./registerCommands";

declare module "bun" {
  interface Env {
    TOKEN: string;
    GUILD_ID: string;
    CLIENT_ID: string;
    PEDRO_ID: string;
    PIRANHA_ID: string;
  }
}

const client = new Client({
  intents: ["Guilds", "GuildMessages", "GuildMembers", "MessageContent"],
});

client.once("ready", c => {
  console.log(`✅ ${c.user.tag} is online`);
  new RegisterCommands();
});

let game: Game;
client.on("interactionCreate", interaction => {
  if (interaction.isChatInputCommand()) {
    if (interaction.commandName === Commands.PIRANHA_PEDRO) {
      game = new Game();
      const components = game.initGameBoard();

      interaction.reply({
        content: game.board.toString(),
        components,
        ephemeral: true,
      });
    }
  } else if (interaction.isButton()) {
    const components = game.disableButton(
      interaction.message.components,
      interaction.customId
    );

    // TODO handle click on each button

    interaction.update({
      components,
    });
  }
});

client.login(process.env.TOKEN);
