const axios = require("axios")

let handler = async(m, { conn }) => {
  let { data } = await axios("https://github.com/Rizxyu/Rizx-Json/raw/main/random/cecan.json")
  let url = data[Math.floor(Math.random() * data.length)]

  conn.sendFile(m.chat, url.url, null, "[ ❗ ] Sudah Jadi Nih we")
}

handler.help = ['cecan']
handler.tags = ['internet']
handler.command = /^(cecan)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.register = true

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0
handler.limit = true

module.exports = handler
