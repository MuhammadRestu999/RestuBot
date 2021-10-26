let handler = async (m, { conn, args, usedPrefix }) => {
  let tag = m.mentionedJid.length != 0 ? m.mentionedJid : args[0] ? conn.parseMention(args[0]) : m.quoted ? [ m.quoted.sender ] : ""
  if(tag == "") return m.reply("Tag seseorang!")
  for(let user of tag) await conn.groupDemoteAdmin(m.chat, [user])
  conn.fakeReply(m.chat, "Berhasil menjadikan Member", "0@s.whatsapp.net", '*🦊Berhasil menjadikan Member*')
}

handler.help = ["demote"].map(v => v + " @user")
handler.admin = true
handler.group = true

handler.botAdmin = true

handler.command = /^(demote)/i

module.exports = handler
