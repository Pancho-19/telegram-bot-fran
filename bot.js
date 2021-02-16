const { Telegraf } = require('telegraf')

const bot = new Telegraf('TOKEN BOTFATHER') //TOKEN del BotFather de telegram

//Comandos del BOT

bot.start((ctx) => {
    ctx.reply('Bienvenido al bot de Francisco Freire.');
})

bot.help((ctx) => {
    ctx.reply('Estos son los comandos disponibles:\n"/fran, /autor, /bot, @frannfreire, /encuesta, /cuestionario"');
})

bot.command(['fran', 'autor', 'bot'], (ctx) => {
    ctx.reply('Visita mi página web: https://franfreire.com');
    ctx.replyWithPhoto('https://imgur.com/SoZpBq6');
})

bot.mention('frannfreire', (ctx) => {
    ctx.reply('No menciones al admin 😡😡');
})
   
bot.command('encuesta', (ctx) =>
    ctx.replyWithPoll(
    'Encuesta de Prueba', //Título de la encuesta
    ['Opción 1', 'Opción 2', 'Opción 3', 'Opción 4', 'Opción 5'], //Opciones de la encuesta
    { is_anonymous: false } //Puedes ponerlo en true si quieres que sea anónimo
    )
  )
  
bot.command('cuestionario', (ctx) =>
    ctx.replyWithQuiz(
    'Cuestionario de Prueba 2', //Título del cuestionario
    ['Verdadero', 'Falso'], //Opciones del cuestionario
    { correct_option_id: 0, //Opción correcta
    is_anonymous: false } //Puedes ponerlo en true si quieres que sea anónimo
    )
  )

bot.launch() //Ejecuta el bot