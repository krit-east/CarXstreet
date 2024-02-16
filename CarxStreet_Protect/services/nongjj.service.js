const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));
const { v4: uuidv4 } = require('uuid');
const config = require('../environments/config');
const { registerData } = require('../services/register.service');
const Message = require('../services/log.service');
async function CreateUser(interaction, email, password, username, client) {
    await interaction.deferReply({ ephemeral: true });
    // console.log(email, password, username);

    const Login = await fetch(`${config.api.RegisterApi}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
            deviceId: uuidv4(),
            username: email,
            password: password,
            project: "STREET",
        }),
    })

    if (Login.status == 401) return await interaction.followUp({ content: 'Sing in error: อีเมลและรหัสผ่านผิด', ephemeral: true })
    if (Login.status == 500) return await interaction.followUp({ content: 'เกิดข้อผิดพลาด', ephemeral: true })

    if (Login.status == 200) {
        const Loginx = await Login.json()  
        registerData.nickname = username
        
        const registerItem = await fetch(`${config.api.ProfilesApi}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json; charset=UTF-8",
                "Authorization": "Bearer " + Loginx.d.token,
                "x-unity-version": "2021.3.19f1",
                "User-Agent": "CarXStreet/708 CFNetwork/1474 Darwin/23.0.0",
            },
            body: JSON.stringify(registerData),
        });
        if (registerItem.status == 200) {
            // console.log('success');
            Message.LogRegister(`ลงทะเบียนกันแบนสำเร็จ Email: ${email} Password: ${password} Username: ${username}`, client)
            interaction.followUp({ content: `ลงทะเบียนกันแบนสำเร็จ Email: ${email} Password: ${password} Username: ${username}`, ephemeral: true })
        }
    }

}

async function ProtectUser(interaction, email, password, client) {
    await interaction.deferReply({ ephemeral: true });

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

    if (Login.status == 401) return await interaction.followUp({ content: 'Sing in error: อีเมลและรหัสผ่านผิด', ephemeral: true })
    if (Login.status == 500) return await interaction.followUp({ content: 'เกิดข้อผิดพลาด', ephemeral: true })
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

        player_resultresult.d.data.statistics = {
            statistic_max_speed: {
                amount: 1000.356
            },
            statistic_total_hard: {
                amount: 499003500
            },
            statistic_total_soft: {
                amount: 502068300
            },
            statistic_app_launches: {
                amount: 4126
            },
            statistic_playing_time: {
                amount: 1397151
            },
            statistic_total_distance: {
                amount: 1489898000000
            },
            statistic_farm_time_races_won: {
                amount: 1
            },
            statistic_tuning_nodes_installed: {
                amount: 706
            },
            statistic_tuning_parts_installed: {
                amount: 17819
            },
            statistic_farm_time_races_finished: {
                amount: 32
            },
            statistic_simple_gasoline_consumed: {
                amount: 10122.49
            },
            statistic_sports_gasoline_consumed: {
                amount: 15250.21
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
                amount: 99964840
            },
            soft: {
                amount: 79805100
            },
            experience: {
                amount: 93060,
                award_index: 49
            },
            total_loot_count: {
                amount: 242
            },
            nickname_change_count: {
                amount: 10
            },
            total_loot_soft_amount: {
                amount: 326660
            },
            total_gas_station_enter: {
                amount: 1284
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
            Message.LogRegister(`ลงทะเบียนระบบป้องกันการแบนเรียบร้อยแล้ว`,client)
            interaction.followUp({ content: `ลงทะเบียนระบบป้องกันการแบนเรียบร้อยแล้ว`, ephemeral: true })
        }
    }

}

module.exports = {
    CreateUser,
    ProtectUser
}