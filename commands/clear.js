const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("You do not have permission to do that!");
  if(!args[0]) return message.channel.send("Couldn't do that!");
  message.channel.bulkDelete(args[0]).then(() => {
  message.channel.send(`Cleared ${args[0]} messages for you! :)`).then(msg => msg.delete(2000));
});

}

module.exports.help = {
  name: "clea"
}
