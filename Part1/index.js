const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages] });

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on ('messageCreate', (message) => {
    if (message.content === 'hello') {
        message.reply('Hello')
    };
});

client.login("token");
