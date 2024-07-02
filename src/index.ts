import { Client } from "discord.js";
import { RegisterCommands } from "./registerCommands";

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
  if (interaction.commandName === "piranha-pedro") {
    interaction.reply("WHAZZZUPPPP");
  }
});

client.login(process.env.TOKEN);
