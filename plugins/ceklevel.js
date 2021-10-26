let levelling = require('../lib/levelling')

let handler = (m, { conn, text }) => {
  if (m.quoted) {
    let user = global.DATABASE.data.users[m.quoted.sender]
    let { min, max } = levelling.xpRange(user.level, user.exp, global.multiplier)
    return m.reply(`Level @${m.quoted.sender.split("@")[0]} :\n  Lvl : ${user.level}\n  Exp : ${min} / ${max}`)
  } else if(conn.parseMention(text)[0] != undefined) {
    let user = global.DATABASE.data.users[conn.parseMention(text)[0]]
    let { min, max } = levelling.xpRange(user.level, user.exp, global.multiplier)
    return m.reply(`Level @${conn.parseMention(text)[0].split("@")[0]} :\n  Lvl : ${user.level}\n  Exp : ${min} / ${max}`)
  } else {
    let user = global.DATABASE.data.users[m.sender]
    let { min, max } = levelling.xpRange(user.level, user.exp, global.multiplier)
    return m.reply(`Level @${m.sender.split("@")[0]} :\n  Lvl : ${user.level}\n  Exp : ${min} / ${max}`)
  }
}

handler.help = ["ceklevel <tag|Biarkan kosong untuk diri sendiri>"]
handler.tags = ["rpg"]
handler.command = /^(ceklevel|ceklvl)/i

module.exports = handler
