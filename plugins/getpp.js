let { MessageType } = require("@adiwajshing/baileys")

let handler = async (m, { text }) => {
  let orng = conn.parseMention(text).length != 0 ? conn.parseMention(text) : m.mentionedJid.length != 0 ? m.mentionedJid : undefined
  if(orng == undefined) return m.reply("Tag seseorang lah")
  try {
    let pp = await conn.getProfilePicture(orng[0])
    conn.sendFile(m.chat, pp, 'p.jpg', 'Ini hasilnya!', m)
  } catch(err) {
    m.reply("Error!")
  }
}
handler.help = ['getpp [tag]']
handler.tags = ['main']
handler.command = /^get(pp|profile)$/i

module.exports = handler
