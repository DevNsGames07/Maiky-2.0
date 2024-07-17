const { Client, Events, Collection, GatewayIntentBits } = require('discord.js');
//dotenv
require('dotenv').config()
const client = new Client({ intents: [Object.keys(GatewayIntentBits)] });

client.commands = new Collection();

//Handlers
const { loadCommands } = require("./Handlers/cmd-handler")
const { loadEvents } = require("./Handlers/event-handler")

client.once('ready', async () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on(Events.InteractionCreate, async interaction => {
	if (!interaction.isChatInputCommand()) return;

	const command = interaction.client.commands.get(interaction.commandName);

	if (!command) {
		console.error(`No command matching ${interaction.commandName} was found.`);
		return;
	}

	try {
		await command.execute(interaction, client);
	} catch (error) {
		console.error(error);
		if (interaction.replied || interaction.deferred) {
			await interaction.followUp({ content: 'There was an error while executing this command!', ephemeral: true });
		} else {
			await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
		}
	}
});


//Client start
client.login(process.env.TOKEN).then(() => {
    loadCommands(client);
    loadEvents(client);

})
