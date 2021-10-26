let fetch = require("node-fetch")

let handler = async(m, { conn, command, text }) => {
  if(command == "upsw") {
    conn.sendMessage("status@broadcast", text + "\n\n\n-RestuBot", "conversation")
    m.reply("Done!")
  } else if(command == "upswgambar") {
    if(m.quoted && m.quoted.url) {
      conn.sendFile("status@broadcast", await(await fetch(m.quoted.url)).buffer(), "", "")
      m.reply("Done!")
    } else {
      m.reply("Tag gambarnya!")
    }
  }
}

handler.command = /^(upsw|upswgambar)/i
handler.rowner = true
handler.mods = true

module.exports = handler
