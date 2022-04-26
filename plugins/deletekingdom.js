let { MessageType } = require('@adiwajshing/baileys')
let PhoneNumber = require('awesome-phonenumber')
let { buttonsMessage, contactsArray, image, MimeType } = MessageType
let handler = async (m, { conn, text, usedPrefix }) => {
  let kingdom = global.DATABASE.data.users[m.sender].kingdom
  if(!kingdom) return m.reply(`Kamu belum memiliki kerajaan!\n\nKetik *${usedPrefix}kingdom NamaRaja|NamaKerajaan|aliansi*\nuntuk membuat kerajaan`)
  delete global.DATABASE.data.users[m.sender].kingdom
  m.reply("Berhasil menghapus kerajaan!")
}

handler.help = ["deletekingdom", "hapuskerajaan"]
handler.tags = ['rpg']
handler.command = /^(deletekingdom|hapuskerajaan)/i

handler.owner = false
handler.register = false

module.exports = handler
