const { token, prefix, CHANNEL, CHANNEL1, SERVER, SERVER1, STATUS, LIVE } = require("./config.json");
const Discord = require('discord.js');
const client = new Discord.Client();
const config = require("./config.json");
const ytdl = require('ytdl-core');

module.exports = function (client) {
    const description = {
        name: "music",
        filename: "music.js",
        version: "final"
    }

client.on("ready", () => {
  console.log("Music ready!");
});

client.on('ready', async () => {
    client.user.setActivity(`${client.guilds.cache.size} servers`, { type: 'WATCHING' })
    let channel = client.channels.cache.get(CHANNEL) || await client.channels.fetch(CHANNEL)
  
    if(!channel) return;
    const connection = await channel.join();
    connection.play(ytdl(LIVE))
  })
  
  setInterval(async function() {
    if(!client.voice.connections.get(SERVER)) {
      let channel = client.channels.cache.get(CHANNEL) || await client.channels.fetch(CHANNEL)
      if(!channel) return;
  
      const connection = await channel.join()
      connection.play(ytdl(LIVE))
    }
  }, 20000)
  
    setInterval(async function() {
    if(!client.voice.connections.get(SERVER1)) {
      let channel = client.channels.cache.get(CHANNEL1) || await client.channels.fetch(CHANNEL)
      if(!channel) return;
  
      const connection = await channel.join()
      connection.play(ytdl(LIVE))
    }
  }, 20000)
}