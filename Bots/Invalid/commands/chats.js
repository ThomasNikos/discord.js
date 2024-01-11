const Discord = require('discord.js');

module.exports = function (client) {
    const description = {
        name: "chats",
        filename: "chats.js",
        version: "final"
    }

client.on("ready", () => {
  console.log("Chats ready!");
});

client.on('message', async message => {
    const darkch = client.settings.get(message.guild.id, "darkchat")
    if(message.author.bot) return;
    if(message.channel.name === darkch){
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
});

client.on('message', async message => {
    const instag = client.settings.get(message.guild.id, "instagram")
    if(message.author.bot) return;
    if(message.channel.name === instag){
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