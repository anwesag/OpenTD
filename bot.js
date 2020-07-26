const botSettings = require("./botsettings.json");
const Discord = require("discord.js");

//Initialize bot
const bot = new Discord.Client();

bot.on("ready", async () => {
  console.log('Bot is ready! ' + bot.user.username);
  try {
    let link = await bot.generateInvite(["ADMINISTRATOR"]);
    console.log(link);
  } catch(e) {
    console.log(e);
  }
});

//Parse a message
bot.on("message", async message => {
});

bot.login(botSettings.token);
