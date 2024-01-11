const math = require('mathjs');
const Command = require('./command');
const Discord = require('discord.js');

module.exports = class extends Command {
    name = 'calculate';

    execute(msg, ...args) {

        if(!args[0]) return msg.channel.send('Please provide a question');

        let resp;

        try {
            resp = math.evaluate(args.join(" "))
        } catch (e) {
            return msg.channel.send('Please provide a **valid** question')
        }
        const embed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setTitle('Calculator')
        .addField('Question', `\`\`\`css\n${args.join(' ')}\`\`\``)
        .addField('Answer', `\`\`\`css\n${resp}\`\`\``)

        return msg.channel.send(embed);
    }
}