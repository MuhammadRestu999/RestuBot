// Created By Muhammad Restu




let handler = async function (m, { text, usedPrefix }) {
  let errF = "Example: +umur 2000 - 02 - 05"
  let format
  let umur
  let nextUlth
  if (text.includes(" - ")) {
    format = text.split(" - ")
  } else if(text.includes("-")) {
    format = text.split("-")
  } else {
    return m.reply(errF)
  }
  if(format[0].length != 4) return m.reply(errF)
  if(format[1].length < 1 || format[1].length > 2) return m.reply(errF)
  if(format[2].length < 1 || format[2].length > 2) return m.reply(errF)
  if(isNaN(format[0].length)) return m.reply("Error di tahun!")
  if(isNaN(format[1].length)) return m.reply("Error di bulan!")
  if(isNaN(format[2].length)) return m.reply("Error di tanggal!")

  let tahun = format[0]
  let bulan = format[1]
  let tanggal = format[2]

  let arrBul = [01, 02, 03, 04, 05, 06, 07, 08, 09, 10, 11, 12]
  let th = new Date().getFullYear()
  let bl = arrBul[new Date().getMonth()]
  let tn = new Date().getDate()

  if (bl >= bulan && tn >= tanggal) {
    umur = th - tahun
    nextUlth = th + 1 + " - " + bulan + " - " + tanggal
  } else {
    umur = th - tahun - 1
    nextUlth = th + " - " + bulan + " - " + tanggal
  }
  return m.reply(`Umur dari ${tahun} - ${bulan} - ${tanggal} adalah: ${umur} Tahun\nUlang tahun berikutnya: ${nextUlth}`)
}
handler.help = ['umur']
handler.tags = ['other']

handler.command = /^(umur)/i

module.exports = handler

// Gausah recode ngntd
