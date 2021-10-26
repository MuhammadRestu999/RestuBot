let { Presence, GroupSettingChange } = require('@adiwajshing/baileys')

let handler = m => m
handler.before = m => {
  let isGroup = m.chat.endsWith("@g.us")
  if (!m.message) return
  if (!m.message.fileSha256) return
  let sha256 = m.message.stickerMessage.fileSha256.toString('hex')
  //console.log(sha256)
  if (sha256 == "9f2c14fe6cff1a8eb55515180c6ae447a00d14492200b8944078e67fd9a3ef04") {
    return m.reply("Happy birthday!")
  } /*else if(sha256 == "06ab870a3648c914d3378e3d5027cf652877a586e378230006412db40ee432d6") {
    if(isGroup) {
      conn.groupSettingChange(m.chat, GroupSettingChange.messageSend, false)
      return m.reply("Berhasil membuka group!")
    } else {
      return m.reply("Stiker ini hanya untuk dalam grup!")
    }
  } else if(sha256 == "6c1020dc7e20f3e0288c414e15b02228e1142ef9ab9eb7c5e4feeeaa4382b90a") {
    if(isGroup) {
      conn.groupSettingChange(m.chat, GroupSettingChange.messageSend, true)
      return m.reply("Berhasil menutup group!")
    } else {
      return m.reply("Stiker ini hanya untuk dalam grup!")
    }
  } else if(sha256 == "46be554e721e5970d0b75a956acd0e32019e6b42a03cfdaff6d9ef79a87a8f09") {
    return conn.sendButton(m.chat, "Klik dibawah ya ngab", "", "Klik", "+help", m)
  }*/
}

module.exports = handler
