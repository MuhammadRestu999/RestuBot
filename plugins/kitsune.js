let fetch = require("node-fetch")
const { sticker } = require('../lib/sticker')
const { MessageType } = require('@adiwajshing/baileys')

let handler = async (m, { conn}) => {
  try {
    let res = await fetch('https://neko-love.xyz/api/v1/kitsune')
    let json = await res.json()
    let { url } = json
    let stiker = await sticker(null, url, 'Create By RestuBot\nOwner : Muhammad Restu', '')
    conn.sendMessage(m.chat, stiker, MessageType.sticker, {
      quoted: m
    })
  } catch (e) {
    return m.reply("Error!\n\n\n" + e.stack)
  }
}
handler.help = ['kitsune']
handler.tags = ['expression']
handler.command = /^kitsune/i
handler.register = true
handler.limit = true

module.exports = handler
