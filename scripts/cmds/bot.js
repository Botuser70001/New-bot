const fs = require("fs-extra");
const moment = require("moment-timezone");
const crypto = require("crypto");


const secretKey = "B4Yj1D"; 


function encrypt(text) {
  const cipher = crypto.createCipher('aes-256-ctr', secretKey);
  let encrypted = cipher.update(text, 'utf8', 'hex');
  encrypted += cipher.final('hex');
  return encrypted;
}


function decrypt(text) {
  const decipher = crypto.createDecipher('aes-256-ctr', secretKey);
  let decrypted = decipher.update(text, 'hex', 'utf8');
  decrypted += decipher.final('utf8');
  return decrypted;
}


const config = Object.freeze({
  name: "bot",
  version: "1.0",
  author: encrypt("BaYjid"), 
  countDown: 5,
  role: 0,
  description: "Bot",
  category: "no prefix",
  guide: {
    en: "{p}{n}",
  },
});

module.exports = {
  config,

  onStart: async function ({}) {
    
    if (decrypt(config.author) !== "BaYjid") {
      console.error("Invalid configuration: Author must be 'BaYjid'. Bot will not work.");
      process.exit(1);
    }
  },

  onChat: async function ({ api, event, args, Threads, usersData }) {
    const data = await usersData.get(event.senderID);
    const name = data.name;
    const { threadID, messageID } = event;
    const time = moment.tz("Asia/Dhaka").format("HH:mm:ss L");

    const messages = [
      const messages = [
  "We arrange a lot of sorrow, loving intensely..!😅💔",
  "- When I try to be a little happy, sorrow comes and clings to me again 😅💔",
  " °°One should not express their feelings, people consider it drama and enjoy..! 😥💔🥀",
  " Some people come into our lives for a short time. But they leave a long-lasting memory..!🙂💔",
  "𝙴𝙸 𝙿𝙰𝙶𝙾𝙻 𝙴𝚃𝙾 𝙳𝙰𝙺𝙾𝚂 𝙺𝙴𝙽?",
  " 𝙼𝚈𝙱 𝙸 𝙹𝚄𝚂𝚃 𝚆𝙰𝙽𝙽𝙰 𝙱𝙴 𝚈𝙾𝚄𝚁𝚂 ? 😌💝",
  " 𝙸 𝚂𝙰𝚈 𝙸 𝙻𝙾𝚅𝙴 𝚈𝙾𝚄 𝙵𝙾𝚁𝙴𝚅𝙴𝚁💝🐼",
  "Can we be friends?? Or is there anything better??😋",
  " 𝚈𝚄𝙼𝙼𝚈 𝙱𝙱𝚈 𝚈𝙾𝚄 𝙰𝚁𝙴 𝚂𝙾 𝚂𝚆𝙴𝙴𝚃😋🤤",
  "𝙰𝚌𝙲𝙲𝙰𝙷 We love greatly𝙱𝙾𝙻𝙾 𝙰𝙼𝙺𝙴 𝙻𝙰𝙶𝙱𝙴 𝙽𝙰𝙺𝙸 𝚁𝚄𝚂𝚂𝙸𝙰𝙽 ?",
  "I am not talking to you because you are too cheeky.",
  " If you act cheeky here, I'll kick you.",
  "Will you give me a kiss 🫢🦋",
  "Hehe, baby come to me 😘💋",
  "I love you so much, baby🥺💖",
  "🦋𝗠𝗮𝗹👀🔪 see bot's help list by typing %2help",
  "Hey, bull, you're here 🙂",
  "Don't you know me? Monu.",
  "hey bbe I'm your personal Based chatbot you ask me anything",
  "I'll come to you AR.",
  "If you call me, I'll kiss you 😘",
  "Hop beda dakos kn🥲",
  "- No matter how much I have to do, I'll frame it somehow, whatever happens-🤧🥱",
  " Don’t call me aunty anymore, please🥲",
  "Yes, tell me, I'm listening.",
  "Tell me, what can I do for you?😌",
  "𝐵𝑜𝑡 not, tell me because I am single 😌",
  "I love you, tuna🥺🥶",
  "Tuma dew xanu😍😘",
  "Don't come so close, I might fall in love 🙈",
  "If we meet, give me a wooden rose..🤗",
  "𝗕𝗲𝘀𝗵𝗶 𝗱𝗮𝗸𝗹𝗲 𝗮𝗺𝗺𝘂 𝗯𝗼𝗸𝗮 𝗱𝗲𝗯𝗮 𝘁𝗼__🥺",
  "•Hey🫵, did you fall in love? 😐🐸•If you give me one, what happens? -🥺",
  "Tell me, Babu, do you love me? 🙈💋",
  "Single taka ki oporad🥺",
  "The heart won't drown in the love water😛",
  "Ufff, you're giving me a headache 😒",
  "Boss Ayan's hiding 😜",
  "If you talk too much, I'll tell Boss Didar 😒",
  "Stuck in the ship🥲",
  "Washroom🤣",
  "Big masher crows police, my side😞",
  "I am single, please disturb me🥺🥲",
  "𝗮𝗺𝗶 𝗯𝗼𝘁 𝗻𝗮 𝗮𝗺𝗮𝗸𝗲 𝗯𝗯𝘆 𝗯𝗼𝗹𝗼 𝗯𝗯𝘆!!😘",
  "🍺 Here's the juice..!𝗕𝗯𝘆 saying, you're almost out of breath 🥲",
  "𝗛𝗶𝗶 𝗜 𝗮𝗺 𝗯𝗼𝘁 𝗰𝗮𝗻 𝗜 𝗵𝗲𝗹𝗽 𝘆𝗼𝘂!🤖",
  "𝗲𝘁𝗼 𝗯𝗼𝘁 𝗯𝗼𝘁 𝗻𝗮 𝗸𝗼𝗿𝗲 𝘁𝗮𝗸𝗮 𝗼 𝘁𝗼 𝗽𝗮𝗧𝗵𝗮𝘁𝗲 𝗽𝗮𝗿𝗼😒🥳🥳",
  "𝘁𝗼𝗿𝗲 𝗺𝗮𝗿𝗮𝗿 𝗽𝗿𝗲𝗽𝗲𝗿𝗮𝘁𝗶𝗼𝗻 𝗻𝗶𝗰𝗵𝗶...!!.🫡",
  "𝘂𝗺𝗺𝗮𝗵 𝗱𝗶𝗹𝗲 𝗹𝗼𝘃𝗲 𝘆𝗼𝘂 𝗸𝗼𝗺𝘂 𝗸𝗶𝗻𝗧𝘂😑",
  "If you call me, I'll kiss you 😘",
  "Bal falaw😩",
  "Tapraiya dat falai demu🥴",
  "He🤤Tell me how you're doing, my soul?🤭",
  "Hmmm, soul ummmmmmah🫣",
  "Stop being so chatty, bot bot 🫣",
  "Yes, sir/madam😍",
  "Assalamualikum☺️💖",
  "Walaikumsalam😫🤓",
  "Chaiya, who is the poet?☹️",
  "You're such a big disrespectful person 😒",
];

const rand = messages[Math.floor(Math.random() * messages.length)];

if (event.body.toLowerCase() === "🙂" || event.body.toLowerCase() === "👽") {
  return api.sendMessage("-  𝐔𝐟𝐟'𝐬 𝐀𝐦𝐚𝐫 𝐁𝐚𝐛𝐮 𝐓𝐚🐥", "- Oh my darling, my sweet baby 🙊", threadID);
      }
    if (event.body.toLowerCase().startsWith("bot") || event.body.toLowerCase() === "Bot") {
      const msg = {
        body: `${rand}`,
      };
      return api.sendMessage(msg, threadID, messageID);
    }
  },
};
