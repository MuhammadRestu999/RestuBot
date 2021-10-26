let axios = require("axios")
let handler = async (m, { conn, text }) => {

let res = await axios(`https://api-zeeoneofc.herokuapp.com/api/jadwalshalat?kota=${text}&apikey=Alphabot`)
json = res.data

if (json.status == false) throw `Error\n\n${json.message}`

let tanggal = new Date().getDate()

conn.reply( m.chat, `${json.result[tanggal - 1].tanggal}

Imsyak : ${json.result[tanggal - 1].imsyak}
Shubuh : ${json.result[tanggal - 1].shubuh}
Dzuhur : ${json.result[tanggal - 1].dzuhur}
Ashar : ${json.result[tanggal - 1].ashr}
Maghrib : ${json.result[tanggal - 1].magrib}
Isya : ${json.result[tanggal - 1].isya}`, m)
}

handler.help = ['jadwalsolat <daerah>']
handler.tags = ['quran']
handler.command = /^(jadwalsholat|jadwalsolat)$/i

module.exports = handler

