const Discord = require('discord.js')

module.exports = {
    name: "ping",
    description: "ping command",
    

    async run (client, message, args) {
        const client = new Discord.Client();
        const ping = new Discord.MessageEmbed()
        .setDescription(`🏓\`${client.ws.ping}\`ms`)

        message.channel.send(ping);
    }
}