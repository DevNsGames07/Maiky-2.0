const { SlashCommandBuilder, EmbedBuilder, ActionRowBuilder, PermissionsBitField, TextInputBuilder, TextInputStyle, getTextInputValue, ButtonBuilder, ButtonStyle, ComponentType, ModalBuilder, ChannelType } = require('discord.js');
const CommitDB2 = require("../../Schema/CommitSetup")

module.exports = {
    data: new SlashCommandBuilder()
        .setName("commit")
        .setDescription("Commit Setup")
        .addChannelOption(option =>
            option.setName("channelsetup")
                .setDescription("Give Channel to send commit")
                .addChannelTypes(ChannelType.GuildText)
                .setRequired(true)
        ),
    async execute(interaction, client) {

        const { guildId, guild, options } = interaction;

        const commitchannel = options.getChannel("channelsetup")

        await CommitDB2.findOneAndUpdate(
            { Guild: guildId },
            {
                Channel: commitchannel
            },
            {
                new: true,
                upsert: true
            })

        const embed4 = new EmbedBuilder()
            .setTitle("**Commit  System Setup!**")
            .setDescription(`The Commit channel is setted to: ${commitchannel}`)
            .setColor("Green")
            .setTimestamp()

        return interaction.reply({ embeds: [embed4], ephemeral: true });

    },
};