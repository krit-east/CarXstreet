const { EmbedBuilder } = require('discord.js');

exports.Embed = function (name, icon, url, title, description, image, color, textfooter, iconfooter) {
    let _n = name ? name : 'xxx';
    let _i = icon ? icon : 'https://discord.com/assets/5d6a5e9d7d77ac29116e.png';
    let _u = url ? url : 'https://www.facebook.com/tonbay07';

    let _f = textfooter ? textfooter : 'xxxx';
    let _fi = iconfooter ? iconfooter : 'https://discord.com/assets/5d6a5e9d7d77ac29116e.png';


    const embed = new EmbedBuilder()
        .setAuthor({ name: _n, iconURL: _i, url: _u })
        .setTitle(title)
        .setDescription(description)
        .setColor(color)
        .setImage(image)
        .setFooter({ text: _f, iconURL: _fi })
    return embed;
}
exports.EmbedProtect = function (name, icon, url, title, description, image, color, textfooter, iconfooter) {
    let _n = name ? name : 'xxxx';
    let _i = icon ? icon : 'https://discord.com/assets/5d6a5e9d7d77ac29116e.png';
    let _u = url ? url : 'https://www.facebook.com/tonbay07';

    let _f = textfooter ? textfooter : 'xxxx';
    let _fi = iconfooter ? iconfooter : 'https://discord.com/assets/5d6a5e9d7d77ac29116e.png';


    const embed = new EmbedBuilder()
        .setAuthor({ name: _n, iconURL: _i, url: _u })
        .setTitle(title)
        .setDescription(description)
        .setColor(color)
        .setImage(image)
        .setFooter({ text: _f, iconURL: _fi })
    return embed;
}
