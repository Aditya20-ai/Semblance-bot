const { MessageEmbed, MessageAttachment } = require('discord.js'),
randomColor = require("../constants/colorRandomizer.js"),
	{ prefix } = require('../config.js');

module.exports = {
	description: "List all miscelaneous commands",
	usage: {
		"": ""
	},
	permissionRequired: 0,
	checkArgs: (args) => args.length >= 0
}

module.exports.run = async (client, message, args) => {
	var embed = new MessageEmbed()
		.setTitle("Miscellaneous Commands")
		.setColor(randomColor())
		.addFields(
			{ name: "Semblance related commands", value: `Support me with: **\`${prefix}patreon\`**\n`+
			 						`Vote Leaderboard: **\`${prefix}leaderboard\`**\n`+
			 						`Credits: **\`${prefix}credits\`**\n`+
									`Semblance Invite: **\`${prefix}invite\`**\n` +
									`Support Invite: **\`${prefix}invite support OR ${prefix}support\`**\n`+
			 						`Vote for Semblance: **\`${prefix}vote\`**\n`, inline: true },
			{ name: "Server related commands", value: `Server Information: **\`${prefix}serverinfo\`**\n`+
			 					`Server Member Count: **\`${prefix}membercount\`**\n`+
			 					`AFK: **\`${prefix}afk <input reason>\`**\n`+
			 					`Profile Info: **\`${prefix}profile <user id(optional)>\`**`, inline: true },
			{ name: "Fun Commands", value: `Semblance's Idle-Game: **\`${prefix}game\`**\n`+
							`***PING***: **\`${prefix}ping\`**\n`+
							`Large User Avatar: **\`${prefix}avatar <userID/userMention>\`**\n`+
							`Set Reminder: **\`${prefix}remindme <time ex: 1h5m20s> <reminder>\`**\n`+
							`Magic 8 Ball: **\`${prefix}8ball\`**` }
			);
	message.channel.send(embed);
}
