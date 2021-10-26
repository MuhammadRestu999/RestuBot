let handler = async(m, { conn, text }) => {
  if(text.length <= 1) return m.reply("Serius?...")
  let reverse = ""
  reverse = text.split("")
  reverse = reverse.reverse()
  reverse = reverse.join("")

  if(reverse == text) return m.reply(`Hasil : ${reverse}\n\nKamu menemukan kata yang tidak dapat dibalik!`)
  m.reply("Hasil : " + reverse)
}

handler.help = ["balik <teks>"]
handler.tags = [""]
handler.command = /^(balik)/i

module.exports = handler
