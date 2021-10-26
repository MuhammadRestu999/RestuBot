const fs = require("fs")

let handler = async(m, { conn, usedPrefix, command }) => {
  let json = JSON.parse(fs.readFileSync("./json/heker.json"))
  json = json[Math.floor(Math.random() * json.length)]

  conn.sendButton(m.chat, json, "", "Next", `${usedPrefix}${command}`, m)
}

handler.command = /^(hekerbucin)/i

module.exports = handler
