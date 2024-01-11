const { token, prefix, CHANNEL, SERVER, STATUS, LIVE } = require("./config.json");
const Discord = require('discord.js');
const client = new Discord.Client();
const config = require("./config.json");
const mongoose = require('mongoose');
const { ReactionRoleManager } = require('discord.js-collector')

module.exports = function (client) {
    const description = {
        name: "autorole",
        filename: "autorole.js",
        version: "final"
    }
    
const reactionRoleManager = new ReactionRoleManager(client, {
    storage: true, 
    path: __dirname + '/roles.json', 
});

reactionRoleManager.on('ready', () => {
    console.log('Reaction Role Manager is ready!');
});

reactionRoleManager.on('reactionRoleAdd', (member, role) => {
    console.log(member.displayName + ' won the role' + role.name)
});

reactionRoleManager.on('reactionRoleRemove', (member, role) => {
    console.log(member.displayName + ' lose the role' + role.name)
});

reactionRoleManager.on('allReactionsRemove', (message) => {
    console.log(`All reactions from message ${message.id} was removed, all roles was taken and reactions roles deleted.`)
});

reactionRoleManager.on('missingRequirements', (type, member, reactionRole) => {
    console.log(`Member '${member.id}' will not win role '${reactionRole.role}', because him hasn't requirement ${type}`);
});

reactionRoleManager.on('missingPermissions', (action, member, roles, reactionRole) => {
    console.log(`Some roles cannot be ${action === 1 ? 'given' : 'taken'} to member \`${member.displayName}\`, because i don't have permissions to manage these roles: ${roles.map(role => `\`${role.name}\``).join(',')}`);
});

client.on("message", async (message) => {
    const client = message.client;
    const args = message.content.split(' ').slice(1);

    if (message.content.startsWith('!X!@#WEDASDRFADFENCRYPTED')) {
        const role = message.mentions.roles.first();
        if (!role)
            return message.reply('You need mention a role').then(m => m.delete({ timeout: 1500 }));

        const emoji = args[1];
        if (!emoji)
            return message.reply('You need use a valid emoji.').then(m => m.delete({ timeout: 1500 }));

        const msg = await message.channel.messages.fetch(args[2] || message.id);
        if (!role)
            return message.reply('Message not found! Wtf...').then(m => m.delete({ timeout: 1500 }));

        reactionRoleManager.createReactionRole({
            message: msg,
            roles: [role],
            emoji,
            type:1
        });
        
        message.reply('Done').then(m => m.delete({ timeout: 1000 }));
    }
    else if (message.content.startsWith('!X!@#$%WEDASDRFADFENCRYPTED')){
        const emoji = args[0];
        if (!emoji)
            return message.reply('You need use a valid emoji.').then(m => m.delete({ timeout: 1500 }));

        const msg = await message.channel.messages.fetch(args[1]);
        if (!msg)
            return message.reply('Message not found! Wtf...').then(m => m.delete({ timeout: 1500 }));

        await reactionRoleManager.deleteReactionRole({message: msg, emoji});
    }
});
}