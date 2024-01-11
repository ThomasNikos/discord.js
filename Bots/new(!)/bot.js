const config = require('./config.json');
const Discord = require('discord.js');
const client = new Discord.Client();
const mongoose = require('mongoose');
const fs = require("fs");

const jointocreate = require("./modules/jointocreate");
jointocreate(client);
const autoreact = require("./modules/autoreact");
autoreact(client);
const chats = require("./modules/chats.js");
chats(client);
const count = require("./modules/count.js");
count(client);
const autorole = require("./modules/autorole.js");
autorole(client);
const music = require("./modules/music.js");
music(client);
const clock = require("./modules/clock.js");
clock(client);

client.login(config.bot.token);

mongoose.connect(config.mongoURI,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (error) => error
    ? console.log('Failed to connect to database')
    : console.log('Connected to database'));

module.exports = client;

require('./handlers/event-handler');
require('./dashboard/server');