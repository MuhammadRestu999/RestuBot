let handler = m => m
handler = async function (m) {
  let id = m.chat
  if (!m.quoted || !m.quoted.fromMe || !m.quoted.isBaileys || !/Ketik.*hint/i.test(m.quoted.text)) return !0
  conn.tebakgambar = conn.tebakgambar ? conn.tebakgambar : {}
  if (!(id in conn.tebakgambar)) return false
  if (m.quoted.id == conn.tebakgambar[id][0].id) {
    let ans = conn.tebakgambar[m.chat][1].result.jawaban.toLowerCase()
    let clue = ans.replace(/[bcdfghjklmnpqrstvwxyz]/g, '_')
    m.reply("Dalam gambar : " + JSON.parse(JSON.stringify(conn.tebakgambar[m.chat][1].result.deskripsi)) + "\n```" + clue + "```")
  }
  return !0
}

handler.help = ['hint']
handler.tags = ['tebakgambar']
handler.command = /^hint/i
handler.exp = 0
module.exports = handler
