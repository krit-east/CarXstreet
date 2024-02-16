const { Routes } = require('discord.js');
const fs = require('fs');

module.exports = async (client, REST, Routes, config) => {

    const rest = new REST({ version: '10' }).setToken(config.bot.token);

    let data = [];

    let commands = fs.readdirSync('./commands')
    for (const dir of commands) {
        const command = fs.readdirSync(`./commands/${dir}/`).filter(file => file.endsWith('.js'));
        for (const file of command) {
            const pull = require(`../commands/${dir}/${file}`);
            if (!pull.name) return console.log(`[ERROR] ไม่พบชื่อคำสั่งใน ${pull.type}`);
            if (!pull.description) return console.log(`[ERROR] ไม่พบคำอธิบายใน ${pull.name}`);
            client.commands.set(pull.name, pull);
            data.push(pull);
        }
    }

    client.on('ready', async () => {

        await rest.put(Routes.applicationCommands(client.user.id), { body: data });
        console.log('[READY] Success load commands')
        await data.shift()

    })
}