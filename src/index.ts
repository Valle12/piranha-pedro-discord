import { Client } from "discord.js";
import { RegisterCommands } from "./registerCommands";
import { Commands } from "./commands";
import { Game } from "./game/game";

declare module "bun" {
  interface Env {
    TOKEN: string;
    GUILD_ID: string;
    CLIENT_ID: string;
  }
}

const client = new Client({
  intents: ["Guilds", "GuildMessages", "GuildMembers", "MessageContent"],
});

client.once("ready", c => {
  console.log(`✅ ${c.user.tag} is online`);
  new RegisterCommands();
});

client.on("interactionCreate", interaction => {
  if (!interaction.isChatInputCommand()) return;
  if (interaction.commandName === Commands.PIRANHA_PEDRO) {
    let game = new Game();
    interaction.reply(game.board.toString());
  }
});

client.login(process.env.TOKEN);
