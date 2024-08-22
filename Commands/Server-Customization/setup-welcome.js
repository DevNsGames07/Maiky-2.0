const { SlashCommandBuilder, EmbedBuilder, ChannelType, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');
const WelcomeDB = require("../../DB/welcomedb")
const Reply = require("../../Systems/reply")
const defaultWelcomeMessage = "Welkom {user}!";


module.exports = {
    data: new SlashCommandBuilder()
        .setName('welcome')
        .setDescription('Setup or Disable the welcome system.')
        .addSubcommand(subcommand =>
            subcommand.setName("setup")
                .setDescription("setup the system")
                .addChannelOption(option =>
                    option.setName("channel")
                        .setDescription("Select a channel for the welcome system")
                        .setRequired(true)
                        .addChannelTypes(ChannelType.GuildText)
                )
                .addStringOption(option =>
                    option.setName("message")
                        .setDescription("1.{user} is tag the user!!! 2. {guild} is the name of the guild in de message.")
                        .setRequired(false)
                )
        )
        .addSubcommand(subcommand =>
            subcommand.setName("disable")
                .setDescription("Disable the Welcome System")

        )
        .addSubcommand(subcommand =>
            subcommand.setName("remove")
                .setDescription("Remove the Welcome System")

        ),
    async execute(interaction, client) {

        const { options, guild, guildId } = interaction;

        const subcommands = options.getSubcommand();

        const welcomechannel = options.getChannel("channel") || "System this off or no channel selected"
        const welcomemessage = options.getString("message") || WelcomeDB.WelcomeMessage || "Welcome {user}"


        const Data = await WelcomeDB.findOne({ Guild: guildId });

        switch (subcommands) {
            case "setup":

                await WelcomeDB.findOneAndUpdate(
                    { Guild: guildId },
                    {
                        Channel: welcomechannel,
                        WelcomeMessage: welcomemessage,
                        WelcomeEnabled: true
                    },
                    {
                        new: true,
                        upsert: true
                    })

                const welcomesetup = new EmbedBuilder()
                    .setAuthor({ name: `${guild.name}'s Welcome System`})
                    .setColor("Green")
                    .setThumbnail(client.user.displayAvatarURL({ format: 'png', dynamic: true, size: 256 }))
                    .addFields(
                        { name: `GuildID`, value: `|| ${guildId} ||`, inline: true },
                        { name: `Channel`, value: `${welcomechannel}`, inline: true }
                    )
                    .setFooter({ text: `© Maiky`, iconURL: client.user.displayAvatarURL({ dynamic: true }) })
                    .setTimestamp()

                return interaction.reply({ embeds: [welcomesetup], ephemeral: true })

            case "disable":

                if (!Data) {
                    return await Reply(interaction, `Welcome`, `Error!`, `Red`, `There are not a welcome system setting up in this server!`, true)
                } else {

                    await WelcomeDB.updateOne({ Guild: guildId }, { WelcomeEnabled: false })

                    return await Reply(interaction, `Welcome`, `Success!`, `Green`, `The welcome system is **Disabled**!`, true)
                }

            case "remove":

                if (!Data) {
                    return await Reply(interaction, `Welcome`, `Error!`, `Red`, `There are not a welcome system setting up in this server!`, true);
                } else {

                    await WelcomeDB.deleteOne()

                    return await Reply(interaction, `Welcome`, `Success!`, `Green`, `The welcome system is successfully deleted from the database!`, true)


                }

        }
    },
};