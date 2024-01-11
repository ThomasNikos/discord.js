const config = require("./config");
   
module.exports = function (client) {
    const description = {
        name: "autoreact",
        filename: "autoreact.js",
        version: "final"
    }
    
client.on("ready", () => {
  console.log("Autoreact ready!");
});  
    
    client.on("message", message=>{
    const ch = client.settings.get(message.guild.id, "vehicle")
    if(message.channel.name === ch){
                   message.react("☑️")
	    	   message.react("❎")
    }
});

    client.on("message", message=>{
    const su = client.settings.get(message.guild.id, "suggestions")
    if(message.channel.name === su){
                   message.react("☑️")
	    	   message.react("❎")
    }
});

    client.on("message", message=>{
    const po = client.settings.get(message.guild.id, "polls")
    if(message.channel.name === po){
                   message.react("☑️")
	    	   message.react("❎")
    }
});

    client.on("message", message=>{
    const insta = client.settings.get(message.guild.id, "instagram")
    if(message.channel.name === insta){
                   message.react("❤️")
    }
});
}