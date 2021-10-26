let handler = async(m, { conn, usedPrefix, text }) => {
  conn.iklan = conn.iklan || {}
  if(m.sender in conn.iklan) return m.reply(`Kamu sudah membuat iklan!\nGunakan ${usedPrefix}hapusiklan untuk menghapus iklan`)
  let format = `${usedPrefix}iklan Ini contoh iklan!`
  if(!text || text.length <= 0) return m.reply(`Format salah!\n\n${format}`)

  conn.iklan[m.sender] = text

  m.reply("Berhasil membuat iklan!")
}

handler.help = ["iklan <text>"]
handler.tags = [""]

handler.command = /^(iklan)/i

module.exports = handler
