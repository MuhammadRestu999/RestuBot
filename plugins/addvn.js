let fs = require("fs")

let handler = async(m, { conn, text }) => {
  if(!m.quoted) return m.reply("Tag audionya!")
  if(m.quoted.mtype && m.quoted.mtype != "audioMessage") return m.reply("Target bukan audio!")
  if(!text || text.length == 0) return m.reply("Masukan nama file!")

  if(m.quoted && m.quoted.mtype && m.quoted.mtype == "audioMessage" && m.quoted.download) {
    let audio = await m.quoted.download()
    fs.createWriteStream("./audio/" + text + ".mp3")
    fs.writeFileSync("./audio/" + text + ".mp3", audio)
    if(fs.existsSync("./audio/" + text + ".mp3")) {
      m.reply("Berhasil!")
    } else {
      m.reply("Gagal!")
    }
  } else {
    m.reply("Error!")
  }
}

handler.help = ["addvn <nama_file>"]
handler.tags = ["database"]
handler.command = /^(addvn)/i

module.exports = handler
