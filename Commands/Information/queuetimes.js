const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName('queue-times')
        .setDescription('Give queue Times of the park are you choose')
        .addStringOption(option =>
            option.setName('options')
                .setDescription('Give queue Times of the park are you choose')
                .setRequired(true)
                .addChoices(
                    { name: 'DisneyLand Paris', value: 'dlp' },
                    { name: 'Walt Disney Studios Paris', value: 'dlpstudios' },
                    { name: 'Toverland', value: 'toverland' },
                    { name: 'Efteling', value: 'efteling' },
                )
         ),
    async execute(interaction, client) {

        const { options, user, member } = interaction;

        const Options = options.getString("options")

        switch(Options) {

            case "dlp": {

                const url = 'https://queue-times.com/parks/4/queue_times.json';

                const response = await fetch(url);
                if (!response.ok) throw new Error('Network response was not ok');
                const data = await response.json();
        
                //Frontierland
        
                const frontierLand = data.lands.find(land => land.name === 'Frontierland');
        
                let ridesInfo = '';
                if (frontierLand.rides && Array.isArray(frontierLand.rides)) {
                    for (const ride of frontierLand.rides) {
                        ridesInfo += `${ride.is_open ? '🟢' : '🔴'} ${ride.name} -  Wait Time: **${ride.wait_time} mins**\n`;
                    }
                }
                // Adventureland
        
                const Adventureland = data.lands.find(land => land.name === 'Adventureland');
        
                let ridesInfoadventureland = '';
                if (Adventureland.rides && Array.isArray(Adventureland.rides)) {
                    for (const ride of Adventureland.rides) {
                        ridesInfoadventureland += `${ride.is_open ? '🟢' : '🔴'} ${ride.name} -  Wait Time: **${ride.wait_time} mins**\n`;
                    }
                }
        
                // Fantasyland
        
                const Fantasyland = data.lands.find(land => land.name === 'Fantasyland');
        
                let ridesInfoFantasyland = '';
                if (Fantasyland.rides && Array.isArray(Fantasyland.rides)) {
                    for (const ride of Fantasyland.rides) {
                        ridesInfoFantasyland += `${ride.is_open ? '🟢' : '🔴'} ${ride.name} -  Wait Time: **${ride.wait_time} mins**\n`;
                    }
                }
        
                // Discoveryland
        
                const Discoveryland = data.lands.find(land => land.name === 'Discoveryland');
        
                let ridesInfoDiscoveryland = '';
                if (Discoveryland.rides && Array.isArray(Discoveryland.rides)) {
                    for (const ride of Discoveryland.rides) {
                        ridesInfoDiscoveryland += `${ride.is_open ? '🟢' : '🔴'} ${ride.name} -  Wait Time: **${ride.wait_time} mins**\n`;
                    }
                }
        
                // Main Street U.S.A
        
                const MainStreet = data.lands.find(land => land.name === 'Main Street U.S.A');
        
                let ridesInfoMainStreet = '';
                if (MainStreet.rides && Array.isArray(MainStreet.rides)) {
                    for (const ride of MainStreet.rides) {
                        ridesInfoMainStreet += `${ride.is_open ? '🟢' : '🔴'} ${ride.name} -  Wait Time: **${ride.wait_time} mins**\n`;
                    }
                }
        
                const embed = new EmbedBuilder()
                    .setAuthor({ name: `DisneyLand Paris`})
                    .setColor("White")
                    .addFields(
                        { name: 'FrontierLand', value: ridesInfo || 'No rides data available' },
                        { name: 'Adventureland', value: ridesInfoadventureland || 'No rides data available' },
                        { name: 'Main Street U.S.A', value: ridesInfoMainStreet || 'No rides data available' },
                        { name: 'Discoveryland', value: ridesInfoDiscoveryland || 'No rides data available' },
                        { name: 'Fantasyland', value: ridesInfoFantasyland || 'No rides data available' },
                        
                    )
                    .setTimestamp()
                await interaction.reply({ embeds: [embed], ephemeral: true });

            }

               break;

            case "dlpstudios": {


            }

               break;

            case "toverland": {

                const url3 = 'https://queue-times.com/parks/305/queue_times.json';

                const response3 = await fetch(url3);
                if (!response3.ok) throw new Error('Network response was not ok');
                const data3 = await response3.json();

                        
                //Avalon
        
                const avalon = data3.lands.find(land => land.name === 'Avalon');
        
                let ridesInfoAvalon = '';
                if (avalon.rides && Array.isArray(avalon.rides)) {
                    for (const ride of avalon.rides) {
                        ridesInfoAvalon += `${ride.is_open ? '🟢' : '🔴'} ${ride.name} -  Wait Time: **${ride.wait_time} mins**\n`;
                    }
                }

                //Ithaka
        
                const ithaka = data3.lands.find(land => land.name === 'Ithaka');
        
                let ridesInfoithaka = '';
                if (ithaka.rides && Array.isArray(ithaka.rides)) {
                    for (const ride of ithaka.rides) {
                        ridesInfoithaka += `${ride.is_open ? '🟢' : '🔴'} ${ride.name} -  Wait Time: **${ride.wait_time} mins**\n`;
                    }
                }

                // Land van toos

                const LandvanToos = data3.lands.find(land => land.name === 'Land van Toos');
        
                let ridesInfoLandvanToos = '';
                if (LandvanToos.rides && Array.isArray(LandvanToos.rides)) {
                    for (const ride of LandvanToos.rides) {
                        ridesInfoLandvanToos += `${ride.is_open ? '🟢' : '🔴'} ${ride.name} -  Wait Time: **${ride.wait_time} mins**\n`;
                    }
                }

                // Magishe Vallei

                const MagischeVallei = data3.lands.find(land => land.name === 'Magische Vallei');
        
                let ridesInfoMagischeVallei = '';
                if (MagischeVallei.rides && Array.isArray(MagischeVallei.rides)) {
                    for (const ride of MagischeVallei.rides) {
                        ridesInfoMagischeVallei += `${ride.is_open ? '🟢' : '🔴'} ${ride.name} -  Wait Time: **${ride.wait_time} mins**\n`;
                    }
                }

                // Port Laguna

                const PortLaguna = data3.lands.find(land => land.name === 'Port Laguna');
        
                let ridesInfoPortLaguna = '';
                if (PortLaguna.rides && Array.isArray(PortLaguna.rides)) {
                    for (const ride of PortLaguna.rides) {
                        ridesInfoPortLaguna += `${ride.is_open ? '🟢' : '🔴'} ${ride.name} -  Wait Time: **${ride.wait_time} mins**\n`;
                    }
                }

                
                // Wunderwald

                const Wunderwald = data3.lands.find(land => land.name === 'Wunderwald');
        
                let ridesInfoWunderwald = '';
                if (Wunderwald.rides && Array.isArray(Wunderwald.rides)) {
                    for (const ride of Wunderwald.rides) {
                        ridesInfoWunderwald += `${ride.is_open ? '🟢' : '🔴'} ${ride.name} -  Wait Time: **${ride.wait_time} mins**\n`;
                    }
                }

                const embed = new EmbedBuilder()
                .setAuthor({ name: `Toverland`})
                .setColor("White")
                .addFields(
                    { name: 'Avalon', value: ridesInfoAvalon || 'No rides data available' },
                    { name: 'Ithaka', value: ridesInfoithaka || 'No rides data available' },
                    { name: 'Land van Toos', value: ridesInfoLandvanToos || 'No rides data available' },
                    { name: 'Magische Vallei', value: ridesInfoMagischeVallei || 'No rides data available' },
                    { name: 'Port Laguna', value: ridesInfoPortLaguna || 'No rides data available' },
                    { name: 'Wunderwald', value: ridesInfoWunderwald || 'No rides data available' },
                    
                )
                .setTimestamp()
            await interaction.reply({ embeds: [embed], ephemeral: true });




            }
   
               break;

            case "efteling": {


            }
      
               break;
        } 

    }
}