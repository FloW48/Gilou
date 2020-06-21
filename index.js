const Discord = require('discord.js');
const bot = new Discord.Client();
const Play = require('./commands/play');
const Help = require('./commands/help')
const Fnatic = require('./commands/fnatic')


var millisecondsToWait = 10000;
var d;
var oldHour = -1;
var hour = -1;
var dateToInge = new Date(2024, 6, 1);


bot.on('ready', function(){
    bot.user.setActivity("!ghelp pour les commandes").catch(console.error);
    timer()
})

bot.on('message', function (message){
    let commandUsed =   Play.parse(message) ||
                        Help.parse(message) ||
                        Fnatic.parse(message);
})

bot.login('NTk2MzM4MDA5MDc1NjEzNzAz.Xpgg4A.ojXFJNxS0oZGywzHkoHtpypLbPo')
    .catch(console.error);


function timer(){
    setTimeout(function() {
        d = new Date();
        hour = d.getHours()
        alvityl()
        day_to_ingenieur()
        oldHour = hour
        timer()
        return
    }, millisecondsToWait)
}

function alvityl(){
    if(hour >= 20 || hour <= 6){
        if(oldHour != hour){
            Play.playActivyl(bot)
        }
    }
}

function day_to_ingenieur(){
    if(hour == 6){
        if(oldHour != hour){
            const diffTime = Math.abs(dateToInge - d);
            const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
            console.log(diffDays);
            channel = bot.channels.fetch('210094361428492289').then(channel =>{
                channel.send("<@256054054260572161> <@202170302401085440> <@266220917791653889> Il vous reste **__"+ diffDays+ "__** jours avant de devenir ingé !!")
            })
        }
    }
}
