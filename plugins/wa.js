let { MessageType } = require('@adiwajshing/baileys')

let handler = async (m, { conn, text }) => {
  text = text.length != 0 ? text : "|"
  text = text.includes("|") ? text : text + "|"
  let pisah = text.includes(" | ") == true ? text.split(" | ") : text.split("|")
  let n = pisah[0].length != 0 ? pisah[0] : m.sender.split("@")[0]
  let k = pisah[1]
  k = encodeURIComponent(k)
  n = n.startsWith("08") ? n.replace("0", "62") : n
  n = n.startsWith("+62 ") ? n.split("+").join("").split(" ").join("").split("-").join("") : n
  let url = `https://wa.me/${n}${k.length != 0 ? "?text=" + k : ""}`
  conn.sendMessage(m.chat, url, MessageType.text)
}
handler.help = ['wa <num>|<text>']
handler.tags = ['main']
handler.command = ["wa"]

module.exports = handler
