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

client.on("guildMemberAdd", member => {
  member.send("Salut à toi!"); // Envoi du message privé au nouveau membre
  const channel = client.channels.find(r => r.name === "general-bot"); // récupération du salon general-bot
  channel.send(`${member} a rejoint le serveur !`); // Envoi du message log de connexion du nouveau membre au salon general-bot
});

client.login(TOKEN); // login du client instancié du bot au serveur discord

// -----------------------------------

client.on("ready", () => console.log("Je suis prêt !")); // traitement de l'évent BotOnline
client.on("error", console.error); // traitement de l'évent Erreur
client.on("warn", console.warn); // traitement de l'évent Avertissement
client.on("debug", console.debug); // traitement de l'évent Debug
