let handler  = async (m, { conn, args, usedPrefix, command }) => {
  try {
  if(args.length == 0) return m.reply(`Format salah!\nUsage: ${usedPrefix}${command} *On / Off*`)
  if(args[0] != "on" && args[0] != "off") return m.reply(`Format salah!\nUsage: ${usedPrefix}${command} *On / Off*`)

  if(global.DATABASE.data.chats[m.chat].antiRasis == undefined) global.DATABASE.data.chats[m.chat].antiRasis = false
  if(args[0].toLowerCase() == "on") {
    if(global.DATABASE.data.chats[m.chat].antiRasis == true) return m.reply("Padahal sudah aktif")
    global.DATABASE.data.chats[m.chat].antiRasis = true
    m.reply("Berhasil mengaktifkan Anti Rasis pak!")
  } else if(args[0].toLowerCase() == "off") {
    if(global.DATABASE.data.chats[m.chat].antiRasis == false) return m.reply("Padahal sudah nonaktif")
    global.DATABASE.data.chats[m.chat].antiRasis = false
    m.reply("Berhasil menonaktifkan Anti Rasis pak!")
  }
  } catch(err) {
    m.reply("Error!\n\n" + err.stack)
  }
}

handler.help = ['antirasis *on / off*']
handler.tags = ['']
handler.command = /^(antirasis)/i
handler.group = true
handler.admin = true

module.exports = handler
