let axios = require("axios")

let handler = async(m, { conn, usedPrefix, command, text }) => {
  let nama = text.includes(" | ") ? text.split(" | ") : text.includes("|") ? text.split("|") : 123
  if(nama === 123) return m.reply("Format salah!\n\nContoh : " + usedPrefix + command + " A | B")

  let { data } = await axios(`https://api.chipa.xyz/api/primbon_kecocokan?nama1=${nama[0]}&nama2=${nama[1]}&apikey=G1CN40W5CXAX47VCMAFZ443L`)

  if(data.status != 200) throw data

  let result = data.result

  conn.sendFile(m.chat, result.pic, null, `*Nama kamu :* ${result.nama}\n*Nama pasangan :* ${result.pasangan}\n\n\nPositif :\n${result.positif}\n\nNegatif :\n${result.negatif}\n\n${result.keterangan}`, m)
}

handler.help = ["jodoh <nama1> | <nama2>"]
handler.tags = ["kerang"]
handler.command = /^(jodoh)/i

module.exports = handler
