// Denta
// Restu

let axios = require("axios")
let fs = require("fs")
let handler = async (m, { conn, text, usedPrefix }) => {
  let res = await axios.get("https://api.kawalcorona.com/indonesia/")
  let kopit = res.data[0]
  let na = kopit.name
  let po = kopit.positif
  let se = kopit.sembuh
  let me = kopit.meninggal
  let di = kopit.dirawat

  let wuhankont = `Covid-19 Di ${na}\nPositif : *${po}*\nSembuh : *${se}*\nMeninggal *${me}*\nDirawat : *${di}*`

  let imgk = fs.readFileSync('./lib/covid.jpg')

  conn.sendFile(m.chat, imgk, 'covid.jpg', wuhankont, m)
}

handler.help = ['covid-19', 'covid19', 'covid']
handler.tags = ['info']
handler.command = /^(covid-19|covid19|covid)/i

handler.owner = false
handler.register = false

module.exports = handler
