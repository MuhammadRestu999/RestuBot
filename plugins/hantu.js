let axios = require("axios")

let handler = async(m, { conn, args }) => {
  let jumlah = Number(args[0]) != 0 ? Number(args[0]) : 1
  let res = await axios(global.API('chipa', '/api/primbon_hantu', null, "apikey"))
  let json = res.data

  if(json.status != 200) throw json

  let out = json.result

  let count = jumlah

  for(let js in out) {
    if(count == 0) return m.reply("Done")
    if(out[js].title == undefined) {
      conn.sendFile(m.chat, out[js].img, "", out[js].title, m)
    } else {
      conn.sendFile(m.chat, out[js].img, "", "", m)
    }
    count -= 1
  }
}

handler.help = ["hantu <jumlah> (def: 1)"]
handler.tags = ["random"]
handler.command = /^(hantu)/i

module.exports = handler
