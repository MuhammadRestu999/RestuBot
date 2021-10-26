let axios = require("axios")

let handler = async(m, { conn }) => {
  let res = await axios("https://api.waifu.pics/nsfw/waifu")
  let json = res.data
  let url = json.url

  conn.sendFile(m.chat, url, "hentai.png", "Huuu sagnean", m)
}

handler.command = /^(nsfw|hentai)/i
handler.private = true
handler.register = true

module.exports = handler
