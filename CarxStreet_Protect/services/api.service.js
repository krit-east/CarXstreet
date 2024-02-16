const Config = require('../environments/config')
const jsonfile = require('edit-json-file');
const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));
const Embeds = require('./embed.service');
const Message = require('./log.service');
const { EmbedBuilder, StringSelectMenuBuilder,ActionRowBuilder,ButtonBuilder } = require('discord.js')
const loadsh = require('lodash');
const fs = require('fs');

async function SetMoney(interaction, email, password, money, client) {
    // console.log(interaction,email, password, money);
    await interaction.deferReply({ ephemeral: true });

    const res = await fetch(Config.api.LoginApi, {
        method: 'POST',
        headers: {
            "User-Agent": "CarXStreet/626 CFNetwork/1399 Darwin/22.1.0",
            "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
            username: email,
            password: password,
            project: "STREET",
        })
    })

    const embed = new EmbedBuilder()
        .setTitle('ตั้งค่าเงิน')
        .setColor(Config.main.embed.color)
        .setFooter({ text: Config.main.embed.textfooter, iconURL: Config.main.embed.iconfooter })
        .setTimestamp()

    // console.log(res.status);
    if (res.status == 401) return interaction.followUp({ embeds: [embed.setDescription('อีเมลหรือรหัสผ่านไม่ถูกต้อง')], ephemeral: true })
    if (res.status == 500) return interaction.followUp({ embeds: [embed.setDescription('เกิดข้อผิดพลาด')], ephemeral: true })

    if (res.status == 200) {
        const json = await res.json()
        console.log(json)

        const info = await fetch(Config.api.ProfilesApi, {
            method: 'GET',
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                "Authorization": `Bearer ` + json.d.token,
                "User-Agent": "CarXStreet/626 CFNetwork/1399 Darwin/22.1.0",
            },
        })

        const result = await info.json()
        // console.log(result.d.data.resources.hard.amount);

        if(result.d.data.resources.hard.amount >= 0) {
            return interaction.followUp({ embeds: [embed.setDescription(`ไม่สามารถเพิ่มเงินได้เนื่องจากเงินทองเป็น 0`)] })
        }

        result.d.data.resources = {
            soft: { amount: money },
            hard: { amount: result.d.data.resources.hard.amount },
            experience: { amount: 165000, award_index: 49 },
        }

        const customMoney = await fetch(Config.api.ProfilesApi, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json; charset=UTF-8",
                "Authorization": `Bearer ` + json.d.token,
                "X-Unity-Version": "2021.3.19f1",
                "User-Agent": "CarXStreet/708 CFNetwork/1474 Darwin/23.0.0",
            },
            body: JSON.stringify(result.d.data)
        })

        if (customMoney.status == 200) {
            Message.Log(`ได้เพิ่มเงินให้ \`${email}\` จำนวน \`${money}\` บาท`, client)
            return interaction.followUp({ embeds: [embed.setDescription(`ได้เพิ่มเงินให้ \`${email}\` จำนวน \`${money}\` บาท`)] })
        } else {
            return interaction.followUp({ embeds: [embed.setDescription(`เกิดข้อผิดพลาด`)] })
        }
    }


}
async function Setgold(interaction, email, password, gold, client) {
    await interaction.deferReply({ ephemeral: true });

    const res = await fetch(Config.api.LoginApi, {
        method: 'POST',
        headers: {
            "User-Agent": "CarXStreet/626 CFNetwork/1399 Darwin/22.1.0",
            "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
            username: email,
            password: password,
            project: "STREET",
        })
    })

    const embed = new EmbedBuilder()
        .setTitle('ตั้งค่าทอง')
        .setColor(Config.main.embed.color)
        .setFooter({ text: Config.main.embed.textfooter, iconURL: Config.main.embed.iconfooter })
        .setTimestamp()

    // console.log(res.status);
    if (res.status == 401) return interaction.followUp({ embeds: [embed.setDescription('อีเมลหรือรหัสผ่านไม่ถูกต้อง')], ephemeral: true })
    if (res.status == 500) return interaction.followUp({ embeds: [embed.setDescription('เกิดข้อผิดพลาด')], ephemeral: true })

    if (res.status == 200) {
        const json = await res.json()
        console.log(json)

        const info = await fetch(Config.api.ProfilesApi, {
            method: 'GET',
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                "Authorization": `Bearer ` + json.d.token,
                "User-Agent": "CarXStreet/626 CFNetwork/1399 Darwin/22.1.0",
            },
        })

        const result = await info.json()

        result.d.data.resources = {
            soft: { amount: result.d.data.resources.soft.amount },
            hard: result.d.data.resources.hard.amount,
            experience: { amount: 165000, award_index: 49 },
        }


        const customGold = await fetch(Config.api.ProfilesApi, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json; charset=UTF-8",
                "Authorization": `Bearer ` + json.d.token,
                "X-Unity-Version": "2021.3.19f1",
                "User-Agent": "CarXStreet/708 CFNetwork/1474 Darwin/23.0.0",
            },
            body: JSON.stringify(result.d.data)
        })

        if (customGold.status == 200) {
            Message.Log(`ได้เพิ่มทองให้ \`${email}\` จำนวน \`${gold}\` ทอง`, client)
            return interaction.followUp({ embeds: [embed.setDescription(`ได้เพิ่มทองให้ \`${email}\` จำนวน \`${gold}\` ทอง`)] })
        } else {
            return interaction.followUp({ embeds: [embed.setDescription(`เกิดข้อผิดพลาด`)] })
        }
    }


}
async function Setlevel(interaction, email, password, level, client) {
    await interaction.deferReply({ ephemeral: true });

    const res = await fetch(Config.api.LoginApi, {
        method: 'POST',
        headers: {
            "User-Agent": "CarXStreet/626 CFNetwork/1399 Darwin/22.1.0",
            "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
            username: email,
            password: password,
            project: "STREET",
        })
    })

    const embed = new EmbedBuilder()
        .setTitle('ตั้งค่าเงิน')
        .setColor(Config.main.embed.color)
        .setFooter({ text: Config.main.embed.textfooter, iconURL: Config.main.embed.iconfooter })
        .setTimestamp()

    // console.log(res.status);
    if (res.status == 401) return interaction.followUp({ embeds: [embed.setDescription('อีเมลหรือรหัสผ่านไม่ถูกต้อง')], ephemeral: true })
    if (res.status == 500) return interaction.followUp({ embeds: [embed.setDescription('เกิดข้อผิดพลาด')], ephemeral: true })

    if (res.status == 200) {
        const json = await res.json()
        console.log(json)

        const info = await fetch(Config.api.ProfilesApi, {
            method: 'GET',
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                "Authorization": `Bearer ` + json.d.token,
                "User-Agent": "CarXStreet/626 CFNetwork/1399 Darwin/22.1.0",
            },
        })

        const result = await info.json()

        result.d.data.resources = {
            soft: { amount: result.d.data.resources.soft.amount },
            hard: { amount: result.d.data.resources.hard.amount },
            experience: { amount: 165000, award_index: 49 },
        }

        const customGold = await fetch(Config.api.ProfilesApi, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json; charset=UTF-8",
                "Authorization": `Bearer ` + json.d.token,
                "X-Unity-Version": "2021.3.19f1",
                "User-Agent": "CarXStreet/708 CFNetwork/1474 Darwin/23.0.0",
            },
            body: JSON.stringify(result.d.data)
        })

        if (customGold.status == 200) {
            Message.Log(`ได้เพิ่มเลเวลให้ \`${email}\` จำนวน \`${level}\` เลเวล`, client)
            return interaction.followUp({ embeds: [embed.setDescription(`ได้เพิ่มเลเวลให้ \`${email}\` จำนวน \`${level}\` เลเวล`)] })
        } else {
            return interaction.followUp({ embeds: [embed.setDescription(`เกิดข้อผิดพลาด`)] })
        }
    }


}

async function SetMoneyAndGold(interaction, email, password, money, gold, level, client) {
    await interaction.deferReply({ ephemeral: true });

    const res = await fetch(Config.api.LoginApi, {
        method: 'POST',
        headers: {
            "User-Agent": "CarXStreet/626 CFNetwork/1399 Darwin/22.1.0",
            "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
            username: email,
            password: password,
            project: "STREET",
        })
    })

    const embed = new EmbedBuilder()
        .setTitle('ตั้งค่าเงินและทอง')
        .setColor(Config.main.embed.color)
        .setFooter({ text: Config.main.embed.textfooter, iconURL: Config.main.embed.iconfooter })
        .setTimestamp()

    // console.log(res.status);
    if (res.status == 401) return interaction.followUp({ embeds: [embed.setDescription('อีเมลหรือรหัสผ่านไม่ถูกต้อง')], ephemeral: true })
    if (res.status == 500) return interaction.followUp({ embeds: [embed.setDescription('เกิดข้อผิดพลาด')], ephemeral: true })

    if (res.status == 200) {
        const json = await res.json()
        console.log(json)

        const info = await fetch(Config.api.ProfilesApi, {
            method: 'GET',
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                "Authorization": `Bearer ` + json.d.token,
                "User-Agent": "CarXStreet/626 CFNetwork/1399 Darwin/22.1.0",
            },
        })

        const result = await info.json()
        console.log(result)
        result.d.data.resources = {
            soft: { amount: money },
            hard: { amount: gold },
            experience: { amount: level, award_index: 49 },
        }

        const customGold = await fetch(Config.api.ProfilesApi, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json; charset=UTF-8",
                "Authorization": `Bearer ` + json.d.token,
                "X-Unity-Version": "2021.3.19f1",
                "User-Agent": "CarXStreet/708 CFNetwork/1474 Darwin/23.0.0",
            },
            body: JSON.stringify(result.d.data)
        })

        if (customGold.status == 200) {
            Message.Log(`ได้เพิ่มเงินและทองให้ \`${email}\` จำนวน \`${money}\` บาท \`${gold}\` ทอง และ  \`${level}\` เลเวล`, client)
            return interaction.followUp({ embeds: [embed.setDescription(`ได้เพิ่มเงินและทองให้ \`${email}\` จำนวน \`${money}\` บาท \`${gold}\` ทอง และ  \`${level}\` เลเวล`)] })
        } else {
            return interaction.followUp({ embeds: [embed.setDescription(`เกิดข้อผิดพลาด`)] })
        }
    }


}

async function CustomCars(interaction, email, password, client) {
    // console.log(email, password);
    await interaction.deferReply({ ephemeral: true });
    const login = await fetch(Config.api.LoginApi, {
        method: "POST",
        headers: {
            "User-Agent": "CarXStreet/626 CFNetwork/1399 Darwin/22.1.0",
            "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
            username: email,
            password: password,
            project: "STREET",
        }),
    });

    if (login.status == 401) return interaction.followUp({ embeds: [embed.setDescription('อีเมลหรือรหัสผ่านไม่ถูกต้อง')], ephemeral: true })
    if (login.status == 500) return interaction.followUp({ embeds: [embed.setDescription('เกิดข้อผิดพลาด')], ephemeral: true })


    const login_data = await login.json();
    if (login_data.message == "Invalid username or password") {
        interaction.reply({
            content: `รหัสผ่านไม่ถูกต้อง!`,
            ephemeral: true
        })
    } else {
        // console.log(login_data);
        const userId = interaction.user.id
        // console.log(userId);
        const file = jsonfile(`${__dirname}/../data/cache.json`);// ตัวแปรที่เก็บไฟล์ json ไว้
        file.set({ userId: userId, data: login_data });// ตั้งค่า channel ให้เป็น channel ที่เราเลือก
        file.save(); // บันทึกไฟล์

        
        // require('./cars.json')
        fs.readFile(`${__dirname}/../data/cars.json`, 'utf8', async (err, jsonString) => {
            // console.log(JSON.parse(jsonString));
            const data = JSON.parse(jsonString)
            const chunk = loadsh.chunk(data.d.data.car_models.keys, 20)

            // console.log(chunk.length);
            const select = new StringSelectMenuBuilder()
            .setCustomId('choose_cars')
            .setPlaceholder('เลือกรถที่ต้องการ')
            .addOptions(chunk[0].map((x) => {
                return {
                    label: x,
                    value: x,
                    description: x,
                    emoji: '🚗'
                }
            }))
            const row = new ActionRowBuilder()
            .addComponents(select)
            const next = new ButtonBuilder()
            .setCustomId('next_page-' + 1)
            .setLabel('หน้าถัดไป')
            .setStyle('Primary')

            const back = new ButtonBuilder()
            .setCustomId('back_page-' + 0)
            .setLabel('ย้อนกลับ')
            .setStyle('Danger')
            .setDisabled(true)

            const bt = new ActionRowBuilder()
            .addComponents(back,next)

            const embed = new EmbedBuilder()
            .setTitle(`เลือกรถหน้าที่ 1/${chunk.length}`)
            .setColor(Config.main.embed.color)
            .setFooter({ text: Config.main.embed.textfooter, iconURL: Config.main.embed.iconfooter })
            .setTimestamp()

            await interaction.followUp({ embeds: [embed], components: [row,bt], ephemeral: true})

        })
    }

}


module.exports = {
    SetMoney,
    Setgold,
    Setlevel,
    SetMoneyAndGold,
    CustomCars
}