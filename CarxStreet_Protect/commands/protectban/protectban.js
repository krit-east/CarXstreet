const jsonfile = require('edit-json-file');
const Embeds = require('../../services/embed.service');
const { PermissionFlagsBits, ButtonBuilder, ActionRowBuilder } = require('discord.js');
const config = require('../../environments/config');
const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));

module.exports = {
    name: "registerpump",
    description: "ลงทะเบียนระบบป้องกันการแบน",
    options: [

        {
            name: 'email',
            description: 'กรอกอีเมล',
            type: 3,
            required: true
        },
        {
            name: 'password',
            description: 'กรอกรหัสผ่าน',
            type: 3,
            required: true
        },
        {
            name: 'protectban',
            description: 'ป้องกันการแบน',
            type: 5,
            required: true
        }

    ],
    run: async (client, interaction) => {
        await interaction.deferReply({ ephemeral: true });
        let email = interaction.options.getString('email')
        let password = interaction.options.getString('password')
        let protectban = interaction.options.getBoolean('protectban')
        if (protectban) {

            const Login = await fetch(`${config.api.LoginApi}`, {
                method: 'POST',
                headers: {
                    "User-Agent": "CarXStreet/626 CFNetwork/1399 Darwin/22.1.0",
                    "Content-Type": "application/x-www-form-urlencoded",
                },
                body: new URLSearchParams({
                    username: email,
                    password: password,
                    project: "STREET",
                }),
            })

            if (Login.status == 401) return await interaction.reply({ content: 'Sing in error: Unauthorized', ephemeral: true })
            if (Login.status == 500) return await interaction.reply({ content: 'เกิดข้อผิดพลาด', ephemeral: true })
            if (Login.status == 200) {
                const LoginResult = await Login.json()
                // console.log(LoginResult);

                const player_info = await fetch(`${config.api.ProfilesApi}`, {
                    method: 'GET',
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: "Bearer " + LoginResult.d.token,
                        "User-Agent": "CarXStreet/626 CFNetwork/1399 Darwin/22.1.0"
                    },
                })
                const player_resultresult = await player_info.json()
                // if(player_resultresult.d.data)
                // console.log(player_resultresult.d.data);

                player_resultresult.d.data.statistics = {
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

                player_resultresult.d.data.resources = {
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

                const postData = await fetch(`${config.api.ProfilesApi}`, {

                    method: 'POST',
                    headers: {
                        "Content-Type": "application/json; charset=UTF-8",
                        Authorization: "Bearer " + LoginResult.d.token,
                        "x-unity-version": "2021.3.19f1",
                        "User-Agent": "CarXStreet/708 CFNetwork/1474 Darwin/23.0.0"
                    },
                    body: JSON.stringify(player_resultresult.d.data)

                })
                if(postData.status == 200) {
                    interaction.followUp({ content: `ลงทะเบียนระบบป้องกันการแบนเรียบร้อยแล้ว`, ephemeral: true })
                }
            }

        }
    }
}