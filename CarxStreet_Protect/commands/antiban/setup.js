const jsonfile = require('edit-json-file');
const EmbedProtect = require('../../services/embed.service');
const { PermissionFlagsBits, ButtonBuilder, ActionRowBuilder,EmbedBuilder } = require('discord.js');
const config = require('../../environments/config');
module.exports = {
    name: "setupantiban",
    description: "ลงทะเบียนระบบป้องกันการแบน",
    options: [
        {
            name: 'channel',
            description: 'เลือกห้องที่จะทำระบบป้องกันการแบน',
            type: 7,
            required: true
        },
        
    ],
    run: async (client, interaction) => {
        let channel = interaction.options.getChannel('channel');


        if (!interaction.member.permissions.has('ADMINISTRATOR')) return interaction.reply({ content: 'คุณไม่มีสิทธิ์ในการใช้คำสั่งนี้', ephemeral: true });
        
        if (!channel.isTextBased()) return interaction.reply({ content: 'กรุณาเลือกห้องที่เป็นแชท', ephemeral: true });

        const button = new ActionRowBuilder().addComponents(
            new ButtonBuilder()
            .setCustomId('antiban')
            .setLabel('สมัครใหม่ป้องกันการแบน')
            .setStyle('Primary'),

            new ButtonBuilder()
            .setCustomId('antiban2')
            .setLabel('ไอดีเก่าป้องกันการแบน')
            .setStyle('Primary'),
        )


        const embed = new EmbedProtect.EmbedProtect(config.main.embedprotect.author, config.main.embedprotect.icon, config.main.embedprotect.url, config.main.embedprotect.title, config.main.embedprotect.description, config.main.embedprotect.image, config.main.embedprotect.color, config.main.embedprotect.textfooter, config.main.embedprotect.iconfooter);

        const file = jsonfile(`${__dirname}/../../data/protect.json`); // ตัวแปรที่เก็บไฟล์ json ไว้
        file.set('protect.channel', channel.id); // ตั้งค่า channel ให้เป็น channel ที่เราเลือก
        file.save(); // บันทึกไฟล์

        const channelId = await jsonfile(`${__dirname}/../../data/protect.json`).get('protect.channel'); // ดึงค่า channel ที่เราเลือกมาใช้
        const messageId = await jsonfile(`${__dirname}/../../data/protect.json`).get('protect.msg'); // ดึงค่า message ที่เราเลือกมาใช้
        const channels = await client.channels.fetch(channelId); // ดึงค่า channel ที่เราเลือกมาใช้

        if(!messageId){
            const message = await client.channels.cache.get(channelId).send({ embeds: [embed], components: [button] }); // สร้าง message ใหม่
            file.set('protect.msg', message.id); // ตั้งค่า message ให้เป็น message ที่เราสร้าง
            file.save(); // บันทึกไฟล์
        } else {
            try {
                const message = await channels.messages.fetch(messageId); // ดึงค่า message ที่เราเลือกมาใช้
                message.edit({ embeds: [embed], components: [button] }); // แก้ไข message ให้เป็น message ที่เราสร้าง
                
            } catch (error) {

                const message = await client.channels.cache.get(channelId).send({ embeds: [embed], components: [button] }); // สร้าง message ใหม่
                file.set('protect.msg', message.id); // ตั้งค่า message ให้เป็น message ที่เราสร้าง
                file.save(); // บันทึกไฟล์
                
            }
        }

        await interaction.reply({ content: 'ตั้งค่าสำเร็จ', ephemeral: true });
    }

}