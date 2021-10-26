let handler = async (m, { text }) => {
  let axios = require("axios")
  anu = await axios(`https://restapifull-by-rey.herokuapp.com/api/anime/naruto?&apikey=administrator`)
  min = JSON.parse(JSON.stringify(anu.data.result));
  ato = min[Math.floor(Math.random() * min.length)];

  conn.sendButtonImg(m.chat, `lanjut?`, ato, `Silahkan pilih salah satu`, `Lanjut`, `${prefix}naruto`)
}

handler.help = ['naruto']
handler.tags = ['random']
handler.command = /^naruto$/i

module.exports = handler
