const express = require("express")
const app = express()

app.get("/", (req, res) => {
 res.send("hello hell!")
})

app.listen(3000, () => {
 console.log("Whatever you want to put here")
})
let Discord = require("discord.js")
let client = new Discord.Client

client.on("ready", () => {
  client.user.setPresence({ activity: { name: "Ninja Server" }})
})

client.on("guildMemberAdd", member => {
const myServer = "816470581452079114"; 
const welcomeChannel = "819118549476835328";
 if(member.guild.id === myServer) {
 client.channels.cache.get(welcomeChannel).send(`<a:W_:826014675312967701> <a:E_:826014675619282975> <a:L_:826014675472613417> <a:C_:826014675496861706> <a:O_:826014676667596810> <a:M_:826014675363692596> <a:E_:826014675619282975> ${member}! enjoy your stay`)
 }
})

client.on("guildMemberAdd", member => {
const myServer = "811413031606681642"; 
const welcomeChannel = "813632518871056404";
 if(member.guild.id === myServer) {
 client.channels.cache.get(welcomeChannel).send(`Welcome ${member}!`)
 }
})

client.on("message", message => {
if(message.content === "+Ping") {
  message.channel.send("Pong") 
}
if(message.content === "+embed") {
  let embed = new Discord.MessageEmbed() 
  .setTitle("embed title")
  .setDescription("embed Description")
  .setColor("RANDOM")
  .setAuthor("Author Embed")
  .setFooter("Footer")
  message.channel.send(embed)
}
  if(message.content.toLowerCase() === "+nameme") {
let nicknames = [
"idot",
"pink guy",
"person",
"stupid man",
"Epic Ninja",
"Nice Guy"
]; 
let yourNickname = nicknames[Math.floor(Math.random()*nicknames.length)];
message.channel.send(`${yourNickname} is your new nickname!`)
};
  if(message.content.startsWith("+kill")) {
 let victim = message.mentions.users.first()
 if(!victim) message.reply("Mention someone to Kill Like a normal Person Idiot")
 else{
 message.channel.send(`${victim} Got Brutalized. Get Rekt`)
 }
 }
  if (message.content.startsWith("+kick")) {
 if (message.member.hasPermission("KICK_MEMBERS")) {
 let member = message.mentions.members.first()
 if (!member) message.channel.send("Please mention someone")
 else {
 member.kick().then(mem => {
 message.channel.send(`Kicked ${mem.user.username}!`)
 })
 }
 } else {
 message.reply("You don't have the permission to do that...")
 }
 }
  if (message.content.startsWith('+ban')) {
if(message.member.hasPermission("BAN_MEMBERS")) {
 const user = message.mentions.users.first();
 
 if (user) {
 
 const member = message.guild.member(user);

 if (member) {

 member
 .ban({
 reason: 'They were bad!',
 })
 .then(() => {
 // We let the message author know we were able to ban the person
 message.reply("Successfully banned ${user.tag}");
 })
 .catch(err => {

 message.reply("I was unable to ban the member");
 
 console.error(err);
 });
 } else {
 
 message.reply("That user isn't in this guild!");
 }
 } else {
 
 message.reply("You didn't mention the user to ban!");
 }
 }
}
  if(message.content.startsWith("+unban")) {
let args = message.content.split(" ").slice(1);
const id = args[0];
message.guild.members.unban(id);
}
  if(message.content.startsWith("+mute")) {
 if(message.member.hasPermission("ADMINISTRATOR")) {
 let member = message.mentions.members.first()
 if(!member) message.channel.send("mention someone to mute!")
 else {
 member.roles.add("YOUR MUTED ROLE ID HERE")
 message.channel.send("Member has been succesfully muted.")
 }

 }else {
 message.reply("You don't have permission to do that!")
 }
}
  if(message.content.startsWith("+unmute")) {
 if(message.member.hasPermission("ADMINISTRATOR")) {
 let member = message.mentions.members.first()
 if(!member) message.channel.send("mention someone to unmute!")
 else {
 member.roles.remove("Muted role id here")
 message.channel.send("Member has been succesfully unmuted.")
 }

 }else {
 message.reply("You don't have permission to do that!")
 }
}
if(message.content === "+Hello") {
  message.channel.send("HELLO")
}
if(message.content === "+invite") {
  message.channel.send("https://discord.com/api/oauth2/authorize?client_id=816470444537806879&permissions=8&scope=bot")
}
if(message.content === "+embed hello") {
  let embed = new Discord.MessageEmbed() 
  .setTitle("what")
  .setDescription("Whatever")
  .setColor("RANDOM")
  .setAuthor("Xd")
  .setFooter("Footer")
  message.channel.send(embed)
}
if(message.conent === "im sad") {
  message.channnel.send("don't be sad")
}
 if(message.content.startsWith(`+dm`)){
 const whattosend = message.content.slice("".length).trim().split(/ +/);
whattosend.shift().toLowerCase().split(" ")[1]
const member = message.mentions.members.first() || message.guild.members.cache.get(whattosend[0])
if(!member) return message.channel.send('Provide a user!')
if(!whattosend[1]) return message.channel.send('What do you want to send to them?')
member.send(whattosend.slice(1).join(" "))
}
if(message.content === "testmoji") {
  message.channel.send("<:__:822372684707921920>")
}
if(message.content === "amoji") {
  message.channel.send("<:Logo:823357363817545729>")
}
const https = require('https');
 const url = 'https://www.reddit.com/r/memes/hot/.json?limit=100';

 if (message.content.startsWith('+meme')) {
 https.get(url, result => {
 var body = '';
 result.on('data', chunk => {
 body += chunk;
 });

 result
 .on('end', () => {
 var response = JSON.parse(body);
 var index =
 response.data.children[Math.floor(Math.random() * 99) + 1].data;

 var link = 'https://reddit.com' + index.permalink;

 if (index.post_hint !== 'image') {
 var text = index.selftext;
 const textembed = new Discord.MessageEmbed()
 .setTitle(`${title}`)
 .setColor('RANDOM')
 .setURL(link);

 message.channel.send(textembed);
 }

 var image = index.preview.images[0].source.url.replace('&amp;', '&');
 var title = index.title;
 var subRedditName = index.subreddit_name_prefixed;

 if (index.post_hint !== 'image') {
 const textembed = new Discord.MessageEmbed()
 .setTitle(`${title}`)
 .setColor('RANDOM')
 .setURL(link);

 message.channel.send(textembed);
 }
 const imageembed = new Discord.MessageEmbed()
 .setTitle(`${title}`)
 .setImage(image)
 .setColor('RANDOM')
 .setURL(link);
 message.channel.send(imageembed);
 })
 .on('error', function(e) {
 console.log('Got an error: ', e);
 });
 });
 }
 if(message.content === "+help") {
   let embed = new Discord.MessageEmbed()
   .setTitle("MY COMMANDS")
   .setDescription("\n ****:rofl: FUN*** \n `+kill` `+nameme` `+ping` `+Ping +embed` `+dm` `+smart` \n ***:hammer: MODERATION*** \n `+ban` `+kick` `+mute` \n ***:wrench: UTILITY*** \n `+whois` `+serverinfo` `+howcool`")
   .setColor("BLUE")
   .setFooter("THERE")
   message.channel.send(embed)
 }
 if(message.content === "+serverinfo") {
 let embed = new Discord.MessageEmbed()
 .setColor("RANDOM")
 .setTitle("Server Info")
 .setImage(message.guild.iconURL)
 .setDescription(`${message.guild}'s Information.`)
 .addField("Member Count", `This server has ${message.guild.memberCount} member(s).`)
 .addField("Emoji Count", `This server has ${message.guild.emojis.cache.size} emoji(s).`)
 .addField("Roles Count", `This server has ${message.guild.roles.cache.size} role(s).`)
 message.channel.send(embed)
}
if(message.content.startsWith("+howcool")) {
 let gayrate = ["0%", "9%", "19%", "25%", "98%", "96%", "5%", "63%", "43%", "36%", "67%", "61%", "52%", "59%", "77%", "84%", "81%", "12%", "100%", "21%"]
 let victim = message.mentions.users.first()
 if(!victim) message.reply("Mention Someone to cool rate.")
else{
 message.channel.send(`${victim}  ${gayrate[Math.floor(Math.random() * gayrate.length)]} cool :cool: `)
 }
}
if(message.content.startsWith("+smart")) {
 let gayrate = ["0%", "9%", "19%", "25%", "98%", "96%", "5%", "63%", "43%", "36%", "67%", "61%", "52%", "59%", "77%", "84%", "81%", "12%", "100%", "21%"]
 let victim = message.mentions.users.first()
 if(!victim) message.reply("Mention Someone smart rate.")
else{
 message.channel.send(`${victim}  ${gayrate[Math.floor(Math.random() * gayrate.length)]} cool :cool: `)
 }
}
if(message.content.toLowerCase().startsWith("+whois")) {
let user = message.mentions.users.first() || message.author;
let member = message.mentions.members.first() || message.member;
let e = new Discord.MessageEmbed()
.setColor("#C724B1")
.setTimestamp()
.addFields({
name: "User Joined Server At",
value: member.joinedAt
}, {
name: "User Created At",
value: user.createdAt
}, {
name: "User Name & Tag",
value: user.tag
}, {
name: "User ID",
value: user.id
})
.setThumbnail(user.displayAvatarURL({ dynamic: true }))
message.channel.send(e);
};
if(message.content.startsWith("+purge")){
let arg = message.content.split(" ")
if(message.member.hasPermission("MANAGE_MESSAGES")) {
let clear = arg[1];
if(!clear) return message.channel.send(`:x: | \`Incorrect usage of command you need to provide an amount of messages to Clear.\` 
**Example:** \`_purge 50\` `)
if(isNaN(clear)) return message.channel.send(":x: | ``Please Put a Valid Number to Clear messages.``")
if(clear > 100) return message.channel.send(":x: | ``I can't Clear more than 100 messages.``")
if(clear < 1) return message.channel.send(":x: | ``You cannot Clear less than 1 message.``")

message.channel.bulkDelete(clear)
message.channel.send(`:white_check_mark: | \`Succesfully cleared ${clear} messages! | If purge fails please make sure I have MANAGE_MESSAGES to make the purge seccessful.\` `)
.then(message => 
 message.delete({timeout: 10000})
 )
}else{
message.reply("You dont have perms!")
} 
}
 if(message.content.toLowerCase() === "+verify") {
let role = message.guild.roles.cache.find(role => role.name === "Member")
message.member.roles.add(role)
let embed = new Discord.MessageEmbed()
 .setTitle("Verified")
 //.setAuthor("Bot_Name Verify", "You_Can_add_Image_Here")
// .setThumbnail("You_can_add_image_here")
 .setDescription('Now U Can See All Visible Channel')
 
.setColor("BLUE")
 .setFooter('Verified')
 
 message.channel.send(embed)
  .then(msg => {
    msg.delete({ timeout: 5000 })
//1000 = 1 sec
//5000 = 5 sec
//10000 = 10 sec
  })
 }
});

client.login(process.env.TOKEN)