let fetch = require("node-fetch")
const { sticker } = require('../lib/sticker')
const { MessageType } = require('@adiwajshing/baileys')

let handler = async (m, { conn}) => {
  try {
    let res = await fetch('https://tobz-api.herokuapp.com/api/kiss?apikey=Tobzzz17')
    let json = await res.json()
    let { result } = json
    let stiker = await sticker(null, result, 'Kiss', 'Violet')
    conn.sendMessage(m.chat, stiker, MessageType.sticker, {
      quoted: m
    })
  } catch (e) {
    m.reply("Error! \n\n\n" + e.stack)
  }
}
handler.help = ['kiss']
handler.tags = ['expression']
handler.command = /^kiss/i
handler.register = true
handler.limit = true

module.exports = handler
