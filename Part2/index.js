const { Client, Intents, Interaction } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

client.on("ready", async () => {
    const data = [{
        name: "ping",
        description: "ただ単にスラッシュコマンドに反応するだけです。",
    }];
    await client.application.commands.set(data);
    console.log("Ready!");
});

client.on("interactionCreate", async (Interaction) => {
    if (!Interaction.isCommand()) {
        return;
    }
    if (Interaction.commandName === "ping") {
        await Interaction.reply("Pong!");
    }
})

client.login("token");
