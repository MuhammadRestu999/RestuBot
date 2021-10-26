let handler = async(m, { conn, args }) => {
  let teks = args[0] != undefined ? args[0] : ""
  teks = teks.toLowerCase()

  if(teks.length == 0) return m.reply("Masukan teks!")

  let tersedia = {
    "yntkts": "Yo Ndak Tau Kok Tanya Saya",
    "kktbsys": "Kenapa Kamu Tanya Begitu Siapa Yang Suruh",
    "ytbjts": "Ya Tanya Bapak Jangan Tanya Saya",
    "wtf": "What The Fuck",
    "lol": "Laugh Out Loud",
    "ily": "I Love You",
    "dyk": "Do You Know"
  }
  let out = tersedia[teks] ? "\"" + teks + "\" = \"" + tersedia[teks] + "\"" : "Tidak ditemukan dalam database bot!"

  m.reply(`${out}`)
}

handler.help = ["singkatan <teks (yntkts)>"]
handler.tags = ["other"]

handler.command = /^(singkatan)/i

module.exports = handler
