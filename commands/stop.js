const Command = require('./command');

module.exports = class Stop extends Command{

    static match(message){
        return message.content.startsWith('!giloustop') || message.content.startsWith('!gstop')
    }


    static action(message){
        let voiceChannel = message.member.voice.channel;
        voiceChannel.leave();
    }
}