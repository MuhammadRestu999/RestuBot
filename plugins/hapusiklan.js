let { MessageType } = require("@adiwajshing/baileys")

let handler = async(m, { conn, isOwner, text }) => {
  conn.iklan = conn.iklan || {}
  let akses = isOwner || global.mods.includes(m.sender.split("@")[0])

  if(akses && text === "semua") {
    let ikln = Object.keys(conn.iklan)
    for(let jid of ikln) conn.sendMessage(jid, "Iklan anda telah dihapus oleh owner / mods!", MessageType.text)
    conn.iklan = {}
    m.reply("Sukses menghapus iklan!")
  } else if(akses && text.endsWith("@s.whatsapp.net")) {
    if(!conn.iklan[text]) return m.reply("Pengguna belum membuat iklan!")
    conn.sendMessage(text, "Iklan anda telah dihapus oleh owner / mods!", MessageType.text)
    delete conn.iklan[m.text]
    m.reply("Sukses menghapus iklan!")
  } else {
    if(!conn.iklan[m.sender]) return m.reply("Kamu belum memiliki iklan!")
    delete conn.iklan[m.sender]
    m.reply("Sukses menghapus iklan!")
  }
}

handler.help = ["hapusiklan"]
handler.tags = [""]

handler.command = /^(hapusiklan)/i

module.exports = handler
