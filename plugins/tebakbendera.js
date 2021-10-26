const axios = require("axios")

let timeout = 100000
let poin = 5000
let handler  = async (m, { conn, usedPrefix }) => {
  if(m.sender.split("@")[0] != global.owner[0] && m.sender.split("@")[0] != global.mods[0]) return m.reply("Masih dalam perbaikan!")
  conn.tebakbendera = conn.tebakbendera || {}
  let id = m.chat
  if (id in conn.tebakbendera) {
    conn.reply(m.chat, "Masih ada soal belum terjawab di chat ini", conn.tebakbendera[id][0])
    throw false
  }
  let res = await axios("https://github.com/Rizxyu/game-bot/raw/main/Game/tebakbendera_ID.json")
  let json = await res.data
  json = json[Math.floor(Math.random() * json.length)]
  conn.tebakbendera[id] = [
    await conn.reply(m.chat, `Bendera: *${json.soal}*\nTimeout: *${(timeout / 1000).toFixed(2)} detik*\nKetik *${usedPrefix}tbhint* untuk hint\nBonus: ${poin} XP`, m),
    json, poin,
    setTimeout(() => {
      if (conn.tebakbendera[id]) conn.reply(m.chat, `Waktu habis!\n*${json.jawaban}*`, conn.tebakbendera[id][0])
      delete conn.tebakbendera[id]
    }, timeout)
  ]
}

handler.help = ["tebakbendera"]
handler.tags = ["game"]
handler.command = /^tebakbendera/i
module.exports = handler
