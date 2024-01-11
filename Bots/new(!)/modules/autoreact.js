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
    if(message.channel.name === '🚙𝐕𝐞𝐡𝐢𝐜𝐥𝐞-𝐒𝐮𝐠𝐠𝐞𝐬𝐭𝐢𝐨𝐧𝐬'){
                   message.react("☑️")
	    	   message.react("❎")
    }
});

    client.on("message", message=>{
    if(message.channel.name === '👊𝐒𝐮𝐠𝐠𝐞𝐬𝐭𝐢𝐨𝐧𝐬'){
                   message.react("☑️")
	    	   message.react("❎")
    }
});

    client.on("message", message=>{
    if(message.channel.name === '🔍𝐏𝐨𝐥𝐥𝐬'){
                   message.react("☑️")
	    	   message.react("❎")
    }
});

    client.on("message", message=>{
    if(message.channel.name === '📷𝐈𝐧𝐬𝐭𝐚𝐠𝐫𝐚𝐦'){
                   message.react("❤️")
    }
});
}