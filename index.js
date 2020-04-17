const Discord = require('discord.js');
const bot = new Discord.Client();
const Play = require('./commands/play');
const Help = require('./commands/help')

bot.on('ready', function(){
    bot.user.setActivity("!ghelp pour les commandes").catch(console.error);
})


bot.on('message', function (message){
    let commandUsed =   Stop.parse(message) ||
                        Play.parse(message) ||
                        Help.parse(message);
})

bot.login('NTk2MzM4MDA5MDc1NjEzNzAz.Xpgg4A.ojXFJNxS0oZGywzHkoHtpypLbPo')
    .catch(console.error);