const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    client.user.setActivity('apprendre le JS');
});

var prefix = config.prefix
client.on('message', message => {

    const ping = require('./cmds/ping.js');
    ping(message, client, prefix);

});

client.login(config.token);