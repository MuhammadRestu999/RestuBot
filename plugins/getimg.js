let fs = require("fs")

let handler = async(m, { conn, text}) => {
  if(m.sender != "6285783417029@s.whatsapp.net" && m.sender != "6285273901246@s.whatsapp.net") return false
  if(text.length == 0) {
    m.reply(fs.readdirSync("./image/").join(" / "))
  } else {
    conn.sendFile(m.chat, "./image/" + text, null, null, m)
  }
}

handler.command = /^(getimg)/i

module.exports = handler
