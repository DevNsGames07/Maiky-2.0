const mongoose = require('mongoose');
const mongoURL = process.env.mongodb;


module.exports = {
    name: "ready",
    once: true,
    async execute(client) {

        console.log(`[ONLINE]` + ` ${client.user.tag} is online in ${client.guilds.cache.size} servers! `);

        try {
            await mongoose.connect(process.env.mongodb, {});
            console.log("[DataBase] CONNECTED TO DATABASE SUCCESSFULLY");
        } catch (error) {
            console.error('[DataBase] COULD NOT CONNECT TO DATABASE:', error.message);
        }
        
    },
};