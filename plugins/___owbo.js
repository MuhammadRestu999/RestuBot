let handler = m => m
handler.before = m => {
  if (!m.message) return
  if (!m.msg.fileSha256) return
  if(m.mentionedJid.includes("6285783417029@s.whatsapp.net") || m.mentionedJid.includes("6285273901246@s.whatsapp.net")) {
    m.reply(`Kenapa @${m.sender.split("@")[0]}?`)
  }
}

module.exports = handler
