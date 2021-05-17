const aram = require("./models/aram");
const mongoose = require('mongoose');
const Discord = require('discord.js');

module.exports = {
    name: "addwin",
    description: "adds wins to your profile",
    aliases: ["awin", "w", "win", "wins"],

    async execute(message, args) {

        // const user = await aram.findOne({
        //     userID: message.author.id
        // });
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

                newUser.save(function (err, db) {
                    if (err) console.log(err);
                    if (args.length < 1) {return message.reply('How many Wins?')}
                    else {
                        const wins = parseInt(args[0]);


                        aram.findOne({ userID: message.author.id }, (err, db) => {
                            if (err) console.log(err);
                            if (isNaN(wins)) return message.reply('use a Number baka!');

                                if (wins == '3') {
                                    db.win = parseInt(db.win) + wins;
                                    db.threewin = parseInt(db.threewin) + 1;
                                    db.lp = parseInt(db.lp) + wins * 20 + 30;
                                    db.save().catch(err => console.error(err));
                                } else if (wins == '6') {
                                    db.win = parseInt(db.win) + wins;
                                    db.sixwin = parseInt(db.sixwin) + 1;
                                    db.lp = parseInt(db.lp) + wins * 20 + 50;
                                    db.save().catch(err => console.error(err));
                                } else if (wins == '10') {
                                    db.win = parseInt(db.win) + wins;
                                    db.tenwin = parseInt(db.tenwin) + 1;
                                    db.lp = parseInt(db.lp) + wins * 20 + 75;
                                    db.save().catch(err => console.error(err));
                                } else {
                                db.win = parseInt(db.win) + wins;
                                db.lp = parseInt(db.lp) + wins * 20;
                                db.save().catch(err => console.error(err));
                                }
                            
                            
                            
                            message.channel.send(`Added ${wins} Wins to your profile`)
                
                        })
                    }

                                    }), message.channel.send(new Discord.MessageEmbed().setDescription('Seems like this is your first time using me, it\'s ok sweetie I Added your profile to my database ;)\n Now you can use this command again<3').setTimestamp());

            } else if (countDocuments !== '0') {
                if (args.length < 1) {return message.reply('How many Wins?')}
                else {

        const wins = parseInt(args[0]);


        aram.findOne({ userID: message.author.id }, (err, db) => {
            if (err) console.log(err);

                if (isNaN(wins)) return message.reply('use a Number baka!');

                if (wins == '3') {
                    db.win = parseInt(db.win) + wins;
                    db.threewin = parseInt(db.threewin) + 1;
                    db.lp = parseInt(db.lp) + wins * 20 + 30;
                    db.save().catch(err => console.error(err));
                } else if (wins == '6') {
                    db.win = parseInt(db.win) + wins;
                    db.sixwin = parseInt(db.sixwin) + 1;
                    db.lp = parseInt(db.lp) + wins * 20 + 50;
                    db.save().catch(err => console.error(err));
                } else if (wins == '10') {
                    db.win = parseInt(db.win) + wins;
                    db.tenwin = parseInt(db.tenwin) + 1;
                    db.lp = parseInt(db.lp) + wins * 20 + 75;
                    db.save().catch(err => console.error(err));
                } else {
                db.win = parseInt(db.win) + wins;
                db.lp = parseInt(db.lp) + wins * 20;
                db.save().catch(err => console.error(err));
                }
            
            
            
            message.channel.send(`Added ${wins} Wins to your profile`)

        })
    }
}
})
    },
};