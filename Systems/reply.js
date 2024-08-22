const { EmbedBuilder } = require("discord.js")
const client = require("../index")

function Reply(interaction, system, title, color, description, type) {

    const { member, guild } = interaction;

    interaction.reply({
        embeds: [
            new EmbedBuilder()
                .setAuthor({ name: `${guild.name}'s ${system} System`})
                .setTitle(`${title}`)
                .setColor(`${color}`)
                .setThumbnail(guild.iconURL())
                .setDescription(`${description}`)
                .setFooter({ text: `© Maiky`, iconURL: client.user.displayAvatarURL({ dynamic: true }) })
                .setTimestamp()
        ],
        ephemeral: type
    })

}

module.exports = Reply