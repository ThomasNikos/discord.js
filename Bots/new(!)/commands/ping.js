const Command = require('./command');
const Discord = require('discord.js');
const client = new Discord.Client();

module.exports = class extends Command {
  name = 'ping';

  execute(msg, ...args) {
    msg.channel.send('```Pinging...```').then(m =>{
      // The math thingy to calculate the user's ping
        var ping = m.createdTimestamp - msg.createdTimestamp;

      // Basic embed
        var embed = new Discord.MessageEmbed()
        .setAuthor(`Your ping is ${ping}`)
        .setColor("RANDOM")
        
        // Then It Edits the message with the ping variable embed that you created
        m.edit(embed)
    });
}
}