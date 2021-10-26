let handler = async(m, { conn, usedPrefix, command, args }) => {
  text = args[0] || ""
  if(text.toLowerCase() == "multi") {
    global.prefix = /^(\+|-|\/|%|\?|!|#|:|.)/i
    m.reply("Sukses mengubah prefix bot menjadi multi prefix!")
  } else if(text.toLowerCase() == "random") {
    let rand = ["+", "/", "%", "#", "&", "?", "!", "."]
    global.prefix = rand[Math.floor(Math.random() * rand.length)]
    m.reply("Sukses mengubah prefix menjadi \"" + global.prefix + "\"!")
  } else if(text != "") {
    global.prefix = text
    m.reply("Sukses mengubah prefix menjadi \"" + global.prefix + "\"!")
  } else {
    m.reply(`Example : \`\`\`${usedPrefix}${command} +\`\`\``)
  }
}

handler.command = /^((set|atur)?prefix)/i
handler.rowner = true
handler.mods = true

module.exports = handler
