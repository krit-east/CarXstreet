const config = require('../../environments/config');
const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));
module.exports = {
    name: "getuser",
    description: "ดึงข้อมูลผู้เล่น",
    options: [

        {
            name: 'email',
            description: 'อีเมล',
            type: 3,
            required: true
        },
        {
            name: 'password',
            description: 'รหัสผ่าน',
            type: 3,
            required: true
        },

    ],
    run: async (client, interaction, args) => {

        if (!interaction.member.permissions.has('ADMINISTRATOR')) return interaction.reply({ content: 'คุณไม่มีสิทธิ์ใช้คำสั่งนี้', ephemeral: true })

        let email = interaction.options.getString('email');
        let password = interaction.options.getString('password');

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

        switch (Login.status) {
            case 401:
                await interaction.reply({ content: 'Sing in error: Unauthorized', ephemeral: true })
                break;
            case 500:
                await interaction.reply({ content: 'เกิดข้อผิดพลาด', ephemeral: true })
                break;
            case 200:
                const Loginx = await Login.json()
                await interaction.reply({ content: `Status: ${Login.status} Token: ||${Loginx.d.token}||`, ephemeral: true })
                break;
            default:
                await interaction.reply({ content: `Status: ${Login.status}`, ephemeral: true })
                break;
        }

        // interaction.reply({ content: `Status: ${Login.status}`, ephemeral: true })

    }
}