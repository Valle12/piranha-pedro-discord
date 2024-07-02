import { REST, Routes, SlashCommandBuilder } from "discord.js";

export class RegisterCommands {
  commands = [
    new SlashCommandBuilder()
      .setName("piranha-pedro")
      .setDescription("Start a new Piranha Pedro game")
      .toJSON(),
  ];

  rest: REST;

  constructor() {
    this.rest = new REST().setToken(process.env.TOKEN);
    this.putCommands();
  }

  async putCommands() {
    try {
      console.log("Registering slash commands...");
      await this.rest.put(
        Routes.applicationGuildCommands(
          process.env.CLIENT_ID,
          process.env.GUILD_ID
        ),
        { body: this.commands }
      );
      console.log("Slash commands were registered");
    } catch (error) {
      console.error(`There was an error: ${error}`);
    }
  }
}
