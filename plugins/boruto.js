let handler = async (m, { text }) => {
  let axios = require("axios")
  anu = await axios(`https://restapifull-by-rey.herokuapp.com/api/anime/boruto?&apikey=administrator`)
  min = JSON.parse(JSON.stringify(anu.data.result));
  ato = min[Math.floor(Math.random() * min.length)];

  conn.sendButtonImg(m.chat, `lanjut?`, ato, `Silahkan pilih salah satu`, `Lanjut`, `${prefix}boruto`)
}

handler.help = ['boruto']
handler.tags = ['random']
handler.command = /^boruto$/i

module.exports = handler
