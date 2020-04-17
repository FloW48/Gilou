const Discord = require('discord.js');
const Command = require('./command');

module.exports = class Help extends Command{
    static match(message){
        return message.content.startsWith('!ghelp')
    }

    static action(message){
        console.log('get called kiddo')
        const embed = new Discord.RichEmbed();
        embed.setTitle('Besoin d\'aide ? Gilou est là pour ça !');
        embed.setColor('#ff33cc');
        embed.setDescription('!gplay + Mots Clés ou Lien ```Effectue une recherche sur YouTube en cas de mots clés, et séléctionne le premier résultat.\nSi vous entrez un lien de vidéo, le son sera joué, si vous entrez un lien de playlist, toutes les musiques seront ajoutées à la file d\'attente``` \n\n !gskip : ```Passe à la musique suivante``` \n\n !gnp ```Donne le nom de la musique qui se joue actuellement```\n\n !gstop : ```Déconnecte Gilou et enlève toutes les belles chansons qu\'il voulait jouer de la file d\'attente```')
        message.channel.send(embed);
    }
}