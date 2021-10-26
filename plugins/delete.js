let handler = function (m) {
  if (!m.quoted) throw false
  let { chat, fromMe, id, isBaileys } = m.quoted
  if (!fromMe) throw 'Pesan tersebut bukan dikirim oleh bot!'
  if (!isBaileys) throw 'Pesan tersebut bukan dikirim oleh bot!'
  this.deleteMessage(chat, {
    fromMe,
    id,
    remoteJid: chat
  })
}
handler.help = ['del', 'delete']
handler.tags = ['info']

handler.command = /^d(el(ete)?)?$/i

module.exports = handler
