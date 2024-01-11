const mongoose = require('mongoose');
const Guild = require('../models/guild');

module.exports = async (client, guild) => {
    const darkc = "◾𝐃𝐚𝐫𝐤-𝐂𝐡𝐚𝐭"
    const instac = "📷𝐈𝐧𝐬𝐭𝐚𝐠𝐫𝐚𝐦"
    const vehiclech = '🚙𝐕𝐞𝐡𝐢𝐜𝐥𝐞-𝐒𝐮𝐠𝐠𝐞𝐬𝐭𝐢𝐨𝐧𝐬'
    const suggestch = '👊𝐒𝐮𝐠𝐠𝐞𝐬𝐭𝐢𝐨𝐧𝐬'
    const pollsch = '🔍𝐏𝐨𝐥𝐥𝐬'
    guild = new Guild({
        _id: mongoose.Types.ObjectId(),
        guildID: guild.id,
        guildName: guild.name,
        prefix: process.env.PREFIX,
        dark: darkc,
        insta: instac,
        suggestions: suggestch,
        vehiclesuggest: vehiclech,
        polls: pollsch
    });

    guild.save()
    .then(result => console.log(result))
    .catch(err => console.error(err));

    console.log('I have joined a new server!');
};