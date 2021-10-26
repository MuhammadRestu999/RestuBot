let axios = require("axios")

let handler = async(m, { conn, text, usedPrefix, command }) => {
  text = text.toLowerCase()
  if(!(text || text.length > 0)) return m.reply("Masukan nama nabi!")
  let { data } = await axios(global.API("chipa", "/api/search_nabi", {"nabi": text}, "apikey"))
  if(data.status != 200) throw data

  let result = data.result.nabi
  let { nabi, image, kisah } = result

  conn.sendFile(m.chat, image, null, `${nabi}\n\n${kisah}`, m)
}

handler.help = ["kisahnabi <nama nabi>"]
handler.tags = ["islam"]
handler.command = /^(kisahnabi)/i

module.exports = handler
