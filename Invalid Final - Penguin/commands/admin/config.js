const { MessageEmbed } = require('discord.js');
const mongoose = require('mongoose');
const Guild = require('../../models/guild');

module.exports = {
    name: 'config',
    category: 'admin',
    description: 'Shows the current config',
    usage: `config`,
    run: async (client, message, args) => {
        await Guild.findOne({
            guildID: message.guild.id
        }, (err, guild) => {
            if (err) console.error(err)
            if (!guild) {
                const newGuild = new Guild({
                    _id: mongoose.Types.ObjectId(),
                    guildID: message.guild.id,
                    guildName: message.guild.name,
                    prefix: process.env.PREFIX,
                    logChannelID: null,
                    dark: darkc,
                    insta: instac,
                    suggestions: suggestch,
                    vehiclesuggest: vehiclech,
                    polls: pollsch,
                    music: musictwo
                });
    
                newGuild.save()
                .then(result => console.log(result))
                .catch(err => console.error(err));
            }
        });

        if (args[0]) {
            return getCMD(client, message, args[0]);
        } else {
            return configMSG(client, message);
        }
    }
}

async function configMSG(client, message) {
    const guildDB = await Guild.findOne({
        guildID: message.guild.id
    });

    const embed = new MessageEmbed()
        .setColor("RANDOM")
        .setTitle('Invalid Bot')
        .setThumbnail(client.user.avatarURL())
        .setDescription(`**Prefix:** \`${guildDB.prefix}\`\n**LogChannel:** \`${guildDB.logChannelID}\`\n**DarkChat:** \`${guildDB.dark}\`\n**Instagram:** \`${guildDB.insta}\`\n**Suggestions:** \`${guildDB.suggestions}\`\n**Vehicle:** \`${guildDB.vehiclesuggest}\`\n**Polls:** \`${guildDB.polls}\`\n**Music:** \`${guildDB.music}\`\n`)
        .setFooter('Created by Invalid');
    message.channel.send(embed);
}