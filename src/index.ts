import { Client } from "discord.js";
import { Commands } from "./commands";
import { Direction } from "./game/direction";
import { Game } from "./game/game";
import { Turn } from "./game/turn";
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

client.once("ready", (c) => {
  console.log(`✅ ${c.user.tag} is online`);
  new RegisterCommands();
});

let game: Game;
client.on("interactionCreate", (interaction) => {
  if (interaction.isChatInputCommand()) {
    if (interaction.commandName === Commands.PIRANHA_PEDRO) {
      game = new Game();
      const components = game.initGameBoard();

      interaction.reply({
        content: game.board.toString(),
        components,
        flags: "Ephemeral",
      });
    }
  } else if (interaction.isButton()) {
    let turn!: Turn;
    switch (interaction.customId) {
      case "north1":
        turn = new Turn(Direction.NORTH, 1);
        break;
      case "north2":
        turn = new Turn(Direction.NORTH, 2);
        break;
      case "north3":
        turn = new Turn(Direction.NORTH, 3);
        break;
      case "east1":
        turn = new Turn(Direction.EAST, 1);
        break;
      case "east2":
        turn = new Turn(Direction.EAST, 2);
        break;
      case "east3":
        turn = new Turn(Direction.EAST, 3);
        break;
      case "south1":
        turn = new Turn(Direction.SOUTH, 1);
        break;
      case "south2":
        turn = new Turn(Direction.SOUTH, 2);
        break;
      case "south3":
        turn = new Turn(Direction.SOUTH, 3);
        break;
      case "west1":
        turn = new Turn(Direction.WEST, 1);
        break;
      case "west2":
        turn = new Turn(Direction.WEST, 2);
        break;
      case "west3":
        turn = new Turn(Direction.WEST, 3);
        break;
    }
    const components = game.addTurn(
      turn,
      interaction.message.components,
      interaction.customId
    );

    interaction.update({
      components,
    });
  }
});

client.login(process.env.TOKEN);
