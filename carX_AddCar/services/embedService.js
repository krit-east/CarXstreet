const { EmbedBuilder } = require("discord.js");

const generateEmbed = (title, field, color) => {
  const embed = new EmbedBuilder().setFooter({
    // text: "CARXSTREET API BY iteeshop",
    text: "CarxStreet API by  อ่านทำไม",
  });
  embed.setTitle(title);
  embed.addFields(field);
  embed.setColor(color);
  embed.setTimestamp();
  return embed;
};

module.exports = { generateEmbed };
