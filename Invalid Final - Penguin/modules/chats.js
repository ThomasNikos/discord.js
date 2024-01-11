const Discord = require('discord.js');
const Guild = require('../models/guild');

module.exports = async (client, message) => {
	client.on('message', async message => {
    if (message.author.bot) return;

    const settings = await Guild.findOne({
        guildID: message.guild.id
    }, (err, guild) => {
        if (err) console.error(err)});

	const darkch = settings.dark;
	const instach = settings.insta;

    if(message.channel.name === darkch ){
	const channel = client.channels.cache.get(message.channel.id);
	const webhooks = await channel.fetchWebhooks();
	const webhook = webhooks.first();
	const Attachment = message.attachments.first();	
	const dark = new Discord.MessageEmbed()
	.setDescription(message.content)
	.setColor('#00000')
	.setTimestamp()
	if (Attachment && Attachment.url) {dark.setImage(Attachment.url)}
	await webhook.send(dark)
	message.delete({ timeout: 0 })
    }

    if(message.channel.name === instach ){
	const channel = client.channels.cache.get(message.channel.id);
	const webhooks = await channel.fetchWebhooks();
	const webhook = webhooks.first();
	const Attachment = message.attachments.first();	
	const insta = new Discord.MessageEmbed()
	.setAuthor(message.member.user.tag, message.author.avatarURL())
	.setTitle('📷 **Instagram**')
	.setDescription(message.content)
	.setColor('#ff9d00')
	.setTimestamp()
	.setFooter('Instagram', 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/600px-Instagram_icon.png')
	if (Attachment && Attachment.url) {insta.setImage(Attachment.url)}
	await webhook.send(insta)
	message.delete({ timeout: 1 })

    }
});
}