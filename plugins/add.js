let handler = async(m, { conn, args }) => {
  let tag = m.mentionedJid.length != 0 ? m.mentionedJid : args[0] ? conn.parseMention(args[0]) : m.quoted ? [ m.quoted.sender ] : ""
  if(tag == "") return m.reply("Tag seseorang!")
  for(let user of tag) await conn.groupAdd(m.chat, [user])
  conn.fakeReply(m.chat, "Berhasil add Member", "0@s.whatsapp.net", '*🦊Berhasil menambahkan orang*')
}

handler.help = ["add"].map(v => v + " @user")
handler.admin = true
handler.group = true

handler.botAdmin = true

handler.command = ["add"]

module.exports = handler
