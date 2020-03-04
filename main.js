const { Client } = require("discord.js"); // ajout de la librairie disocrd.js
const { TOKEN, PREFIX } = require("./config"); // configuration via le fichier config.js
const client = new Client({ disableEveryone: true }); // instanciation du client discord.js et exlusion des messages @EveryOne depuis le bot

client.on("message", msg => { // traitement de l'évent NouveauMessage
  if (msg.author.bot) return; // exclusion du message du bot
  const args = msg.content.split(/ +/g); // séparation en argument de tous les groupes de mots issus d'une même commande
  const cmd = args.shift().toLowerCase(); // suppression du préfixe de la commande
  if (cmd === `${PREFIX}ping`) msg.channel.send("Pong!");
  if (cmd === `${PREFIX}pong`) msg.channel.send("Ping!");
});

client.login(TOKEN); // login du client instancié du bot au serveur discord

// -----------------------------------

client.on("ready", () => console.log("Je suis prêt !")); // traitement de l'évent BotOnline
