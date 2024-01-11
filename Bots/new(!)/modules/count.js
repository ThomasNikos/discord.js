const Discord = require('discord.js');
const client = new Discord.Client();
const config = require("./config.json");

module.exports = function (client) {
    const description = {
        name: "count",
        filename: "count.js",
        version: "1.0"
    }
    
client.on("ready", () => {
  console.log("Count ready!");
});    
    
// Stores the current count.
let count = 0
// Stores the timeout used to make the bot count if nobody else counts for a set period of
// time.
let timeout

client.on('message', ({channel, content, member}) => {
  // Only do this for the counting channel of course
  // If you want to simply make this work for all channels called 'counting', you
  // could use this line:
  if (client.channels.cache.filter(c => c.name === '◾𝐂𝐨𝐮𝐧𝐭').keyArray().includes(channel.id)){
    //if (channel.id === '807323428163289139') {
    // You can ignore all bot messages like this
    if (member.user.bot) return
    // If the message is the current count + 1...
    if (Number(content) === count + 1) {
      // ...increase the count
      count++
      // Remove any existing timeout to count
      if (timeout) client.clearTimeout(timeout)
      // Add a new timeout
      timeout = client.setTimeout(
        // This will make the bot count and log all errors
        () => channel.send(++count).catch(console.error),
        // after 30 seconds
        30000
      )
    // If the message wasn't sent by the bot...
    } else if (member.id !== client.user.id) {
      // ...send a message because the person stuffed up the counting (and log all errors)
      channel.send(`${member} messed up!`).catch(console.error)
      // Reset the count
      count = 0
      // Reset any existing timeout because the bot has counted so it doesn't need to
      // count again
      if (timeout) client.clearTimeout(timeout)
    }
  }
});
}