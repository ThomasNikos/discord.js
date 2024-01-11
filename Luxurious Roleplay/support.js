const config = require("./config");
const supmap = new Map();
module.exports = function (client) {
    const description = {
        name: "sup",
        filename: "support.js",
        version: "3.2"
    }
//log that the module is loaded
    console.log(` :: ⬜️ Module: Support Chat Enchanced, Invalid `)
//voice state update event to check joining/leaving channels
    client.on("voiceStateUpdate", (oldState, newState) => {
  // SET CHANNEL NAME STRING
  //IGNORE BUT DONT DELETE!
  let oldparentname = "unknown"
  let oldchannelname = "unknown"
  let oldchanelid = "unknown"
  if (oldState && oldState.channel && oldState.channel.parent && oldState.channel.parent.name) oldparentname = oldState.channel.parent.name
  if (oldState && oldState.channel && oldState.channel.name) oldchannelname = oldState.channel.name
  if (oldState && oldState.channelID) oldchanelid = oldState.channelID
  let newparentname = "unknown"
  let newchannelname = "unknown"
  let newchanelid = "unknown"
  if (newState && newState.channel && newState.channel.parent && newState.channel.parent.name) newparentname = newState.channel.parent.name
  if (newState && newState.channel && newState.channel.name) newchannelname = newState.channel.name
  if (newState && newState.channelID) newchanelid = newState.channelID
  if (oldState.channelID) {
      if (typeof oldState.channel.parent !== "undefined")  oldChannelName = `${oldparentname}\n\t**${oldchannelname}**\n*${oldchanelid}*`
       else  oldChannelName = `-\n\t**${oldparentname}**\n*${oldchanelid}*`
  }
  if (newState.channelID) {
      if (typeof newState.channel.parent !== "undefined") newChannelName = `${newparentname}\n\t**${newchannelname}**\n*${newchanelid}*`
      else newChannelName = `-\n\t**${newchannelname}**\n*${newchanelid}*`
  }
  // JOINED V12
  if (!oldState.channelID && newState.channelID) {
    if(newState.channelID !== config.SUP) return;  //if its not the jointocreatechannel skip
    jointocreatechannel(newState);   //load the function
  }
  // LEFT V12
  if (oldState.channelID && !newState.channelID) {
            //get the jointocreatechannel id from the map
          if (supmap.get(`tempvoicechannel_${oldState.guild.id}_${oldState.channelID}`)) {
            //fetch it from the guild
            var vc = oldState.guild.channels.cache.get(supmap.get(`tempvoicechannel_${oldState.guild.id}_${oldState.channelID}`));
            //if the channel size is below one
            if (vc.members.size < 1) { 
              //delete it from the map
              supmap.delete(`tempvoicechannel_${oldState.guild.id}_${oldState.channelID}`); 
              //log that it is deleted
              console.log(" :: " + oldState.member.user.username + "#" + oldState.member.user.discriminator + " :: Deleted Room")
              //delete the voice channel
              return vc.delete(); 
          }
            else {
            }
          }
  }
  // Switch v12
  if (oldState.channelID && newState.channelID) {
  
    if (oldState.channelID !== newState.channelID) {
      //if its the join to create channel
      if(newState.channelID===config.SUP) 
      //make a new channel
      jointocreatechannel(oldState);  
      //BUT if its also a channel ín the map (temp voice channel)
      if (supmap.get(`tempvoicechannel_${oldState.guild.id}_${oldState.channelID}`)) {
        //fetch the channel
        var vc = oldState.guild.channels.cache.get(supmap.get(`tempvoicechannel_${oldState.guild.id}_${oldState.channelID}`));
        //if the size is under 1
        if (vc.members.size < 1) { 
          //delete it from the map
          supmap.delete(`tempvoicechannel_${oldState.guild.id}_${oldState.channelID}`); 
         //log it 
          console.log(" :: " + oldState.member.user.username + "#" + oldState.member.user.discriminator + " :: Deleted Room")
        //delete the room
          return vc.delete(); 
      }
      else {
      }
      }
    }
}
  })
    async function jointocreatechannel(user) {
      //log it 
      client.channels.cache.get(`850295679170379836`).send("Ένας <@&829648280551686164> να εξυπηρετήσει τον/την " + user.member.user.username + "#" + user.member.user.discriminator + " στο 📞𝐖𝐚𝐢𝐭𝐢𝐧𝐠 𝐟𝐨𝐫 𝐒𝐮𝐩𝐩𝐨𝐫𝐭")
      console.log(" :: " + user.member.user.username + "#" + user.member.user.discriminator + " :: Created a SUP Room")
      //user.member.user.send("This can be used to message the member that a new room was created")
      await user.guild.channels.create(`📞𝐒𝐮𝐩𝐩𝐨𝐫𝐭 𝐑𝐨𝐨𝐦`, {
        type: 'voice',
        parent: "829671343074705429", //or set it as a category id
      }).then(async vc => {
        //move user to the new channel
        user.setChannel(vc);
        //set the new channel to the map
        supmap.set(`tempvoicechannel_${vc.guild.id}_${vc.id}`, vc.id);
        //change the permissions of the channel
        await vc.overwritePermissions([
          {
            id: user.id,
            allow: ['MANAGE_CHANNELS'],
          },
          {
            id: user.guild.id,
            deny: ['VIEW_CHANNEL'],
          },
          {
            id: "829648280551686164",
            allow: ['VIEW_CHANNEL'],
          },
        ]);
      })
    }
}
