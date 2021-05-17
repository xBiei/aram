const { prefix } = require('../config.json');

module.exports = {
	name: 'help',
	description: 'a list of the commands you can use with me.',
	aliases: [ 'commands', 'h', 'invite' ],
	usage: '[command name]',

	execute(message, args) {
		// const data = [];
		// const { commands } = message.client;

		// if (!args.length) {
		// 	const title = ('**My Cute Commands >_<**');
		// 	// eslint-disable-next-line no-unused-vars
		// 	const description = data.push(commands.map(command => command.name).join('\n'));
		// 	const footer = `You can send ${prefix}help [command] to get info on a specific command!`;
		// 	const helpEmbed = new Discord.MessageEmbed()
		// 		.setColor(13238363)
		// 		.setTitle("**My Cute Commands >⯋<**")
		// 		.setDescription(data)
		// 		.setTimestamp()
		// 		.setFooter(footer)
		// 		.setThumbnail(`${message.client.user.displayAvatarURL({ size: 1024, dynamic: true, format: 'png' })}`);
		// }

		// const name = args[0].toLowerCase();
		// const command = commands.get(name) || commands.find(c => c.aliases && c.aliases.includes(name));

		// if (!command) {
		// 	return message.reply('that\'s not a command!');
		// }

		// data.push(`**Name:** ${command.name}`);

		// if (command.aliases) data.push(`**Aliases:** ${command.aliases.join(', ')}`);
		// if (command.description) data.push(`**Description:** ${command.description}`);
		// if (command.usage) data.push(`**Usage:** ${prefix}${command.name} ${command.usage}`);

		// message.channel.send(data, { split: true });

		const helpEmbed = {
			title: '**My Cute Commands >⯋<**',
			color: 13238363,
			fields: [
				{
					name: 'Commands [aliases] (description):',
					value:
						'**!!name** _[setuser]_   `(sets your LoL username to your profile)`\n**!!win** _[w, addwin]_ `(Adds wins to your profile & +20 LP)`\n**!!loss** _[addloss]_    `(Adds losses to your profile & -15 LP)`\n**!!profile** _[user]_     `(Sends your profile)`',
					inline: true,
				},
				{
					name: 'How to add Streaks?',
					value:
						'There are 5 types of streaks,\n3 Win Streak +30 LP \n6 Win Streak +50 LP \n10 Win Streak +75 LP \n3 Loss Streak  -20 LP \n6 Loss Streak  -40 LP\n-------------------------\n\nYou can add the streaks using the base commands,\nlike: `!!win 3` | This will add 3 wins, a 3 win streak and the bonus LP',
				},
				{
					name: 'Invite me?',
					value:
						'[Click here.](https://discord.com/api/oauth2/authorize?client_id=751188363452612708&permissions=518208&scope=bot)',
				},
			],
			footer: {
				text: 'Made By Sleepy Dev.',
				icon_url: 'https://xbiei.tk/imgs/avatar.gif',
			},
			thumbnail: {
				url: 'https://cdn.discordapp.com/avatars/751188363452612708/d6e6bb9700236cbe5b63711e5f7c1867.png',
			},
		};

		message.channel.send({ embed: helpEmbed }).catch((err) => {
			console.error(`${err.name} :\n${err}`);
			message.channel.send("seems that your dms are disabled from this server or you've blocked me");
		});
	},
};
