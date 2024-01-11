module.exports = client => {    
    client.user.setPresence({
        status: 'dnd',
        activity: {
            name: `for ${client.guilds.cache.size} servers`,
            type: 'STREAMING',
            url: 'https://www.youtube.com/watch?v=BD_guK9b64k'
        }
    });
}