const Discord = require('discord.js');
const bot = new Discord.Client();
const Play = require('./commands/play');
const Help = require('./commands/help')
const Fnatic = require('./commands/fnatic')

const Twit = require('twit')
const T = new Twit({
    consumer_key:         'sJErGHIEZ3J7pX5wuIBUFXeGH',
    consumer_secret:      'cZYXecVPiLCa0v2Edd8UCI5SkUVSvyMenzMWbh9o8HMr3eJDk2',
    access_token:         '1288092472695037952-aVSc9VcQ2guQCpnvsLlBOw35mjVPfu',
    access_token_secret:  'uvbYSS7445sVzhyCKDpoMrjhiZ86IIUJhBQaVtsLVle9r',
  })



var millisecondsToWait = 10000;
var d;
var oldHour = -1;
var hour = -1;
var dateToInge = new Date(2024, 6, 1);
var dateToPrism = new Date(2020, 7, 31);


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
        day = d.getDay();
        hour = d.getHours();
        alvityl();
        day_to_ingenieur();
        prism();
        oldHour = hour;
        timer();
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
            let diffTime = Math.abs(dateToInge - d);
            let diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));      
            console.log("yikes")  
            T.post('statuses/update', { status: 'Chers futurs ingénieurs, il vous reste plus que '+diffDays+' jours avant la fin, c\'est bientôt'})
        }
    }
}
function prism(){
    if(day == 1){
        if(hour == 6 && oldHour != hour){
            let diffTime = Math.abs(dateToPrism - d);
            let diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
            bot.channels.fetch('210094361428492289').then(channel =>{
                channel.send("<@202103842974859264> Encore **__"+ diffDays+ "__** jours pour faire 10k€ avec PRISM et la formation !!")
            })
        }
    }
}
