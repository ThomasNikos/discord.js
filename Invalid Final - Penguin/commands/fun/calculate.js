const math = require('mathjs');
const Discord = require('discord.js');

module.exports = {
    name: "calculate",
    description: "Get the answer to a math problem",
    usage: `calculate (x + y)`,


    run: async  (client, message, args)  => {

        if(!args[0]) return message.channel.send('Please provide a question').then(m => m.delete({timeout: 10000}));

        let resp;

        try {
            resp = math.evaluate(args.join(" "))
        } catch (e) {
            return message.channel.send('Please provide a **valid** question').then(m => m.delete({timeout: 10000}));
        }

        const embed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setTitle('Calculator')
        .addField('Question', `\`\`\`css\n${args.join(' ')}\`\`\``)
        .addField('Answer', `\`\`\`css\n${resp}\`\`\``)

        return message.channel.send(embed);

    }
}