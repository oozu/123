module.exports = {
    name : "ping",
    aliases : [ "latencta", "ns" ],
    desc : "Sirve para ver la latencia del Bot",
    run : async (client , message , args , prefix) => {
       message.reply(`Pong! El ping del Bot es de \`${client.ws.ping}ms\``)
     }
   }