let axios = require("axios")

let handler = async(m, {conn, args}) => {
  try {
  let url = "https://raw.githubusercontent.com/penggguna/QuranJSON/master/surah/36.json"
  let json = await axios(url)
  json = json.data.verses

  let arabic = ""
  let idn = ""
  for(let num in json) {
    arabic += json[num].text + "\n"
    idn += json[num].translation_id + "\n"
  }

  let teks = `---------------------- ⟨ *Surah Yaseen* ⟩ ----------------------
${arabic}



${idn}`
  m.reply(teks)
  } catch(err) {
    conn.sendButton(m.chat, "Ada yang error!", "404", "Report", "+bug surahyasin\n" + err)
  }
}

handler.help = ['surahyasin']
handler.tags = ['']
handler.command = /^(surahyasin)/i

module.exports = handler
