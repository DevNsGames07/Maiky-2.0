
module.exports = {
    name: "ready",
    once: true,
    async execute(client) {

        console.log(`[ONLINE]` + ` ${client.user.tag} is online in ${client.guilds.cache.size} servers! `);
        
    },
};