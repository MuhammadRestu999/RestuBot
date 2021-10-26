let axios = require("axios")

let handler = async(m, { conn }) => {
  let res = await axios("https://api.waifu.pics/sfw/neko")
  let json = res.data
  let url = json.url

  conn.sendFile(m.chat, url, null, null, m)
}

handler.command = /^(neko)/i
handler.private = true
handler.register = true

module.exports = handler
