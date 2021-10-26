const fs = require("fs")

let handler = async(m, { conn, usedPrefix, command, text }) => {
  let args = text.includes(" | ") ? text.split(" | ") : text.includes("|") ? text.split("|") : []
  if(!args[0]) return m.reply("Nama? ")
  if(!args[1]) return m.reply("Tag? (gunakan titik koma untuk memisahkan)")
  if(!args[2]) return m.reply("Kode? ")


  let filename = args[0]
  let tag = `[${args[1]}]`.split("[").join("[\"").split(",").join("\",\"").split("]").join("\"]")
  if(fs.existsSync("./plugins/" + filename + ".js")) return m.reply(`${filename} sudah ada!`)

  let cmd = args[2]

  let str = `let handler = async(m, { conn, usedPrefix, command, text }) => {
  ${cmd}
}

handler.tags = ${tag}
handler.command = /^(${filename})/i

module.exports = handler`

  fs.createWriteStream("./plugins/" + filename + ".js")
  fs.writeFileSync("./plugins/" + filename + ".js", str)
  m.reply("Done!")
}

handler.command = /^(addcmd)/i

module.exports = handler
