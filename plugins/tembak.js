let handler = async(m, { conn, usedPrefix, command, text }) => {
  global.DATABASE.data.users[m.sender].pacar = global.DATABASE.data.users[m.sender].pacar || false
  if(/(tembak)/i.test(command)) {
    if(global.DATABASE._data.users[m.sender].pasangan) return m.reply("Lu udah nikah njir")
    if(conn.parseMention(text).length == 0 && m.mentionedJid.length == 0) {
      if(global.DATABASE.data.users[m.sender].pacar) return m.reply("Lu udah punya pacar coeg")
      return m.reply("Tag seseorang lah")
    } else {
      let tag = conn.parseMention(text).length != 0 ? conn.parseMention(text)[0] : m.mentionedJid[0]
      if(global.DATABASE.data.users[tag].ditembak) return m.reply("Dia udah ada yang nembak coeg")
      if(global.DATABASE.data.users[tag].pacar) return m.reply("Dia udah ada yang punya coeg")
      if(global.DATABASE.data.users[tag].pasangan) return m.reply("Dia udah nikah njir")
      if(global.DATABASE.data.users[m.sender].pacar) return m.reply("Lu udah punya pacar coeg")
      let str = `
Kamu sedang menenmbak *@${tag.split("@")[0]}*
Tunggu konfirmasi darinya :v

@${tag.split("@")[0]} pilih salah satu :
  +terima = menerima ajakannya
  +tolak = menolak ajakannya
`
      global.DATABASE.data.users[tag].ditembak = m.sender
      m.reply(str)
    }
  }
  if(/(terima)/i.test(command)) {
    if(global.DATABASE._data.users[m.sender].pasangan) return m.reply("Lu udah nikah njir")
    if(global.DATABASE.data.users[m.sender].ditembak != undefined) {
      if(global.DATABASE.data.users[global.DATABASE.data.users[m.sender].ditembak].pasangan) {
        m.reply("Kamu telat menerimanya!")
        global.DATABASE.data.users[m.sender].ditembak = undefined
      } else {
        global.DATABASE.data.users[m.sender].pacar = global.DATABASE.data.users[m.sender].ditembak
        global.DATABASE.data.users[global.DATABASE.data.users[m.sender].ditembak].pacar = m.sender
        global.DATABASE.data.users[m.sender].ditembak = undefined
        m.reply(`Kini @${m.sender.split("@")[0]} & @${global.DATABASE.data.users[m.sender].pacar.split("@")[0]} telah resmi berpacaran! :v`)
      }
    } else {
      m.reply(`Maaf @${m.sender.split("@")[0]}\nGak ada yang nembak kamu`)
    }
  }
  if(/(tolak)/i.test(command)) {
    if(global.DATABASE._data.users[m.sender].pasangan) return m.reply("Lu udah nikah njir")
    if(global.DATABASE.data.users[m.sender].ditembak != undefined) {
      m.reply(`@${global.DATABASE.data.users[m.sender].ditembak.split("@")[0]} Kamu telah ditolak :(`)
      global.DATABASE.data.users[m.sender].ditembak = undefined
    } else {
      m.reply("Gada yang nembak lu :v")
    }
  }
}


handler.help = ["tembak <tag>"]
handler.tags = ["fun"]
handler.command = /^(tembak|terima|tolak)/i

module.exports = handler
