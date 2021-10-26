let handler = async(m, { conn, args }) => {
  let tag = m.mentionedJid.length != 0 ? m.mentionedJid : args[0] ? conn.parseMention(args[0]) : m.quoted ? [ m.quoted.sender ] : ""
  if(tag == "") return m.reply("Tag seseorang!")
  for(let user of tag) await conn.groupMakeAdmin(m.chat, [user])
  conn.fakeReply(m.chat, "Berhasil menjadikan Admin", "0@s.whatsapp.net", '*🦊Berhasil menjadikan admin*')
}

handler.help = ["promote"].map(v => v + " @user")
handler.admin = true
handler.group = true

handler.botAdmin = true

handler.command = /^(promote)/i

module.exports = handler
