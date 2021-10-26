let axios = require("axios")

let handler = async(m, {conn, args}) => {
  try {
  let url = "https://api-zeeoneofc.herokuapp.com/api/muslim/ayatkursi?apikey=Alphabot"
  let json = await axios(url)
  json = json.data.result.data

  let teks = `---------------------- ⟨ *Ayat Kursi* ⟩ ----------------------
${json.arabic}
\`\`\`${json.latin}\`\`\`

Artinya: \"${json.translation}\"


${json.tafsir}`
  m.reply(teks)
  } catch(err) {
    conn.sendButton(m.chat, "Ada yang error!", "404", "Report", "+bug ayatkursi\n" + err)
  }
}

handler.help = ['ayatkursi']
handler.tags = ['']
handler.command = /^(ayatkursi)/i

module.exports = handler
