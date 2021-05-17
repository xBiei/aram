const { token } = require('../config.json');
const Discord = require('discord.js');
const client = new Discord.Client();

module.exports = {
    name: "restart",
    description: "Restarts the bot!",
    aliases: [""],

    async execute(message, args) {

        try {
            if (!isBotOwner) return message.reply('You\'re not my master');
            const embed = new Discord.MessageEmbed()
            .setDescription(`Restarted ايها الشاطئ`);
            message.channel.send(embed)
            .then(() => client.destroy())
            .then(() => client.login(token));
        } catch (err) {
            message.channel.send(`ERROR: ${err.message}`)
        }

    },
};