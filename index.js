const Discord = require('discord.js');
const bot = new Discord.Client();
const Play = require('./commands/play');
const Help = require('./commands/help')

var messageActivyl = 

bot.on('ready', function(){
    bot.user.setActivity("!ghelp pour les commandes").catch(console.error);
})


bot.on('message', function (message){
    console.log(message);
    let commandUsed =   Play.parse(message) ||
                        Help.parse(message);
})

bot.login('NTk2MzM4MDA5MDc1NjEzNzAz.Xpgg4A.ojXFJNxS0oZGywzHkoHtpypLbPo')
    .catch(console.error);


var millisecondsToWait = 10000;
var d;
var oldHour = -1;
var hour = -1;
alvityl()

function alvityl(){
    if(hour >= 20 || hour <= 6){
        if(oldHour != hour){
            Play.playActivyl(bot)
            oldHour = hour
        }
    }
    setTimeout(function() {
        d = new Date();
        hour = d.getHours()
        alvityl()
    }, millisecondsToWait);
}
