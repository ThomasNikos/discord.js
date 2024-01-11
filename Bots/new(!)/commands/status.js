const Discord = require('discord.js');
const client = new Discord.Client();
const Command = require('./command');

module.exports = class extends Command {
    name = 'status';
    
    execute(msg, ...args) {
    const Gamedig = require('gamedig');
    const ip = 'server.tycoon.community'
    const port = '30120'
    const image = 'https://dailynewshungary.com/wp-content/uploads/2015/12/anonymus-hungary.png'
    Gamedig.query({
        type: 'fivem',
        host: ip,
        port: port
    }).then((state) => {
        const status = new Discord.MessageEmbed()
            .setColor('#ff0000')
            .setTitle('𝕊𝔼ℝ𝕍𝔼ℝ 𝕀𝕊 𝕆ℕ𝕃𝕀ℕ𝔼')
            .setThumbnail(image)
            .setDescription(ip)
            .addField(`Players:`, `${state.raw.clients}/${state.maxplayers}`)
        msg.channel.send(status)
        console.log(state)
    }).catch((error) => {
        const status1 = new Discord.MessageEmbed()
            .setColor('#00FF00')
            .setTitle('𝕊𝔼ℝ𝕍𝔼ℝ 𝕀𝕊 𝕆𝔽𝔽𝕃𝕀ℕ𝔼')
        msg.channel.send(status1)
        console.log(error);
    });
    }
}