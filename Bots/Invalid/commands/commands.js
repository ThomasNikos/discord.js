const Discord = require('discord.js');
const client = new Discord.Client();
const { token, prefix, CHANNEL, SERVER, STATUS, LIVE } = require("./config.json");

module.exports = function (client) {
    const description = {
        name: "commands",
        filename: "commands.js",
        version: "final"
    }
    
client.on("ready", () => {
  console.log("Commands ready!");
});    

client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'help'){
        message.channel.send('Use !ip');
    }
});

client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
    let text = message.content.slice('!invalid'.length);
    if(command === 'invalid'){
        client.users.cache.get(message.author.id).send(text);
    }
});

client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'ip'){
        message.channel.send('Soon');
    }
});

client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'status'){
    const Gamedig = require('gamedig');
    const ip = client.settings.get(message.guild.id, "ip")
    const port = client.settings.get(message.guild.id, "port")
    const image = client.settings.get(message.guild.id, "thumbnail")
    Gamedig.query({
        type: 'fivem',
        host: ip,
        port: port
    }).then((state) => {
        const status = new Discord.MessageEmbed()
            .setColor('#ff0000')
            .setTitle('𝕊𝔼ℝ𝕍𝔼ℝ 𝕀𝕊 𝕆ℕ𝕃𝕀ℕ𝔼')
            .setThumbnail(image)
            .setDescription(ip)
            .addField(`Players:`, `${state.raw.clients}/${state.maxplayers}`)
        message.channel.send(status)
        console.log(state)
    }).catch((error) => {
        const status1 = new Discord.MessageEmbed()
            .setColor('#00FF00')
            .setTitle('𝕊𝔼ℝ𝕍𝔼ℝ 𝕀𝕊 𝕆𝔽𝔽𝕃𝕀ℕ𝔼')
        message.channel.send(status1)
        console.log(error);
    });
    }
});

//----------------
//DIRECT MESSAGES
//----------------

client.on('message', message =>{
    if (message.channel.type == 'dm') {
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'help'){
        message.channel.send('Use !ip');
    }
    return;

    }
});

client.on('message', async message => {
    if (message.channel.type == 'dm') {
      if(!message.content.startsWith(prefix) || message.author.bot) return;
   
      const args = message.content.slice(prefix.length).split(/ +/);
      const command = args.shift().toLowerCase();
   
      if(command === 'ip'){
          message.channel.send('Soon');
      }
      return;

    }
  });

  client.on('message', async message => {
    if (message.channel.type == 'dm') {
      if(!message.content.startsWith(prefix) || message.author.bot) return;
   
      const args = message.content.slice(prefix.length).split(/ +/);
      const command = args.shift().toLowerCase();
      const ping = new Discord.MessageEmbed()

      .setDescription(`🏓\`${client.ws.ping}\`ms`)
   
      if(command === 'ping'){
        message.channel.send(ping);
      }
      return;
    }
  });


client.on('message', async message => {
    if (message.channel.type == 'dm') {
      if(!message.content.startsWith(prefix) || message.author.bot) return;
   
      const args = message.content.slice(prefix.length).split(/ +/);
      const command = args.shift().toLowerCase();
   
      if(command === 'status'){
        const Gamedig = require('gamedig');
        Gamedig.query({
            type: 'fivem',
            host: '54.39.95.165',
            port: '30120'
        }).then((state) => {
            const status = new Discord.MessageEmbed()
                .setColor('#ff0000')
                .setTitle('𝕊𝔼ℝ𝕍𝔼ℝ 𝕀𝕊 𝕆ℕ𝕃𝕀ℕ𝔼')
                .setThumbnail('https://telecomstechnews.com/wp-content/uploads/sites/7/2020/06/anonymous-hacking-george-floyd-security-ddos-minneapolis-police-usa-protests.jpg')
                .setDescription(`**IP: SERVER-IP**`)
                .addField(`Players:`, `${state.raw.clients}/${state.maxplayers}`)
            message.channel.send(status)
            console.log(state)
        }).catch((error) => {
            const status1 = new Discord.MessageEmbed()
                .setColor('#00FF00')
                .setTitle('𝕊𝔼ℝ𝕍𝔼ℝ 𝕀𝕊 𝕆𝔽𝔽𝕃𝕀ℕ𝔼')
            message.channel.send(status1)
            console.log(error);
        });
        }
        return;
    }
});

client.on('message', async message => {
    if (message.channel.type == 'dm') {
    
    let user = client.users.cache.get(message.author.id)
    const args = message.content.slice(prefix.length).split(/ +/);
    let text = message.content.slice('!respond'.length);
    const command = args.shift().toLowerCase();  
    client.channels.cache.get('814236618142515260').send(message.content);
    if(command === 'respond'){
        client.users.cache.get(user).send(text);
      }
    return;
    }
  });
}