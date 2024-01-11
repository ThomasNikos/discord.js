const randomPuppy = require('random-puppy');
const Discord = require('discord.js');
const client = new Discord.Client();

module.exports = {
    name: "meme",
    description: "Gives you a meme",
    usage: `meme`,

    run: async (client, message, args) => {
        const subReddits = ["dankmemes", "meme", "memes"]
        const random = subReddits[Math.floor(Math.random() * subReddits.length)]
  
        const img = await randomPuppy(random);
  
        const memeEmbed = new Discord.MessageEmbed()
        .setImage(img)
        .setTitle(`Your meme. From r/${random}`)
        .setURL(`https://reddit.com/r/${random}`)
        .setColor("RANDOM")
  
        message.channel.send(memeEmbed);
    }
}