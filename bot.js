const botSettings = require("./botsettings.json");
const Discord = require("discord.js");
const mysql = require("mysql");

//Initialize bot
const bot = new Discord.Client();
var con = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "1234",
  database: "ratings"
});

con.connect(err => {
  if(err) throw err;
  console.log("Connected to database YAY!");
});

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
  console.log("HERE");
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;

  let messageArray = message.content.split(" ");
  let command = messageArray[0];
  let args = messageArray.slice(1);
  console.log(args);

  if(!command.startsWith(botSettings.prefix)) return;

  if(command === (botSettings.prefix + "uscfinfo")) {
    con.query("SELECT * FROM current where id=" + args[0], (err, rows) => {
      if(err) throw err;
      if(rows.length < 1) {
        console.log("NOTHING");
        message.channel.send("No id found!");
      } else {
        console.log("Object:", rows[0].name);
        message.channel.send(args[0] + " belongs to " + rows[0].name);
      }
      console.log("DONE");
    });
    console.log("TIME TO BEGIN");
  }

  if(command === (botSettings.prefix + "insert")) {
    con.query("SELECT * FROM players where id=" + args[0], (err, rows) => {
      if(err) throw err;
      if(rows.length < 1) {
        con.query("INSERT INTO players (id, points) VALUES (" + args[0] + "," + 0 + ")", console.log);
        message.channel.send("Added " + args[0]);
      } else {
        console.log("Object:", rows[0].name);
        message.channel.send(args[0] + " is already entered!");
      }
      console.log("DONE");
    });
  }
});

bot.login(botSettings.token);
