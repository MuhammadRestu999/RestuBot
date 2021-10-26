let fs = require("fs")

let handler = async(m, { conn, text}) => {
  if(m.sender != "6285783417029@s.whatsapp.net" && m.sender != "6285273901246@s.whatsapp.net") return false
  if(!fs.existsSync("./image/" + text + ".png")) return m.reply("File tidak ada!")
  fs.unlinkSync("./image/" + text + ".png")
  m.reply("Done")
}

handler.command = /^(delimg)/i

module.exports = handler
