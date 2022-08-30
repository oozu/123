const Discord = require('discord.js')
const config = require('./config/config.json')
require('colors')
const client = new Discord.Client({
    intents: [
        Discord.GatewayIntentBits.Guilds,
        Discord.GatewayIntentBits.GuildMessages,
        Discord.GatewayIntentBits.GuildMembers,
    ],
    partials: [Discord.Partials.User, Discord.Partials.Channel, Discord.Partials.GuildMember, Discord.Partials.Message]
})

client.commands = newDiscord.collection();
client.aliases = newDiscord.collection();

function requerirhandlers(){
    ["command", "events"].forEach(handler => {
        try {
            require(`./handlers/${handler}`)(client, Discord)
        }catch(e){
            console.warn(e)
        }
    })

}
requerirhandlers();

client.login(config.token)