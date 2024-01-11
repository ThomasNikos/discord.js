const mongoose = require('mongoose');

const guildSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    guildID: String,
    guildName: String,
    prefix: String,
    logChannelID: String,
    dark: String,
    insta: String,
    suggestions: String,
    vehiclesuggest: String,
    polls: String,
    music: String
});

module.exports = mongoose.model('Guild', guildSchema, 'guild_settings');