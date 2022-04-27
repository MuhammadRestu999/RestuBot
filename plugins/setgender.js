let handler = async(m, { conn, text, usedPrefix, command }) => {
  if(!(text || text[0])) return m.reply(`Example: ${usedPrefix+command} <cowok|cewek>`)
  global.DATABASE._data.users[m.sender].gender = text === "cowok" ? "Cowok" : text === "cewek" ? "Cewek" : ""
  if(global.DATABASE._data.users[m.sender].gender == "") {
    m.reply("Format salah!")
    return global.DATABASE._data.users[m.sender].gender = undefined
  }
  m.reply("Sukses!")
}

handler.help = ["setgender", "aturgender"].map(v => v + " <cowok|cewek>")
handler.tags = ["main"]

handler.command = /^((set|atur)?gender)/i

module.exports = handler
