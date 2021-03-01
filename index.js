const Discord = require('discord.js');
const bot = new Discord.Client();
const Play = require('./commands/play');
const Help = require('./commands/help')
const Fnatic = require('./commands/fnatic')
const Gif = require('./commands/gif')

const Twit = require('twit')
const T = new Twit({
    consumer_key:         'token',
    consumer_secret:      'tekken',
    access_token:         'tetris',
    access_token_secret:  'lulz',
  })



var millisecondsToWait = 10000;
var d;
var oldHour = -1;
var hour = -1;
var year = new Date().getFullYear();
var dateToIngeButitIsFix = new Date(2024, 6, 1)
var dateToInge = new Date(year+5, 6, 1);

bot.on('ready', function(){
    bot.user.setActivity("!ghelp pour les commandes").catch(console.error);
    timer()
})

bot.on('message', function (message){
    let commandUsed =   Fnatic.parse(message, bot) ||
                        //Play.parse(message, bot) ||
                        Gif.parse(message, bot) ||
                        Help.parse(message, bot);
})

bot.login('token')
    .catch(console.error);


function timer(){
    setTimeout(function() {
        d = new Date();
        day = d.getDay();
        hour = d.getHours();
        year = d.getFullYear();
        //alvityl();
        day_to_ingenieur();
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
    if(hour == 5){
        if(oldHour != hour){
            let diffTime = Math.abs(dateToIngeButitIsFix - d);
            let diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));  
            T.post('statuses/update', { status: createMessage()})
            bot.channels.fetch('210094361428492289').then(channel => {
                channel.send("<@266220917791653889>, <@202170302401085440>, <@233317429961424897> et <@256054054260572161>, il vous reste "+diffDays+" jours avant de devenir de grands ingénieurs ")
                channel.send(Gif.getGif())
            })
        }
    }
}

function createMessage(){
    /*Chers futurs ingénieurs,

1er année : plus que 1765 jours Plant
▓▓▓▓▓ 35%

2e année : plus que 1582 jours Étincelles
▓▓▓▓▓ 10%

3e année : plus que 1200 jours Symbole étourdi
▓▓▓▓▓ 34%

4e année : plus que 850 jours Feu
▓▓▓▓▓ 39%

Dernière année : plus que 250 jours Bombe de table
▓▓▓▓▓ 100%*/

    // let date1 = new Date(year, 8, 1)
    // let date2 = new Date(year+1, 8, 1)
    // let date3 = new Date(year+2, 8, 1)
    // let date4 = new Date(year+3, 8, 1)
    // let date5 = new Date(year+4, 8, 1)

    // let msg = "Chers futurs ingénieurs,\n\n1er année : "+Math.ceil((dateToInge-d)/(1000 * 60 * 60 * 24))+" jours 🌱"
    // +"\n\n2e année : "+Math.ceil((dateToInge-date2-(d-date1))/(1000 * 60 * 60 * 24))+" jours ✨"
    // +"\n\n3e année : "+Math.ceil((dateToInge-date3-(d-date1))/(1000 * 60 * 60 * 24))+" jours 💫"
    // +"\n\n4e année : "+Math.ceil((dateToInge-date4-(d-date1))/(1000 * 60 * 60 * 24))+" jours 🔥"
    // +"\n\nDernière année : "+Math.ceil((dateToInge-date5-(d-date1))/(1000 * 60 * 60 * 24))+" jours 🎉"

    return msg;

}
