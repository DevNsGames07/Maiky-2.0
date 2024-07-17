const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');


module.exports = {
  data: new SlashCommandBuilder()
    .setName('testing')
    .setDescription('Replies with Pong!'),
  async execute(interaction, client) {

    const embedje = new EmbedBuilder()
    .setColor("White")
    .setDescription(`Pinging....`)
    .setFooter({ text: `Powered by ${client.user.username}`, iconURL: client.user.displayAvatarURL({ dynamic: true }) })
    .setTimestamp()

    const sent = await interaction.reply({ embeds: [embedje], fetchReply: true })

    const embedje2 = new EmbedBuilder()
    .setColor("White")
    .setDescription(`Latency: ${sent.createdTimestamp - interaction.createdTimestamp}ms`)
    .setFooter({ text: `Powered sby ${client.user.username}`, iconURL: client.user.displayAvatarURL({ dynamic: true }) })
    .setTimestamp()

    interaction.editReply({ embeds: [embedje2] });


  },
};
