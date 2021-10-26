let handler = async(m, { conn, usedPrefix, command, text }) => {
  let args = text.includes(" | ") ? text.split(" | ") : text.includes("|") ? text.split("|") : []
  let cth = `Contoh penggunaan : ${usedPrefix}${command} contoh 1|contoh 2`
  if(args.length == 0) return m.reply(cth)
  if(args.length == 1) return m.reply(cth)

  let out = args[Math.floor(Math.random() * args.length)]

  m.reply(out)
}

handler.command = /^(rand?(om)?select)/i

module.exports = handler
