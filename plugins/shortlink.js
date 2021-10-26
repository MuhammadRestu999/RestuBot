let axios = require('axios')
let handler = async (m, { conn, command, args }) => {
  if (!args[0]) return conn.reply(m.chat, 'Tidak ada url', m)
  let url = args[0]
  let link = `https://tinyurl.com/api-create.php?url=${encodeURIComponent(url)}`
  let { data } = await axios(link)
  m.reply(data)
}
handler.help = ['shortlink'].map(v => v + ' <url>')
handler.tags = ['internet']
handler.command = /^(short|shortlink)/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
