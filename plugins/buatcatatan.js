// Created By Muhammad Restu



let handler = async(m, {conn, command, usedPrefix, text}) => {
  let fail = "format salah, example: " +usedPrefix+command+ " Todo|1. Masak"
  global.DATABASE.data.users[m.sender].catatan = global.DATABASE.data.users[m.sender].catatan || []
  let catatan = global.DATABASE.data.users[m.sender].catatan
  let split = text.split("|")
  let title = split[0]
  let isi = split[1]
  if (catatan.includes(title)) return m.reply("Judul tidak tersedia!\n\nAlasan: Sudah digunakan")
  if (!title || !isi) return m.reply(fail)
  let cttn = {
    "title": title,
    "isi": isi
  }
  global.DATABASE.data.users[m.sender].catatan.push(cttn)
  conn.reply(m.chat, `Catatan berhasil dibuat!\nUntuk melihat catatan. Tulis: +lihatcatatan`, m, false, {
    contextInfo: {
      mentionedJid: conn.parseMention(text)
    }
  })
}

handler.help = ["buatcatatan title|isi"]
handler.tags = ["other"]
handler.command = /^buatcatatan$/i

module.exports = handler


// Gak usah maling su
// Saia susah² bikinya
// Lu tinggal copas
// Kan anj
