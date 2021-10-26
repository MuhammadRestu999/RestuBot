let fs = require("fs")

let handler = async(m, { conn, text }) => {
  if(fs.readdirSync("./audio/").length == 0) return m.reply("Tidak ada audio!")
  if(!text || text.length == 0) {
    let str = "Tersedia :\n\n"
    str += fs.readdirSync("./audio/").join("\n").split(".mp3").join("")
    m.reply(str)
  } else {
    if(!fs.existsSync("./audio/" + text + ".mp3")) return m.reply("File tidak ditemukan!")
    conn.sendFile(m.chat, "./audio/" + text + ".mp3", null, null, m)
  }
}

handler.help = ["getvn <nama_file>"]
handler.tags = ["database"]
handler.command = /^(getvn)/i

module.exports = handler
