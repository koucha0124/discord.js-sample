const { Client, Intents, Interaction } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

client.on("ready", async () => {
    const data = [{
        name: "hello",
        description: "Description about the slash command",
    }];
    await client.application.commands.set(data);
    console.log("Ready!");
});

client.on("interactionCreate", async (Interaction) => {
    if (!Interaction.isCommand()) {
        return;
    }
    if (Interaction.commandName === "hello") {
        await Interaction.reply("Hello World!!");
    }
});

client.login("token");
