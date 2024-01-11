const Discord = require('discord.js');
const prefix = '!';
const client = new Discord.Client();
const ytdl = require("ytdl-core")
const {
    token,
    channel_id,
    video_urls
} = require("./config.json")

client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).trim().split(/ + /);
    const command = args.shift().toLowerCase();

    if (command === 'uptime') {
        if (!message.content.startsWith(prefix) || message.author.bot) return;
        let totalSeconds = (client.uptime / 1000);
        let days = Math.floor(totalSeconds / 86400);
        totalSeconds %= 86400;
        let hours = Math.floor(totalSeconds / 3600);
        totalSeconds %= 3600;
        let minutes = Math.floor(totalSeconds / 60);
        let seconds = Math.floor(totalSeconds % 60);

        const embed = new Discord.MessageEmbed()
           .setTitle(`Luxurious Roleplay`)
           .addField("Days", `${days}`)
           .addField("Hours", `${hours}`)
           .addField("Minutes", `${minutes}`)
           .addField("Seconds", `${seconds}`)
       message.channel.send(embed);
    }
});

client.once('ready', () => {
    client.user.setPresence({
        status: 'available',
        activity: {
            name: '!cmd | Prodigy',
            type: 'STREAMING',
            url: 'https://www.twitch.tv/invalid_input_'
        }
    });
});

const startTimestamps = new Map()

const pad2Digits = value => String(value).padStart(2, '0')

client.on('message', async message => {
  try {
    if (message.content === '!on') {
      startTimestamps.set(message.author.id, Date.now())
      await message.reply('Βάρδια Ξεκίνησε.')
    } else if (message.content === '!off') {
      if (startTimestamps.has(message.author.id)) {
        const ms = Date.now() - startTimestamps.get(message.author.id)
        const totalSecs = Math.floor(ms / 1000)
        const totalMins = Math.floor(totalSecs / 60)
        const hrs = Math.floor(totalMins / 60)
        const mins = totalMins % 60
        const secs = totalSecs % 60
        await message.reply(`Βάρδια Τελείωσε, Χρόνος: ${hrs}:${pad2Digits(mins)}:${pad2Digits(secs)}`)
        startTimestamps.delete(message.author.id)
      } else {
        await message.reply('Πρώτα κάνε `!on` !')
      }
    }
  } catch (error) {
    console.error(error)
  }
})

client.on('message', message =>{

	let args = message.content.substring(prefix.length).split(" ");
	
	switch(args[0]){
		case 'app':
    			const embed = new Discord.MessageEmbed()
			.setTitle('** ``Applications`` **')
			.setColor('#d18013')
			.addField('** Staff 🔰 **', "> https://bit.ly/3chMO5A")	
			.addField('** ΕΛ.ΑΣ. 👮 **', "> https://bit.ly/3x05Ghh")	
			.addField('** Ε.Κ.Α.Β. 🥼 **', "> http://bitly.ws/etjf")		
			message.channel.send(embed);
			break;
	}	
});

client.on('message', message =>{

	let args = message.content.substring(prefix.length).split(" ");
	
	switch(args[0]){
		case 'cmd':
    			const embed = new Discord.MessageEmbed()
			.setTitle('** ``Commands`` **')
			.setColor('#d18013')
			.addField('** Server Status **', "> !status")	
			.addField('** Applications **', "> !app")	
			.addField('** Support **', "> !support")		
			message.channel.send(embed);
			break;
	}	
});

    client.on("message", message=>{
    if(message.channel.name === "🚙𝐕𝐞𝐡𝐢𝐜𝐥𝐞-𝐒𝐮𝐠𝐠𝐞𝐬𝐭𝐢𝐨𝐧𝐬"){
                   message.react("847827823733374976")
	    	   message.react("❌")
    }
});

    client.on("message", message=>{
    if(message.channel.name === "👊𝐒𝐮𝐠𝐠𝐞𝐬𝐭𝐢𝐨𝐧𝐬"){
                   message.react("847827823733374976")
	    	   message.react("❌")
    }
});

    client.on("message", message=>{
    if(message.channel.name === "🔍𝐏𝐨𝐥𝐥𝐬"){
                   message.react("847827823733374976")
	    	   message.react("❌")
    }
});

    client.on("message", message=>{
    if(message.channel.name === "📷𝐈𝐧𝐬𝐭𝐚𝐠𝐫𝐚𝐦"){
                   message.react("❤️")
    }
});

client.on('message', async message => {
    if(message.author.bot) return;

    if(message.channel.id === "829659942310510674"){
	const channel = client.channels.cache.get('829659942310510674');
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
    if(message.channel.id === "829659743877857280"){
	const channel = client.channels.cache.get('829659743877857280');
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

client.on('message', async message => {
    if(message.author.bot) return;
    if(message.channel.id === "829661772805177354"){
	const channel = client.channels.cache.get('829661772805177354');
	const webhooks = await channel.fetchWebhooks();
	const webhook = webhooks.first();
	const Attachment = message.attachments.first();	
	const insta = new Discord.MessageEmbed()
	.setAuthor(message.member.user.tag, message.author.avatarURL())
	.setTitle('📄 **χρυσός-οδηγός**')
	.setDescription(message.content)
	.setColor('#ff9d00')
	.setTimestamp()
	if (Attachment && Attachment.url) {insta.setImage(Attachment.url)}
	await webhook.send(insta)
	message.delete({ timeout: 1 })

    }
});

client.on('message', async message => {
    if(message.author.bot) return;
    if(message.channel.id === "829660333353992238"){
	const channel = client.channels.cache.get('829660333353992238');
	const webhooks = await channel.fetchWebhooks();
	const webhook = webhooks.first();
	const Attachment = message.attachments.first();	
	const insta = new Discord.MessageEmbed()
	.setAuthor(message.member.user.tag, message.author.avatarURL())
	.setTitle('**ΕΡΤ**')
	.setDescription(message.content)
	.setColor('#FFFFFF')
	.setTimestamp()
	if (Attachment && Attachment.url) {insta.setImage(Attachment.url)}
	await webhook.send(insta)
	message.delete({ timeout: 1 })

    }
});

client.on('message', message =>{

	let args = message.content.substring(prefix.length).split(" ");
	
	switch(args[0]){
		case 'support':
    			const embed = new Discord.MessageEmbed()
			.setDescription("Ένας <@&829648280551686164> θα σας εξυπηρετήσει άμεσα")
			message.channel.send(embed);
			break;
	}	
});

const sup = require("./support");
sup(client);
const wfd = require("./wfd");
wfd(client);
const int = require("./int");
int(client);
client.login(token);
