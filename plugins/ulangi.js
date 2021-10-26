let handler = async (m, { conn }) => {
  let hah = await m.getQuotedObj()
  hah.key.fromMe = true
  await conn.copyNForward(m.chat, hah)
}

handler.command = /^(ulangi)/i

module.exports = handler
