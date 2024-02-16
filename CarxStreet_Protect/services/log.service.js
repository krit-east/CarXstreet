const { EmbedBuilder } = require('discord.js');
const Config = require('../environments/config')
const client = require('../app')
exports.Log = function(message, client) {
    
    const embed = new EmbedBuilder()
        .setTitle('Log')
        .setDescription(message)
        .setColor('Green')
        .setFooter({text: Config.main.embed.textfooter, iconURL: Config.main.embed.iconfooter})

    client.channels.cache.get(Config.bot.channelLog).send({ embeds: [embed] })

}
exports.LogRegister = function(message, client) {
    
    const embed = new EmbedBuilder()
        .setTitle('Log')
        .setDescription(message)
        .setColor('Green')
        .setFooter({text: Config.main.embed.textfooter, iconURL: Config.main.embed.iconfooter})

    client.channels.cache.get(Config.bot.channelLogProtect).send({ embeds: [embed] })

}