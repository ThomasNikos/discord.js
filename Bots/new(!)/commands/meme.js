const randomPuppy = require('random-puppy');
const Discord = require('discord.js');
const Command = require('./command');

module.exports = class extends Command {
    name = 'meme';
    async execute(msg) {
        console.log(msg) 
        const subReddits = ["dankmemes", "meme", "memes"]
        const random = subReddits[Math.floor(Math.random() * subReddits.length)]
  
        const img = await randomPuppy(random);
  
        const memeEmbed = new Discord.MessageEmbed()
        .setImage(img)
        .setTitle(`Your meme. From r/${random}`)
        .setURL(`https://reddit.com/r/${random}`)
        .setColor("RANDOM")
  
        msg.channel.send(memeEmbed);
    }
}