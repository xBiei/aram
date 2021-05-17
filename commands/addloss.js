const aram = require("./models/aram");
const mongoose = require('mongoose');
const Discord = require('discord.js');

module.exports = {
    name: "addloss",
    description: "adds losses to your profile",
    aliases: ["aloss", "loss", "losses"],

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
                    if (args.length < 1) {return message.reply('How many Losses?')}
                    else {
    
    
            const losses = parseInt(args[0]);
                        if (losses == NaN) return message.reply('use a Number baka!');

            aram.findOne({ userID: message.author.id }, (err, db) => {
                if (err) console.log(err);
                if (isNaN(losses)) return message.reply('use a Number baka!');

                    if (losses == '3') {
                        db.loss = parseInt(db.loss) + losses;
                        db.threeloss = parseInt(db.threeloss) + 1;
                        db.lp = parseInt(db.lp) - losses * 20 - 20;
                        db.save().catch(err => console.error(err));
                    } else if (losses == '6') {
                        db.loss = parseInt(db.loss) + losses;
                        db.sixloss = parseInt(db.sixloss) + 1;
                        db.lp = parseInt(db.lp) - losses * 20 - 40;
                        db.save().catch(err => console.error(err));
                    } else {
                    db.loss = parseInt(db.loss) + losses;
                    db.lp = parseInt(db.lp) - losses * 20;
                    db.save().catch(err => console.error(err));
                    }
                
                message.channel.send(`Added ${losses} losses to your profile`)
    
            })
        }
    

                }), message.channel.send(new Discord.MessageEmbed().setDescription('Seems like this is your first time using me, it\'s ok sweetie I Added your profile to my database ;)\n Now I can be useful to you oniichan<3').setTimestamp());
                

            } else if (countDocuments !== '0') {
                if (args.length < 1) {return message.reply('How many Losses?')}
                else {


        const losses = parseInt(args[0]);


        aram.findOne({ userID: message.author.id }, (err, db) => {
            if (err) console.log(err);
            if (isNaN(losses)) return message.reply('use a Number baka!');

                if (losses == '3') {
                    db.loss = parseInt(db.loss) + losses;
                    db.threeloss = parseInt(db.threeloss) + 1;
                    db.lp = parseInt(db.lp) - losses * 20 - 20;
                    db.save().catch(err => console.error(err));
                } else if (losses == '6') {
                    db.loss = parseInt(db.loss) + losses;
                    db.sixloss = parseInt(db.sixloss) + 1;
                    db.lp = parseInt(db.lp) - losses * 20 - 40;
                    db.save().catch(err => console.error(err));
                } else {
                db.loss = parseInt(db.loss) + losses;
                db.lp = parseInt(db.lp) - losses * 20;
                db.save().catch(err => console.error(err));
                }
            
            message.channel.send(`Added ${losses} losses to your profile`)

        })
    }
}
})
    },
};