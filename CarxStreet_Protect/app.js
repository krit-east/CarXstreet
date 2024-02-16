const { Client, REST, Routes, Collection } = require('discord.js')
const config = require('./environments/config')
const client = new Client({ intents: 32767 })
// const { EventInteration } = require('./components/EventInteration.component')
// const { EventLoader } = require('./components/EventLoader.component')
const fs = require('fs')
client.on('ready', () => {
    console.log('[READY] ' + client.user.tag + ' Is ready\n[READY] Server name ' + client.guilds.cache.get(config.bot.guild).name)

    const status = config.bot.status
    client.user.setPresence({ activities: [{ name: status.text, type: status.type }], status: status.status })

})

client.commands = new Collection();

const handler = fs.readdirSync('./components').filter(file => file.endsWith('.js'));
for (const file of handler) {
    require(`./components/${file}`)(client, REST, Routes, config);
}

// EventInteration(client, REST, Routes, config);
// EventLoader(client, REST, Routes, config);

client.login(config.bot.token)
