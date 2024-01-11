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
    if(message.author.bot) return;
    if(message.channel.name === '◾𝐃𝐚𝐫𝐤-𝐂𝐡𝐚𝐭'){
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
    if(message.author.bot) return;
    if(message.channel.name === '📷𝐈𝐧𝐬𝐭𝐚𝐠𝐫𝐚𝐦'){
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