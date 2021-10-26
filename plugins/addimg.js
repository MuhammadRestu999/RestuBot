let fs = require("fs")

let handler = async(m, { conn, text}) => {
  if(m.sender != "6285783417029@s.whatsapp.net" && m.sender != "6285273901246@s.whatsapp.net") return false
  if(fs.existsSync("./image/" + text + ".png")) return m.reply("File sudah ada!")
  fs.createWriteStream("./image/" + text + ".png")
  fs.writeFileSync("./image/" + text + ".png", await m.quoted.download())
  m.reply("Done")
}

handler.command = /^(addimg)/i

module.exports = handler
