const jsonfile = require('edit-json-file');
const Embeds = require('../../services/embed.service');
const { PermissionFlagsBits, ButtonBuilder, ActionRowBuilder } = require('discord.js');
const config = require('../../environments/config');


module.exports = {
    name: "setmoney",
    description: "ติดตั้งใช้งานบอท",
    options: [

        {
            name: 'channel',
            description: 'เลือกช่องที่ต้องการให้ส่งเมนู',
            type: 7,
            required: true
        }

    ],
    run: async (client, interaction) => {
        let embed = new Embeds.Embed(config.main.embed.author, config.main.embed.icon, config.main.embed.url, config.main.embed.title, config.main.embed.description, config.main.embed.image, config.main.embed.color, config.main.embed.textfooter, config.main.embed.iconfooter); // สร้าง embed ใหม่
        
        if (!interaction.member.permissions.has(PermissionFlagsBits.ManageRoles))return await interaction.reply({content: "คุณไม่มีสิทธิ์ใช้คำสั่งนี้", ephemeral: true}) // ถ้าไม่มีสิทธิ์ให้ส่งข้อความว่า คุณไม่มีสิทธิ์ใช้คำสั่งนี้
    

        const channel = interaction.options.getChannel('channel')
        

        const button = new ActionRowBuilder().addComponents(
            new ButtonBuilder()
            .setCustomId('setmoney')
            .setLabel('เพิ่มเงิน')
            .setStyle('Primary'),
            new ButtonBuilder()
            .setCustomId('setgold')
            .setLabel('เพิ่มทอง')
            .setStyle('Primary'),
            new ButtonBuilder()
            .setCustomId('setlevel')
            .setLabel('เพิ่มเวล')
            .setStyle('Primary'),
            new ButtonBuilder()
            .setCustomId('setmoney_gold')
            .setLabel('เพิ่มเงินและทอง')
            .setStyle('Primary'),
        )


        const file = jsonfile(`${__dirname}/../../data/setup.json`);// ตัวแปรที่เก็บไฟล์ json ไว้
        file.set('setup.channel', channel.id); // ตั้งค่า channel ให้เป็น channel ที่เราเลือก
        file.save(); // บันทึกไฟล์

        const channelId = await jsonfile(`${__dirname}/../../data/setup.json`).get('setup.channel'); // ดึงค่า channel ที่เราเลือกมาใช้

        const messageId = await jsonfile(`${__dirname}/../../data/setup.json`).get('setup.msg'); // ดึงค่า message ที่เราเลือกมาใช้

        const channels = await client.channels.fetch(channelId); // ดึงค่า channel ที่เราเลือกมาใช้
        
        if (!messageId) { // ถ้าไม่มี message ให้สร้างใหม่
            const message = await client.channels.cache.get(channelId).send({ embeds: [embed], components: [button] }); // สร้าง message ใหม่
            file.set('setup.msg', message.id); // ตั้งค่า message ให้เป็น message ที่เราสร้าง
            file.save(); // บันทึกไฟล์
        } else {
            try {
                const message = await channels.messages.fetch(messageId); // ดึงค่า message ที่เราเลือกมาใช้
                message.edit({ embeds: [embed],components: [button] }); // แก้ไข message ที่เราเลือก
            } catch (error) {
                const message = await client.channels.cache.get(channelId).send({ embeds: [embed], components: [button] }); // สร้าง message ใหม่
                file.set('setup.msg', message.id); // ตั้งค่า message ให้เป็น message ที่เราสร้าง
                file.save(); // บันทึกไฟล์   
            }
        }

        await interaction.reply({content: `ตั้งค่าเมนูเรียบร้อยแล้ว <#${channelId}>`, ephemeral: true}); // ส่งข้อความว่า ตั้งค่าเมนูเรียบร้อยแล้ว
        

    }
}