const token = ('seu_token_discord_aqui');


'use strict';
const Discord = require ('discord.js');
const { Client, MessageAttachment } = require('discord.js');
const bot = new Discord.Client();
const fs = require('fs');

//evitando erro de porta no heroku
var express = require('express');
const { title } = require('process');
var app     = express();

app.set('port', (process.env.PORT || 5000));

//For avoidong Heroku $PORT error
app.get('/', function(request, response) {
    var result = 'App is running'
    response.send(result);
}).listen(app.get('port'), function() {
    console.log('App is running, server is listening on port ', app.get('port'));
});

//começa o bot

bot.on('ready', () => {
    console.log('bot on!');
});

//boas vindas
bot.on('guildMemberAdd', (member) => {
    //let guild = client.guild.cache.get("id_do_servidor"); //ID SERVIDOR
    //let channel = client.channels.cache.get("id_do_canal"); //ID CANAL
    let channelID = 'id_do_canal';
    if(member.guild.id != 'id_do_servidor') return;
    let emoji = member.guild.emojis.cache.find(emoji => emoji.name === 'knife'); //emoji
    let embed = new Discord.MessageEmbed()
    .setAuthor(member.user.tag, member.user.displayAvatarURL())
    .setTitle (`${emoji} Bem vinda :) ${emoji}`)
    .setDescription(`${member.user.tag}, Bem vinda, investigadora! A sede da Criminal Mand Investigations está aberta para você explorar, sugerir, investigar e até dar uma conversada na copa!`)
    .addField('Canais', 'lembre-se de ler as regras do servidor: <#id_do_canal_de_regras> ')
    .setThumbnail(member.user.displayAvatarURL({dynamic: true, format: "png", size: 1024}))
    .setFooter('ID do usuário: '+ member.user.id)
    .setTimestamp();
    bot.channels.cache.get(channelID).send(embed)
})

//messages
bot.on('message', message => {
    //comandos
    if (message.content == '!comandos'){
        message.reply('A lista de comandos do bot é:');
        message.channel.send('!comandos // !ping // !serialjaneiro // !serialfevereiro // !serialmarço // !serialabril // !serialmaio // !serialjunho // !serialjulho // !serialagosto // !serialsetembro // !serialoutbro // !serialnovembro // !serialdezembro')
    }

    //ping pong
    if (message.content == 'ping'){
        message.reply('Pong!');
    }
    //janeiro
    if (message.content == '!serialjaneiro'){
    const buffer = fs.readFileSync('./serial/janeiro.txt');
    const attachment = new MessageAttachment(buffer, '/serial/janeiro.txt');
    message.channel.send('Aqui tem curiosidades sobre o serial killer de Janeiro!', attachment);
    message.channel.send('Dorothea Helen Puente (1929), EUA.')

    }

    //fevereiro
    if (message.content == '!serialfevereiro'){
    const buffer = fs.readFileSync('./serial/fevereiro.txt');
    const attachment = new MessageAttachment(buffer, '/serial/fevereiro.txt');
    message.channel.send('Aqui tem curiosidades sobre o serial killer de Fevereiro', attachment);
    message.channel.send('Shirley Winters (1958), EUA.')

    }
    //março
    if (message.content == '!serialmarço'){
    const buffer = fs.readFileSync('./serial/março.txt');
    const attachment = new MessageAttachment(buffer, '/serial/março.txt');
    message.channel.send('Aqui tem curiosidades sobre o serial killer de Março.', attachment);
    message.channel.send('Jane Toppan (1854), EUA.')
    }
    //abril
    if (message.content == "!serialabril"){
    const buffer = fs.readFileSync('./serial/abril.txt');
    const attachment = new MessageAttachment(buffer, '/serial/abril.txt');
    message.channel.send('Aqui tem curiosidades sobre o serial killer de Abril', attachment);
    message.channel.send('Dagmar Johanne Amalie Overbye (1887), Dinamarca.')
    }
    //maio
    if (message.content == '!serialmaio'){
    const buffer = fs.readFileSync('./serial/maio.txt');
    const attachment = new MessageAttachment(buffer, '/serial/maio.txt');
    message.channel.send('Aqui tem curiosidades sobre o serial killer de Maio', attachment);
    message.channel.send('Catherine Margaret Birnie (1951), Austrália.')
    }
    //junho
    if (message.content == '!serialjunho'){
    const buffer = fs.readFileSync('./serial/junho.txt');
    const attachment = new MessageAttachment(buffer, '/serial/junho.txt');
    message.channel.send('Aqui tem curiosidades sobre o serial killer de Junho', attachment);
    message.channel.send('Olga Hepnarová (1951), Checoslováquia.')
    }
    //julho
    if (message.content == '!serialjulho'){
    const buffer = fs.readFileSync('./serial/julho.txt');
    const attachment = new MessageAttachment(buffer, '/serial/julho.txt');
    message.channel.send('Aqui tem curiosidades sobre o serial killer de Julho', attachment);
    message.channel.send('Myra Hindley (1942), UK.')
    }
    //agosto
    if (message.content == '!serialagosto'){
    const buffer = fs.readFileSync('./serial/agosto.txt');
    const attachment = new MessageAttachment(buffer, '/serial/agosto.txt');
    message.channel.send('Aqui tem curiosidades sobre o serial killer de Agosto', attachment);
    message.channel.send('Condessa Elizabeth Báthory de Ecsed (1560), Hungria')
    }
    //setembro
    if (message.content == '!serialsetembro'){
    const buffer = fs.readFileSync('./serial/setembro.txt');
    const attachment = new MessageAttachment(buffer, '/serial/setembro.txt');
    message.channel.send('Aqui tem curiosidades sobre o serial killer de Setembro', attachment);
    message.channel.send(' Ilse Koch (1906), Alemanha.')
    }
    //outubro
    if (message.content == '!serialoutubro'){
    const buffer = fs.readFileSync('./serial/outubro.txt');
    const attachment = new MessageAttachment(buffer, '/serial/outubro.txt');
    message.channel.send('Aqui tem curiosidades sobre o serial killer de Outubro', attachment);
    message.channel.send('Mary Ann Cotton (1832), UK.')
    }
    //novembro
    if (message.content == '!serialnovembro'){
    const buffer = fs.readFileSync('./serial/novembro.txt');
    const attachment = new MessageAttachment(buffer, '/serial/novembro.txt');
    message.channel.send('Aqui tem curiosidades sobre o serial killer de Novembro', attachment);
    message.channel.send('Belle Gunness (1859), Noruega.')
    }
    //dezembro
    if (message.content == '!serialdezembro'){
    const buffer = fs.readFileSync('./serial/deembzro.txt');
    const attachment = new MessageAttachment(buffer, '/serial/dezembro.txt');
    message.channel.send('Aqui tem curiosidades sobre o serial killer de Dezembro', attachment);
    message.channel.send('Margarita Sánchez Gutiérrez (1953), Espanha.')
    }
});

bot.login(token);