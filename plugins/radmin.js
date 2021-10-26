let handler = async(m, { conn }) => {
  let gc = m.chat
  let radmin = gc.split("-")[0]
  let str = `\nPencipta group ini adalah @${radmin}\n`

  m.reply(str)
}

handler.help = ["radmin"]
handler.tags = ["other"]
handler.group = true

handler.command = /^(radmin|realadmin)/i

module.exports = handler
