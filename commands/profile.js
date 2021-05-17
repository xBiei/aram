const mongoose = require('mongoose');
const aram = require('./models/aram.js');
const Discord = require('discord.js');


module.exports = {
    name: "profile",
    description: "Shows Your Statistics...!",
    aliases: ["user"],

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
                newUser.save(function (err, db) {
                    if (err) console.log(err);
                
                                
                    aram.findOne({userID: message.author.id}, function(err, user) {

                        if (err) console.log(err);
    
                        let embed = new Discord.MessageEmbed()
                            .setTitle(`${user.loluser}\'s profile`)
                            .setColor('RANDOM')
                            .setThumbnail(message.author.displayAvatarURL({
                                size: 1024,
                                dynamic: true,
                                format: 'png'
                            }))
                            .addField('W/L', [
                                `◈ Wins: **${user.win}**`,
                                `◈ Losses:**${user.loss}**`,
                                `◈ Total LP: **${user.lp}**`,
                                '\u200b'
                            ])
                            .addField('Streaks', [
                                `◈ 3 Win Streak: **${user.threewin}**`,
                                `◈ 6 Win Streak: **${user.sixwin}**`,
                                `◈ 10 Win Streak: **${user.tenwin}**`,
                                `◈ 3 Losses Streak: **${user.threeloss}**`,
                                `◈ 6 Losses Streak: **${user.sixloss}**`,
                                '\u200b'
                            ])
                            .setTimestamp();
    
                            message.channel.send(embed);
                    });
    
                })
                    , message.channel.send(new Discord.MessageEmbed().setDescription('Seems like this is your first time using me, it\'s ok sweetie I Added your profile to my database ;)\n Now I can be useful to you oniichan<3').setTimestamp());

            } else if (countDocuments !== '0') {
                
                aram.findOne({userID: message.author.id}, function(err, user) {

                    if (err) console.log(err);

                    let embed = new Discord.MessageEmbed()
                        .setTitle(`${user.loluser}\'s profile`)
                        .setColor('RANDOM')
                        .setThumbnail(message.author.displayAvatarURL({
                            size: 1024,
                            dynamic: true,
                            format: 'png'
                        }))
                        .addField('W/L', [
                            `◈ Wins: **${user.win}**`,
                            `◈ Losses:**${user.loss}**`,
                            `◈ Total LP: **${user.lp}**`,
                            '\u200b'
                        ])
                        .addField('Streaks', [
                            `◈ 3 Win Streak: **${user.threewin}**`,
                            `◈ 6 Win Streak: **${user.sixwin}**`,
                            `◈ 10 Win Streak: **${user.tenwin}**`,
                            `◈ 3 Losses Streak: **${user.threeloss}**`,
                            `◈ 6 Losses Streak: **${user.sixloss}**`,
                            '\u200b'
                        ])
                        .setTimestamp();

                        message.channel.send(embed);
                });
        }
            
        });

    },
}