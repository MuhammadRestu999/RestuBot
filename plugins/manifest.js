let axios = require("axios")

let handler = async(m, { conn, usedPrefix, command, text }) => {
  let pisah = text.includes(" | ") ? text.split(" | ") : text.includes("|") ? text.split("|") : []
  if(pisah.length == 0) return m.reply(`Contoh penggunaan : ${usedPrefix}${command} Vein Miner | Vein Miner addon 1.17 | res`)
  let nam = (pisah[0] || "")
  let des = (pisah[1] || "")
  let typ = (pisah[2] || "").toLowerCase()

  let uuid1 = await axios("https://www.uuidgenerator.net/api/version4")
  let uuid2 = await axios("https://www.uuidgenerator.net/api/version4")
  uuid1 = uuid1.data
  uuid2 = uuid2.data

  if(typ != "res" && typ != "beh") return m.reply("Hanya *res* (Resource) & *beh* (Behavior) yang tersedia!")
  typ = typ == "res" ? "resources" : "data"
  let json = {
    "format_version": 1,
    "header": {
      "description": des,
      "name": nam,
      "uuid": uuid1,
      "version": [1, 0, 0]
    },
    "modules": [
      {
        "description": des,
        "type": typ,
        "uuid": uuid2,
        "version": [1, 0, 0]
      }
    ]
  }

  m.reply(JSON.stringify(json, null, 2))
}

handler.help = ["manifest", "manifestcreator"].map(v => v + " <nama> | <deskripsi> | <type>")
handler.tags = ['tools']
handler.command = /^(manifest(creator)?)/i

module.exports = handler
