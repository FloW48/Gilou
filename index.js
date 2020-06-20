const Discord = require('discord.js');
const bot = new Discord.Client();
const Play = require('./commands/play');
const Help = require('./commands/help')
const Fnatic = require('./commands/fnatic')


var millisecondsToWait = 100;
var d;
var oldHour = -1;
var hour = -1;
var dateToInge = new Date(2024, 6, 1);


bot.on('ready', function(){
    bot.user.setActivity("!ghelp pour les commandes").catch(console.error);
    bot.channels.fetch("210094361428492289")  
        .then(channel => 
            setTimeout(function() {
                d = new Date();
                hour = d.getHours()
                alvityl()
                day_to_ingenieur(channel)
            }, millisecondsToWait))
        .catch(console.error);
})

bot.on('message', function (message){
    let commandUsed =   Play.parse(message) ||
                        Help.parse(message) ||
                        Fnatic.parse(message);
})

bot.login('NTk2MzM4MDA5MDc1NjEzNzAz.Xpgg4A.ojXFJNxS0oZGywzHkoHtpypLbPo')
    .catch(console.error);

function alvityl(){
    if(hour >= 20 || hour <= 6){
        if(oldHour != hour){
            Play.playActivyl(bot)
            oldHour = hour
        }
    }
}

function day_to_ingenieur(channel){
    if(hour == 9){
        const diffTime = Math.abs(dateToInge - d);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
        console.log(diffDays);
        channel.send("<@256054054260572161> <@266220917791653889> <@202170302401085440> Il vous reste **__"+ diffDays+ "__** jours avant de devenir ingé !!")
    }
}
