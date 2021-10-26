let handler = async (m, { conn, text, participants }) => {
  let users = participants.map(u => u.jid)
  m.reply("          *⟨ TAG ALL ⟩*\n\n" + text + '\n\n----------------------------------------\n' + users.map(v => '@' + v.replace(/@.+/, '')).join`\n`, null, {
    contextInfo: { mentionedJid: users }
  })
}
handler.command = ['tagall']

handler.admin = true
handler.group = true
handler.register = true

module.exports = handler
