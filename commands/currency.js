const { MessageEmbed } = require('discord.js'),
	randomColor = require('../constants/colorRandomizer.js'),
	{ currentLogo } = require('../config.js'),
	{ entropy, idea, darwinium, metabit, fossil, mutagen } = require('./emojis.js');

module.exports = {
	description: "List all of the ingame currency.",
	usage: {
		"": ""
	},
	permissonRequired: 0,
	checkArgs: (args) => args.length >= 0
}

module.exports.run = async (client, message, args) => {
	var embed = new MessageEmbed()
		.setTitle("Currency")
		.setColor(randomColor())
		.attachFiles(currentLogo)
		.setThumbnail("attachment://Current_Logo.png")
		.addFields(
			{ name: `${entropy} Entropy`, value: "The beginning currency in the game, which is used to for evolution upgrades" },
			{ name: `${idea} Idea`, value: "A resource unlocked further in the game, which is used for technological advancements" },
			{ name: `${metabit} Metabit`, value: "Prestige(main sim) currency that is unlocked after reaching singularity for the first time, this currency is used for upgrades in the Reality Engine and gives a boost in productivity the more you gain." },
			{ name: `${darwinium} Darwinium`, value: "A resource used for boosts and geodes (diamond geode is very useful to build up for)" },
			{ name: `${fossil} Fossils`, value: "The main resource in the Mesozoic Valley to upgrade dinosaurs" },
			{ name: `${mutagen} Mutagen`, value: "The resource in the Mesozoic Valley used for upgrading trait cards is gained through opening geodes and upgrading dinosaurs, which you can also purchase with darwinium." },
		);
	message.channel.send(embed);
}