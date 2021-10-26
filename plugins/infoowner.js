let handler = async(m, { conn, command, usedPrefix, text }) => {
  let d = new Date()
  let th = d.getFullYear()
  let bl = [1,2,3,4,5,6,7,8,9,10,11,12][d.getMonth()]
  let tg = d.getDate()
  if(bl >= 11 && tg >= 8) {
    umur = th - 2008
  } else {
    umur = th - 2008 - 1
  }

  if(text.length == 0) return m.reply(`Penggunaan : ${usedPrefix}${command} <kode rahasia>\n\nKode rahasia yang tidak rahasia (Eh gimana?):\n 1. oname334 (Nama owner)\n 2. onumber741 (Nomor hp owner)\n\nGacha: ${Math.floor(Math.random() * 999)}\n\nCuma segitu :v`)
  let k = text.toLowerCase()
  if(k == "oname334") {
    m.reply("Nama : Muhammad Restu (Restu)")
  } else if(k == "onumber741") {
    m.reply("085783417029 (Im3)")
  } else if(k == "oayah952") {
    m.reply("Ayah:\n Nama: Riki nurahman (riki)\n\nSudah cerai sama ibu sejak saia belum lahir...")
  } else if(k == "oibu990") {
    m.reply("Ibu:\n Nama: Sri mastutik (sri)\n\nIbuku sudah meninggal pada 20 Mei 2021\n      *Kuharap dirinya tenang di alam sana :\')*")
  } else if(k == "oumur893") {
    m.reply(`Anj kodenya ketauan\nUmur saia ${umur} th :v\n\nUmur update setiap tanggal 8 & bulan 11 (ultah owner)`)
  } else {
    m.reply("Kode tidak valid ❌")
  }
}

handler.help = ["infoowner <kode>"]
handler.tags = ["main"]
handler.command = /^(infoowner|ownerinfo|inowner)/i

module.exports = handler
