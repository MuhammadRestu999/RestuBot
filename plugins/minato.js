let handler = async (m, { text }) => {
  let axios = require("axios")
  anu = await axios(`https://restapifull-by-rey.herokuapp.com/api/anime/minato?&apikey=administrator`)
  min = JSON.parse(JSON.stringify(anu.data.result));
  ato = min[Math.floor(Math.random() * min.length)];

  conn.sendButtonImg(m.chat, `lanjut?`, ato, `Silahkan pilih salah satu`, `Lanjut`, `${prefix}minato`)
}

handler.help = ['minato']
handler.tags = ['random']
handler.command = /^minato$/i

module.exports = handler
