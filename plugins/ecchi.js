let fetch = require('node-fetch')
let handler = async(m, { conn }) => {
  let res = await fetch('https://api.waifu.pics/nsfw/waifu')
  if (!res.ok) throw await res.text()
  let json = await res.json()
  if (!json.url) throw 'Error!'
  conn.sendFile(m.chat, json.url, '', '', m)
}
handler.help = ['ecchi']
handler.command = /^(ecchi)$/i
handler.tags = ['internet']
handler.register = true
handler.limit = 5
handler.private = true
//MADE IN ERPAN 1140 BERKOLABORASI DENGAN BTS
module.exports = handler
