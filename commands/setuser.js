const mongoose = require('mongoose');
const aram = require("./models/aram");
const Discord = require('discord.js');


module.exports = {
    name: "setuser",
    description: "sets your League of Legends username to your profile",
    aliases: ["username", "name"],

     execute(message, args) {
        aram.countDocuments({ userID: message.author.id }, function (err, countDocuments) {
            if (err) console.log(err);
            if (countDocuments == '0') {
                const newUser = new aram({
                    _id: new mongoose.Types.ObjectId(),
                    userID: message.author.id,
                    loluser: 'no user set',
                    win: 0,
                    loss: 0,
                    threewin: 0,
                    sixwin: 0,
                    tenwin: 0,
                    threeloss: 0,
                    sixloss: 0,
                    lp: 0,
                    lastUpdated: new Date(),
                });

                newUser.save().catch(err => console.log(err)), message.channel.send(new Discord.MessageEmbed().setDescription('Seems like this is your first time using me, it\'s ok sweetie I Added your profile to my database ;)\n Now you can use this command again<3').setTimestamp());

            } else if (countDocuments !== '0') {
   
        const name = `${args}`.replace(/,/g, ' ');;
        if (!name) message.channel.send(`Where's The User? lol`)
        else {
        aram.findOne({ userID: message.author.id }, (err, db) => {
            if (err) console.log(err);
                db.loluser = name;
                db.save().catch(err => console.error(err));
            
            message.channel.send(`Changed your League of Legends Username😴`);

        })
    }

}
        
    })
     
}
};