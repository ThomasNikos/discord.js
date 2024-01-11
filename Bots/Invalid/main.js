const { token, prefix, CHANNEL, SERVER, STATUS, LIVE } = require("./commands/config.json");
const Discord = require('discord.js');
const client = new Discord.Client();
const config = require("./commands/config.json");
const ytdl = require('ytdl-core');
const mongoose = require('mongoose');
const { ReactionRoleManager } = require('discord.js-collector')
const { readdirSync } = require('fs');
const { join } = require('path');
const Enmap = require("enmap");

client.settings = new Enmap({
name: "settings",
fetchAll: false,
autoFetch: true,
cloneLevel: 'deep',
autoEnsure: {
  prefix: "!",
  modLogChannel: "logs",
  modRole: "Moderator",
  adminRole: "Administrator",
  darkchat: "darkchat",
  instagram: "instagram",
  vehicle: "vehicle",
  suggestions: "suggestions",
  polls: "polls",
  ip: "ip",
  port: "port",
  thumbnail: "image",
  welcomeChannel: "Welcome",
  welcomeMessage: "Say hello to {{user}}, everyone!"
}
});

client.tags = new Enmap({ name: "tags" });

client.on("message", message => {
  const guildSettings = client.settings.get(message.guild.id);
});

client.on("guildDelete", guild => {
  // When the bot leaves or is kicked, delete settings to prevent stale entries.
  client.settings.delete(guild.id);
});

client.on("guildMemberAdd", member => {
  // This executes when a member joins, so let's welcome them!

  // First, ensure the settings exist
  client.settings.ensure(member.guild.id, defaultSettings);

  // First, get the welcome message using get: 
  let welcomeMessage = client.settings.get(member.guild.id, "welcomeMessage");

  // Our welcome message has a bit of a placeholder, let's fix that:
  welcomeMessage = welcomeMessage.replace("{{user}}", member.user.tag)

  // we'll send to the welcome channel.
  member.guild.channels.cache
    .find(channel => channel.name === client.settings.get(member.guild.id, "welcomeChannel"))
    .send(welcomeMessage)
    .catch(console.error);
});

client.on("message", async (message) => {
  // This stops if it's not a guild (obviously), and we ignore all bots.
  // Pretty standard for any bot.
  if(!message.guild || message.author.bot) return;

  // We get the value, and autoEnsure guarantees we have a value already.
  const guildConf = client.settings.get(message.guild.id);

  // Now we can use the values! We stop processing if the message does not
  // start with our prefix for this guild.
  if(message.content.indexOf(guildConf.prefix) !== 0) return;

  //Then we use the config prefix to get our arguments and command:
  const args = message.content.split(/\s+/g);
  const command = args.shift().slice(guildConf.prefix.length).toLowerCase();

  // Commands Go Here
  if(command === "setconf") {
    // Command is admin only, let's grab the admin value: 
    const adminRole = message.guild.roles.cache.find(role => role.name === guildConf.adminRole);
    if(!adminRole) return message.reply("Administrator Role Not Found");

    // Then we'll exit if the user is not admin
    if(!message.member.roles.cache.has(adminRole.id)) {
      return message.reply("You're not an admin, sorry!");
    }

    // Let's get our key and value from the arguments. 
    // This is array destructuring, by the way. 
    const [prop, ...value] = args;
    // Example: 
    // prop: "prefix"
    // value: ["+"]
    // (yes it's an array, we join it further down!)

    // We can check that the key exists to avoid having multiple useless, 
    // unused keys in the config:
    if(!client.settings.has(message.guild.id, prop)) {
      return message.reply("This key is not in the configuration.");
    }

    // Now we can finally change the value. Here we only have strings for values 
    // so we won't bother trying to make sure it's the right type and such. 
    client.settings.set(message.guild.id, value.join(" "), prop);

    // We can confirm everything's done to the client.
    message.channel.send(`Guild configuration item ${prop} has been changed to:\n\`${value.join(" ")}\``);
  }

  if(command === "showconf") {
    let configProps = Object.keys(guildConf).map(prop => {
      return `${prop}  :  ${guildConf[prop]}`;
    });
    message.channel.send(`> **The following are the server's current configuration:**
    \`\`\`${configProps.join("\n")}\`\`\``);
  }
});

client.commands= new Discord.Collection();

const commandFiles = readdirSync(join(__dirname, "commands")).filter(file => file.endsWith(".js"));

for (const file of commandFiles) {
    const command = require(join(__dirname, "commands", `${file}`));
    client.commands.set(command.name, command);
}

let stats = {
  serverID: '<ID>',
  total: "<ID>",
  member: "<ID>",
  bots: "<ID>"
}

client.on('guildMemberAdd', member => {
  if(member.guild.id !== stats.serverID) return;
  client.channels.cache.get(stats.total).setName(`Total Users: ${member.guild.memberCount}`);
  client.channels.cache.get(stats.member).setName(`Members: ${member.guild.members.cache.filter(m => !m.user.bot).size}`);
  client.channels.cache.get(stats.bots).setName(`Bots: ${member.guild.members.cache.filter(m => m.user.bot).size}`);
})

client.on('guildMemberRemove', member => {
  if(member.guild.id !== stats.serverID) return;
  client.channels.cache.get(stats.total).setName(`Total Users: ${member.guild.memberCount}`);
  client.channels.cache.get(stats.member).setName(`Members: ${member.guild.members.cache.filter(m => !m.user.bot).size}`);
  client.channels.cache.get(stats.bots).setName(`Bots: ${member.guild.members.cache.filter(m => m.user.bot).size}`);
})

client.on("message", async message => {

  if(message.author.bot) return;
  if(message.channel.type === 'dm') return;

  if(message.content.startsWith(prefix)) {
      const args = message.content.slice(prefix.length).trim().split(/ +/);

      const command = args.shift().toLowerCase();

      if(!client.commands.has(command)) return;


      try {
          client.commands.get(command).run(client, message, args);

      } catch (error){
          console.error(error);
      }
  }
})

const jointocreate = require("./commands/jointocreate");
jointocreate(client);
const autoreact = require("./commands/autoreact");
autoreact(client);
const chats = require("./commands/chats.js");
chats(client);
const count = require("./commands/count.js");
count(client);
const commands = require("./commands/commands.js"); 
commands(client);
const autorole = require("./commands/autorole.js");
autorole(client);
const music = require("./commands/music.js");
music(client);
const clock = require("./commands/clock.js");
clock(client);

client.login(token);