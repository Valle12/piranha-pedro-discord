import { Client, Events, GatewayIntentBits } from "discord.js";

const client = new Client({
  intents: [GatewayIntentBits.Guilds],
});

client.on("ready", c => {
  console.log(`✅ ${c.user.tag} is online`);
});

client.login(process.env.TOKEN);
