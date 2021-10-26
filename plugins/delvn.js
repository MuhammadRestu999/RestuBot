let fs = require("fs")

let handler = async(m, { conn, text }) => {
  if(fs.readdirSync("./audio/").length == 0) return m.reply("Tidak ada audio!")
  if(!text || text.length == 0) {
    let str = "Tersedia :\n\n"
    str += fs.readdirSync("./audio/").join("\n").split(".mp3").join("")
    m.reply(str)
  } else {
    if(!fs.existsSync("./audio/" + text + ".mp3")) return m.reply("File tidak ditemukan!")
    fs.unlinkSync("./audio/" + text + ".mp3")
    m.reply("Berhasil!")
  }
}

handler.help = ["delvn <nama_file>"]
handler.tags = ["database"]
handler.command = /^(delvn)/i

module.exports = handler
