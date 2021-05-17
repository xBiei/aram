const mongoose = require('mongoose');
const Guild = require('mongoose');

module.exports = async (client, guild) => {
    Guild.findOneAndDelete({
        guildID: message.guild.id
    }, (err, res) => {
        if (err) console.error(err)
        console.log('Left A Server');
    })
};