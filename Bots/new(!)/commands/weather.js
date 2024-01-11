const weather = require('weather-js');
const Command = require('./command');
const Discord = require('discord.js');

module.exports = class extends Command {
    name = 'weather';

    execute(msg, ...args) {
            
    weather.find({search: args.join(" "), degreeType: 'C'}, function (error, result){
        // 'C' can be changed to 'F' for farneheit results
        if(error) return msg.channel.send(error);
        if(!args[0]) return msg.channel.send('Please specify a location')

        if(result === undefined || result.length === 0) return msg.channel.send('**Invalid** location');

        var current = result[0].current;
        var location = result[0].location;

        const weatherinfo = new Discord.MessageEmbed()
        .setDescription(`**${current.skytext}**`)
        .setAuthor(`Weather forecast for ${current.observationpoint}`)
        .setThumbnail(current.imageUrl)
        .setColor("RANDOM")
        .addField('Timezone', `UTC${location.timezone}`, true)
        .addField('Degree Type', 'Celsius', true)
        .addField('Temperature', `${current.temperature}°`, true)
        .addField('Wind', current.winddisplay, true)
        .addField('Feels like', `${current.feelslike}°`, true)
        .addField('Humidity', `${current.humidity}%`, true)


        return msg.channel.send(weatherinfo);
        })        
    }
}