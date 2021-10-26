let axios = require("axios")

let handler = async(m, { conn }) => {
  let res = await axios("https://github.com/Rizxyu/game-bot/raw/main/random/Ppcp.json")
  let json = res.data
  let jsn = json[Math.floor(Math.random() * json.length)]
  let img1 = jsn.url
  let img2 = jsn.url2

  conn.sendFile(m.chat, img1, "cowo.jpg", "Cowok", m)
  conn.sendFile(m.chat, img2, "cewe.jpg", "Cewek", m)
}

handler.command = /^(ppc?(ouple|p)?)/i

module.exports = handler
