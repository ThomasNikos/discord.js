const Discord = require('discord.js');
const Guild = require('../models/guild');

module.exports = async (client, message) => {
	client.on('message', async message => {

    const settings = await Guild.findOne({
        guildID: message.guild.id
    }, (err, guild) => {
        if (err) console.error(err)});

        const vehiclech = settings.vehiclesuggest;
        const suggestch = settings.suggestions;
        const pollsch = settings.polls;
        const instach = settings.insta;

    if(message.channel.name === vehiclech){
                   message.react("☑️")
	    	   message.react("❎")
    }

    if(message.channel.name === suggestch ){
                   message.react("☑️")
	    	   message.react("❎")
    }


    if(message.channel.name === pollsch ){
                   message.react("☑️")
	    	   message.react("❎")
    }


    if(message.channel.name === instach ){
                   message.react("❤️")
    }
});
}