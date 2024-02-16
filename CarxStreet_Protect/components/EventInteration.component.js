const { ModalBuilder, TextInputBuilder, EmbedBuilder, TextInputStyle, ActionRowBuilder, StringSelectMenuBuilder, ButtonBuilder } = require('discord.js')
const Config = require('../environments/config')
const fs = require('fs')
const loadsh = require('lodash')
const jsonfile = require('edit-json-file');
const { SetMoney, Setgold, Setlevel, SetMoneyAndGold, CustomCars } = require('../services/api.service')
const {CreateUser,ProtectUser} = require('../services/nongjj.service')
module.exports = async (client, config) => {
    client.on('interactionCreate', async (interaction) => {

        if (interaction.isCommand()) {
            const cmd = client.commands.get(interaction.commandName)
            if (cmd.hasPermission) {
                if (!interaction.member.roles.cache.some(role => config.bot.roles.includes(role.id))) return interaction.reply({ content: 'คุณไม่มีสิทธิ์ใช้งานคำสั่งนี้', ephemeral: true })
            }
            console.log(`[COMMAND] ${interaction.user.tag} ใช้คำสั่ง ${interaction.commandName}`);
            cmd.run(client, interaction)
        }


        if (interaction.isButton()) {

            const role = Config.bot.roles.map(role => {
                return interaction.member.roles.cache.some(r => r.id === role)
            })
            // console.log(role);
            if (!role.includes(true)) return interaction.reply({ content: 'คุณไม่มีสิทธิ์ใช้งานคำสั่งนี้', ephemeral: true })

            if (interaction.customId == 'setmoney') {
                const modal = new ModalBuilder()
                    .setCustomId('_setmoney')
                    .setTitle('ตั้งค่าเงิน')

                const emailInput = new TextInputBuilder()
                    .setCustomId('email')
                    .setLabel('กรอกอีเมล')
                    .setRequired(true)
                    .setStyle(TextInputStyle.Short)

                const passwordInput = new TextInputBuilder()
                    .setCustomId('password')
                    .setLabel('กรอกรหัสผ่าน')
                    .setRequired(true)
                    .setStyle(TextInputStyle.Short)

                const moneyInput = new TextInputBuilder()
                    .setCustomId('money')
                    .setLabel('กรอกจำนวนเงิน')
                    .setRequired(true)
                    .setStyle(TextInputStyle.Short)

                const button = new ActionRowBuilder()
                    .addComponents(emailInput)
                const button1 = new ActionRowBuilder()
                    .addComponents(passwordInput)
                const button2 = new ActionRowBuilder()
                    .addComponents(moneyInput)


                modal.addComponents(button, button1, button2)
                await interaction.showModal(modal)
            }
            if (interaction.customId == 'setgold') {
                const modal = new ModalBuilder()
                    .setCustomId('myModal_setgold')
                    .setTitle('ตั้งค่าทอง')

                const emailInput = new TextInputBuilder()
                    .setCustomId('email')
                    .setLabel('กรอกอีเมล')
                    .setRequired(true)
                    .setStyle(TextInputStyle.Short)

                const passwordInput = new TextInputBuilder()
                    .setCustomId('password')
                    .setLabel('กรอกรหัสผ่าน')
                    .setRequired(true)
                    .setStyle(TextInputStyle.Short)

                const moneyInput = new TextInputBuilder()
                    .setCustomId('gold')
                    .setLabel('กรอกจำนวนทอง')
                    .setRequired(true)
                    .setStyle(TextInputStyle.Short)

                const button = new ActionRowBuilder()
                    .addComponents(emailInput)
                const button1 = new ActionRowBuilder()
                    .addComponents(passwordInput)
                const button2 = new ActionRowBuilder()
                    .addComponents(moneyInput)
                modal.addComponents(button, button1, button2)

                await interaction.showModal(modal)
            }
            if (interaction.customId == 'setlevel') {
                const modal = new ModalBuilder()
                    .setCustomId('myModal_setlevel')
                    .setTitle('ตั้งค่าเลเวล')

                const emailInput = new TextInputBuilder()
                    .setCustomId('email')
                    .setLabel('กรอกอีเมล')
                    .setRequired(true)
                    .setStyle(TextInputStyle.Short)

                const passwordInput = new TextInputBuilder()
                    .setCustomId('password')
                    .setLabel('กรอกรหัสผ่าน')
                    .setRequired(true)
                    .setStyle(TextInputStyle.Short)

                const moneyInput = new TextInputBuilder()
                    .setCustomId('level')
                    .setLabel('กรอกจำนวนเลเวล')
                    .setRequired(true)
                    .setStyle(TextInputStyle.Short)

                const button = new ActionRowBuilder()
                    .addComponents(emailInput)
                const button1 = new ActionRowBuilder()
                    .addComponents(passwordInput)
                const button2 = new ActionRowBuilder()
                    .addComponents(moneyInput)


                modal.addComponents(button, button1, button2)
                await interaction.showModal(modal)
            }
            if (interaction.customId == 'setmoney_gold') {
                const modal = new ModalBuilder()
                    .setCustomId('myModal_setmoney_gold')
                    .setTitle('ตั้งค่าเลเวล')

                const emailInput = new TextInputBuilder()
                    .setCustomId('email')
                    .setLabel('กรอกอีเมล')
                    .setRequired(true)
                    .setStyle(TextInputStyle.Short)

                const passwordInput = new TextInputBuilder()
                    .setCustomId('password')
                    .setLabel('กรอกรหัสผ่าน')
                    .setRequired(true)
                    .setStyle(TextInputStyle.Short)

                const moneyInput = new TextInputBuilder()
                    .setCustomId('money')
                    .setLabel('กรอกจำนวนเงิน')
                    .setRequired(true)
                    .setStyle(TextInputStyle.Short)
                const goldInput = new TextInputBuilder()
                    .setCustomId('gold')
                    .setLabel('กรอกจำนวนทอง')
                    .setRequired(true)
                    .setStyle(TextInputStyle.Short)

                const levelInput = new TextInputBuilder()
                    .setCustomId('level')
                    .setLabel('กรอกจำนวนเลเวล')
                    .setRequired(true)
                    .setStyle(TextInputStyle.Short)


                const button = new ActionRowBuilder()
                    .addComponents(emailInput)
                const button1 = new ActionRowBuilder()
                    .addComponents(passwordInput)
                const button2 = new ActionRowBuilder()
                    .addComponents(moneyInput)
                const button3 = new ActionRowBuilder()
                    .addComponents(goldInput)
                const button4 = new ActionRowBuilder()
                    .addComponents(levelInput)


                modal.addComponents(button, button1, button2, button3, button4)
                await interaction.showModal(modal)
            }
            if (interaction.customId == 'Login') {
                const model = new ModalBuilder()
                    .setCustomId('LoginModal')
                    .setTitle('Login')

                const emailInput = new TextInputBuilder()
                    .setCustomId('email')
                    .setLabel('กรอกอีเมล')
                    .setRequired(true)
                    .setStyle(TextInputStyle.Short)

                const passwordInput = new TextInputBuilder()
                    .setCustomId('password')
                    .setLabel('กรอกรหัสผ่าน')
                    .setRequired(true)
                    .setStyle(TextInputStyle.Short)

                const button = new ActionRowBuilder()
                    .addComponents(emailInput)
                const button1 = new ActionRowBuilder()
                    .addComponents(passwordInput)

                model.addComponents(button, button1)

                await interaction.showModal(model)
            }
            if (interaction.customId.includes('next_page-')) {
                const page = parseInt(interaction.customId.split('-')[1])
                // require('../')
                fs.readFile(`${__dirname}/../data/cars.json`, 'utf8', async (err, jsonString) => {
                    // console.log(jsonString);
                    const data = JSON.parse(jsonString)
                    const chunk = loadsh.chunk(data.d.data.car_models.keys, 20)

                    const page_next = parseInt(page) + 1
                    const page_prev = parseInt(page) - 1
                    let buttonNext = false
                    if (chunk[parseInt(page) + 1] == undefined) {
                        buttonNext = true
                    } else {
                        buttonNext = false
                    }
                    let buttonPrev = false
                    if (chunk[parseInt(page) - 1] == undefined) {
                        buttonPrev = true
                    } else {
                        buttonPrev = false
                    }

                    const select = new StringSelectMenuBuilder()
                        .setCustomId('choose_cars')
                        .setPlaceholder('โปรดเลือกรถ!')
                        .addOptions(chunk[page].map((car) => {
                            return {
                                label: car,
                                value: car,
                                description: car,
                                emoji: '🚗'
                            }
                        }))

                    const row = new ActionRowBuilder()
                        .addComponents(select)

                    const next = new ButtonBuilder()
                        .setCustomId(`next_page-` + page_next)
                        .setLabel('หน้าถัดไป')
                        .setStyle('Primary')
                        .setDisabled(buttonNext)

                    const prev = new ButtonBuilder()
                        .setCustomId(`next_page-` + page_prev)
                        .setLabel('หน้าก่อนหน้า')
                        .setStyle('Primary')
                        .setDisabled(buttonPrev)

                    const row1 = new ActionRowBuilder()
                        .addComponents(prev, next)

                    const embed = new EmbedBuilder()
                        .setTitle(`เลือกรถหน้าที่ ${page_next}/${chunk.length}`)
                        .setColor(Config.main.embed.color)
                        .setFooter({ text: Config.main.embed.textfooter, iconURL: Config.main.embed.iconfooter })
                        .setTimestamp()

                    interaction.update({ components: [row, row1], embeds: [embed], ephemeral: true })

                })
            }
            if (interaction.customId.includes('back_page-')) {

                const page = parseInt(interaction.customId.split('-')[1])
                // require('../')
                fs.readFile(`${__dirname}/../data/cars.json`, 'utf8', async (err, jsonString) => {
                    // console.log(jsonString);
                    const data = JSON.parse(jsonString)
                    const chunk = loadsh.chunk(data.d.data.car_models.keys, 20)

                    const page_next = parseInt(page) + 1
                    const page_prev = parseInt(page) - 1
                    let buttonNext = false
                    if (chunk[parseInt(page) + 1] == undefined) {
                        buttonNext = true
                    } else {
                        buttonNext = false
                    }
                    let buttonPrev = false
                    if (chunk[parseInt(page) - 1] == undefined) {
                        buttonPrev = true
                    } else {
                        buttonPrev = false
                    }

                    const select = new StringSelectMenuBuilder()
                        .setCustomId('choose_cars')
                        .setPlaceholder('โปรดเลือกรถ!')
                        .addOptions(chunk[page].map((car) => {
                            return {
                                label: car,
                                value: car,
                                description: car,
                                emoji: '🚗'
                            }
                        }))

                    const row = new ActionRowBuilder()
                        .addComponents(select)

                    const next = new ButtonBuilder()
                        .setCustomId(`next_page-` + page_next)
                        .setLabel('หน้าถัดไป')
                        .setStyle('Primary')
                        .setDisabled(buttonNext)

                    const prev = new ButtonBuilder()
                        .setCustomId(`next_page-` + page_prev)
                        .setLabel('หน้าก่อนหน้า')
                        .setStyle('Primary')
                        .setDisabled(buttonPrev)

                    const row1 = new ActionRowBuilder()
                        .addComponents(prev, next)

                    const embed = new EmbedBuilder()
                        .setTitle(`เลือกรถหน้าที่ ${page_next}/${chunk.length}`)
                        .setColor(Config.main.embed.color)
                        .setFooter({ text: Config.main.embed.textfooter, iconURL: Config.main.embed.iconfooter })
                        .setTimestamp()

                    interaction.update({ components: [row, row1], embeds: [embed], ephemeral: true })

                })

            }
            if (interaction.customId == 'antiban'){
                const modal = new ModalBuilder()
                .setCustomId('protectban')
                .setTitle('ตั้งค่าระบบป้องกันการแบน')

                const emailInput = new TextInputBuilder()
                .setCustomId('email')
                .setPlaceholder('กรอกอีเมล')
                .setLabel('กรอกอีเมล')
                .setRequired(true)
                .setStyle(TextInputStyle.Short)


                const passwordInput = new TextInputBuilder()
                .setCustomId('password')
                .setPlaceholder('กรอกรหัสผ่าน')
                .setLabel('กรอกรหัสผ่าน')
                .setStyle(TextInputStyle.Short)
                .setRequired(true)

                const usernameInput = new TextInputBuilder()
                .setCustomId('username')
                .setPlaceholder('กรอกชื่อผู้ใช้')
                .setLabel('กรอกชื่อผู้ใช้')
                .setRequired(true)
                .setStyle(TextInputStyle.Short)


                const button = new ActionRowBuilder()
                .addComponents(emailInput)
                const button1 = new ActionRowBuilder()
                .addComponents(passwordInput)
                const button2 = new ActionRowBuilder()
                .addComponents(usernameInput)

                modal.addComponents(button, button1, button2)
                await interaction.showModal(modal)
            }
            if (interaction.customId == 'antiban2'){
                const modal = new ModalBuilder()
                .setCustomId('protectban2')
                .setTitle('ตั้งค่าระบบป้องกันการแบน')

                const emailInput = new TextInputBuilder()
                .setCustomId('email')
                .setLabel('กรอกอีเมล')
                .setPlaceholder('กรอกอีเมล')
                .setRequired(true)
                .setStyle(TextInputStyle.Short)


                const passwordInput = new TextInputBuilder()
                .setCustomId('password')
                .setLabel('กรอกรหัสผ่าน')
                .setPlaceholder('กรอกรหัสผ่าน')
                .setStyle(TextInputStyle.Short)
                .setRequired(true)

                const button = new ActionRowBuilder()
                .addComponents(emailInput)
                const button1 = new ActionRowBuilder()
                .addComponents(passwordInput)

                modal.addComponents(button, button1)
                await interaction.showModal(modal)
            }

        }


        if (interaction.isModalSubmit()) {
            console.log(`[MODAL] ${interaction.user.tag} ใช้คำสั่ง ${interaction.customId}`);

            if (interaction.customId == '_setmoney') {
                let email = interaction.fields.getTextInputValue('email')
                let password = interaction.fields.getTextInputValue('password')
                let money = interaction.fields.getTextInputValue('money')
                SetMoney(interaction, email, password, money, client)
            }

            if (interaction.customId == 'myModal_setgold') {
                let email = interaction.fields.getTextInputValue('email')
                let password = interaction.fields.getTextInputValue('password')
                let gold = interaction.fields.getTextInputValue('gold')

                Setgold(interaction, email, password, gold, client)
            }

            if (interaction.customId == 'myModal_setlevel') {
                let email = interaction.fields.getTextInputValue('email')
                let password = interaction.fields.getTextInputValue('password')
                let level = interaction.fields.getTextInputValue('level')

                Setlevel(interaction, email, password, level, client)

            }
            if (interaction.customId == 'myModal_setmoney_gold') {
                let email = interaction.fields.getTextInputValue('email')
                let password = interaction.fields.getTextInputValue('password')
                let gold = interaction.fields.getTextInputValue('gold')
                let money = interaction.fields.getTextInputValue('money')
                let level = interaction.fields.getTextInputValue('level')

                SetMoneyAndGold(interaction, email, password, money, gold, level, client)
            }

            if (interaction.customId == 'LoginModal') {
                let email = interaction.fields.getTextInputValue('email')
                let password = interaction.fields.getTextInputValue('password')
                // if(email == '' || password == '') return interaction.reply({content: 'กรุณากรอกข้อมูลให้ครบ', ephemeral: true})

                CustomCars(interaction, email, password, client)
            }

            if(interaction.customId == 'protectban'){
                let email = interaction.fields.getTextInputValue('email')
                let password = interaction.fields.getTextInputValue('password')
                let username = interaction.fields.getTextInputValue('username')

                CreateUser(interaction, email, password, username, client)
            }

            if(interaction.customId == 'protectban2'){
                let email = interaction.fields.getTextInputValue('email')
                let password = interaction.fields.getTextInputValue('password')

                ProtectUser(interaction, email, password, client)
            }
        }

        if (interaction.isAnySelectMenu()) {
            if (interaction.customId == 'choose_cars') {
                const value = interaction.values[0]
                fs.readFile(`${__dirname}/../data/cars.json`, 'utf8', async (err, jsonString) => {
                    if (err) {
                        console.log(err);
                        return;
                    }

                    const data = JSON.parse(jsonString)
                    const chunk = loadsh.chunk(data.d.data.car_models.keys, 20)

                    const select = new StringSelectMenuBuilder()
                        .setCustomId('choose_cars_engine:' + value)
                        .setPlaceholder('โปรดเลือกเครื่องรถที่จะปรับแต่ง!')
                        .addOptions(chunk[0].map((car) => {
                            return {
                                label: car,
                                value: car,
                                description: car,
                                emoji: '🛸'
                            }
                        }))

                    const row = new ActionRowBuilder()
                        .addComponents(select)

                    const next = new ButtonBuilder()
                        .setCustomId(`engine_next_page-` + 1 + ':' + value)
                        .setStyle('Primary')
                        .setLabel('หน้าถัดไป')

                    const prev = new ButtonBuilder()
                        .setCustomId(`engine_back_page-` + 0 + ':' + value)
                        .setStyle('Primary')
                        .setLabel('หน้าก่อนหน้า')
                        .setDisabled(true)

                    const row1 = new ActionRowBuilder()
                        .addComponents(prev, next)

                    const embed = new EmbedBuilder()
                        .setTitle(`เลือกรถหน้าที่ 1/${chunk.length} รถที่เลือก ${value}`)
                        .setColor(Config.main.embed.color)
                        .setFooter({ text: Config.main.embed.textfooter, iconURL: Config.main.embed.iconfooter })
                        .setTimestamp()
                    interaction.update({ components: [row, row1], embeds: [embed], ephemeral: true })
                })
            }

            if (interaction.customId.includes('choose_cars_engine:')) {
                const car_name = interaction.customId.split(':')[1]
                // console.log(car_name);
                // console.log(car_name);
                const engine = interaction.values[0]

                fs.readFile(`${__dirname}/../data/cars.json`, 'utf8', async (err, jsonString) => {

                    const data = JSON.parse(jsonString)
                    const engine_id = findItemsIdByStackId(data, 'engine_' + engine)
                    const car_id = findItemsIdByStackId(data, 'engine_' + car_name)

                    // console.log(engine_id);
                    // console.log(car_id);

                    const data_engine = data.d.data.cars.items[engine_id].tuning.cells["0"]

                    

                    data.d.data.cars.items[car_id].tuning.cells["0"] = data_engine
                    // console.log(data.d.data.cars.items[car_id]);
                    const newx = data.d.data.cars.items[car_id]
                    // console.log(data_engine);
                    let userId = interaction.user.id



                    fs.writeFileSync(`${__dirname}/../data/carcustom.json`, JSON.stringify(data));

                    const embed = new EmbedBuilder()
                        .setTitle(`กำลังทำการติดตั้งเครื่องยนต์ ${engine} ให้กับรถ ${car_name}`)
                        .setColor(Config.main.embed.color)
                        .setFooter({ text: Config.main.embed.textfooter, iconURL: Config.main.embed.iconfooter })
                        .setTimestamp()

                    interaction.update({ embeds: [embed], components: [], ephemeral: true })
                    fs.readFile(`${__dirname}/../data/cache.json`, 'utf8', async (err, jsonString) => {
                        const data_ = JSON.parse(jsonString)
                        const get_login = data_.userId
                        if (get_login != userId) return interaction.reply({ content: 'กรุณาเข้าสู่ระบบก่อนใช้งาน', ephemeral: true })

                        // console.log(data_.data.d.token);
                        const player_info = await fetch(Config.api.ProfilesApi, {
                            method: 'GET',
                            headers: {
                                "Content-Type": "application/json",
                                Authorization: "Bearer " + data_.data.d.token,
                                "User-Agent": "CarXStreet/626 CFNetwork/1399 Darwin/22.1.0",
                            },
                        })
                        // console.log(data_engine);
                        const player_result = await player_info.json();
                        player_result.d.data.cars.items[player_result.d.data.cars.seed] = newx
                        player_result.d.data.cars.seed = player_result.d.data.cars.seed += 1;
                        player_result.d.data.car_models.keys.push(car_name);
                        player_result.d.data.statistics = {
                            statistic_max_speed: {
                                amount: 1000.356
                            },
                            statistic_total_hard: {
                                amount: 499003500
                            },
                            statistic_total_soft: {
                                amount: 501611600
                            },
                            statistic_app_launches: {
                                amount: 4103
                            },
                            statistic_playing_time: {
                                amount: 1359149
                            },
                            statistic_total_distance: {
                                amount: 1489898000000
                            },
                            statistic_farm_time_races_won: {
                                amount: 1
                            },
                            statistic_tuning_nodes_installed: {
                                amount: 692
                            },
                            statistic_tuning_parts_installed: {
                                amount: 17494
                            },
                            statistic_farm_time_races_finished: {
                                amount: 32
                            },
                            statistic_simple_gasoline_consumed: {
                                amount: 9470.146
                            },
                            statistic_sports_gasoline_consumed: {
                                amount: 14640.41
                            },
                            statistic_farm_drift_races_finished: {
                                amount: 8
                            },
                            statistic_club_ring_races_compeleted: {
                                amount: 5
                            },
                            statistic_club_sprint_races_compeleted: {
                                amount: 14
                            },
                            statistic_farm_free_drift_races_finished: {
                                amount: 10
                            }
                        }
                        player_result.d.data.resources = {
                            hard: {
                                amount: 1000000
                            },
                            soft: {
                                amount: 1000000
                            },
                            experience: {
                                amount: 165000,
                                award_index: 49
                            },
                            total_loot_count: {
                                amount: 217
                            },
                            nickname_change_count: {
                                amount: 11
                            },
                            total_loot_soft_amount: {
                                amount: 298824
                            },
                            total_gas_station_enter: {
                                amount: 1269
                            },
                            total_club_race_completed: {
                                amount: 19
                            },
                            total_farm_race_completed: {
                                amount: 50
                            }
                        }
                        player_result.d.data.car_models.values.push(1);

                        const registerItem = await fetch(Config.api.ProfilesApi, {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json; charset=UTF-8",
                                Authorization: "Bearer " + data_.data.d.token,
                                "x-unity-version": "2021.3.19f1",
                                "User-Agent": "CarXStreet/708 CFNetwork/1474 Darwin/23.0.0",
                            },
                            body: JSON.stringify(player_result.d.data),
                        });
                        if (registerItem.status == 200) {
                            interaction.followUp({
                                content: `ทำการเปลี่ยนเครื่องรถแล้ว!`,
                                components: [],
                                ephemeral: true
                            })
                            fs.rmSync(`${__dirname}/../data/cache.json`)
                        } else {
                            interaction.followUp({
                                content: `เกิดข้อผิดพลาด!`,
                                components: [],
                                ephemeral: true
                            })
                        }
                    })





                })
            }
        }


    })
}

function findItemsIdByStackId(data, stackIdToFind) {
    const carsData = data.d.data.cars;

    for (const carId in carsData.items) {
        const car = carsData.items[carId];
        const tuningData = car.tuning;
        for (const cellId in tuningData.cells) {
            const cell = tuningData.cells[cellId];
            const stackId = cell.stack.id;
            if (stackId === stackIdToFind) {
                return carId;
            }
        }
    }
    return null;
}