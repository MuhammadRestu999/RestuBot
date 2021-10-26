let handler = async (m, { conn, text, usedPrefix }) => {
  if (text.length == 0) return m.reply("Example: +bahasapurba Halo")
  let teks = text.split(" ")
  let out = ""
  for (let ts of teks) {
    if(ts != "?" || ts != "(" || ts != ")" || ts != "{" || ts != "}" || ts != "[" || ts != "]" || ts != "$" || ts != "|" || ts != "<" || ts != "\\" || ts != "/" || ts != ">" || ts != "=" || ts != "~" || ts != "-") {
      out += ts + "tos "
    } else {
      continue
    }
  }
  m.reply(out)
}

handler.help = ['bahasapurba']
handler.tags = ['other']
handler.command = /^(bahasapurba)/i

handler.owner = false
handler.register = false

module.exports = handler
