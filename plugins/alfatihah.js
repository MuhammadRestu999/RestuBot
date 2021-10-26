let axios = require("axios")

let handler = async(m, {conn, args}) => {
  try {
  let url = "https://raw.githubusercontent.com/penggguna/QuranJSON/master/surah/1.json"
  let json = await axios(url)
  json = json.data.verses

  let arabic = ""
  let idn = ""
  for(let num in json) {
    arabic += json[num].text + "\n"
    idn += json[num].translation_id + "\n"
  }

  let teks = `⟨ *Alfatihah* ⟩
${arabic}



${idn}`
  m.reply(teks)
  } catch(err) {
    conn.sendButton(m.chat, "Ada yang error!", "404", "Report", "+bug alfatihah\n" + err)
  }
}

handler.help = ['alfatihah']
handler.tags = ['']
handler.command = /^(alfatihah)/i

module.exports = handler
