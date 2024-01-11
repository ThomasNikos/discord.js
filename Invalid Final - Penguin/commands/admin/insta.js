const { MessageEmbed } = require('discord.js');
const mongoose = require('mongoose');
const Guild = require('../../models/guild');

module.exports = {
    name: 'insta',
    category: 'admin',
    description: 'Sets the Instagram channel.',
    usage: `insta <newname>`,
    run: async (client, message, args) => {
        message.delete();

        if (!message.member.hasPermission('MANAGE_GUILD')) {
            return message.channel.send('You do not have permission to use this command!').then(m => m.delete({timeout: 10000}));
        };

        const settings = await Guild.findOne({
            guildID: message.guild.id
        }, (err, guild) => {
            if (err) console.error(err)
            if (!guild) {
                const darkc = "◾𝐃𝐚𝐫𝐤-𝐂𝐡𝐚𝐭"
                const instac = "📷𝐈𝐧𝐬𝐭𝐚𝐠𝐫𝐚𝐦"
                const vehiclech = '🚙𝐕𝐞𝐡𝐢𝐜𝐥𝐞-𝐒𝐮𝐠𝐠𝐞𝐬𝐭𝐢𝐨𝐧𝐬'
                const suggestch = '👊𝐒𝐮𝐠𝐠𝐞𝐬𝐭𝐢𝐨𝐧𝐬'
                const pollsch = '🔍𝐏𝐨𝐥𝐥𝐬'
                const musictwo = "https://www.youtube.com/watch?v=gnyW6uaUgk4"
                guild = new Guild({
                    _id: mongoose.Types.ObjectId(),
                    guildID: guild.id,
                    guildName: guild.name,
                    prefix: process.env.PREFIX,
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

                return message.channel.send('This server was not in our database! We have added it, please retype this command.').then(m => m.delete({timeout: 10000}));
            }
        });

        if (args.length < 1) {
            return message.channel.send(`You must specify a channel to set for Instagram on this server! Your current Instagram channel is \`${settings.dark}\``).then(m => m.delete({timeout: 10000}));
        };

        await settings.updateOne({
            insta: args[0]
        });

        return message.channel.send(`Your server Instagram chat has been updated to \`${args[0]}\``);
    }
}