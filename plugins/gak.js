let { MessageType } = require('@adiwajshing/baileys')


let handler = async (m, { conn, usedPrefix }) => {
  conn.sendButton(m.chat, "Anda yakin ingin melanjutkan?\nPeraturan anda dilarang mengirim chat selama 2 menit.\nJika anda menang. Maka anda akan mendapatkan level tambahan 10", "Yakin?", "Ya", "+gagaga")
}
handler.command = /^(GakNgapaNgapain|gakngapangapain)$/i
handler.register = true
module.exports = handler
