let fetch = require("node-fetch")

let timeout = 120000
let poin = 2500
let handler  = async (m, { conn, usedPrefix }) => {
    return m.reply("Command ini sedang di nonaktifkan dengan alasan: Command masih rusak")
    conn.susunkata = conn.susunkata ? conn.susunkata : {}
    let id = m.chat
    if (id in conn.susunkata) {
        conn.reply(m.chat, "Masih ada soal belum terjawab di chat ini", conn.susunkata[id][0])
        throw false
    }
    let res = await fetch("https://raw.githubusercontent.com/BochilTeam/database/master/games/susunkata.json")
    let json = await res.json()
    json = json[Math.floor(Math.random() * json.length)]
    let caption = `
*「 Susun Kata 」*
Tipe: ${json.tipe}
Soal: "${json.soal}"
Timeout *${(timeout / 1000).toFixed(2)} detik*
Ketik *${usedPrefix}skhint* untuk bantuan
Bonus: Rp${poin}
    `.trim()
    conn.susunkata[id] = [
      await conn.reply(m.chat, caption, m),
      json, poin,
      setTimeout(() => {
        if (conn.susunkata[id]) conn.reply(m.chat, `Waktu habis!\nJawabannya adalah *${json.result.jawaban}*`, conn.susunkata[id][0])
        delete conn.susunkata[id]
      }, timeout)
    ]
  }
  handler.help = ["susunkata"]
  handler.tags = ["game"]
  handler.command = /^susunkata/i
  
  
  module.exports = handler
