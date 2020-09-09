const Command = require('./command');

var gif = "https://tenor.com/view/they-dont-stop-coming-rap-all-star-gif-14395546";

module.exports = class ChangeGif extends Command{

    static match(message){
        if(message.content.startsWith("!changegif") || message.content.startsWith("!cg")){
            var args = message.content.split(' ');
            var gifUrl = args[1];
            if(gifUrl.includes('tenor') || gifUrl.includes("giphy")){
                gif = gifUrl;
                message.channel.send("**Gif d'ingénieur changé**")
                message.delete()
            }
            else{
                message.channel.send("**Ce n'est pas un gif ça monsieur**")
            }
        }
    }
    
    static getGif(){
        return gif;
    }

}

function showAndDeleteMessage(message, str){
    message.channel.send(str)
    .then((messageToDel) => {
        messageToDel.delete({timeout: 1000});
    });
}

