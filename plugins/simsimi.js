let fetch = require('node-fetch')
let handler = async (m, { text }) => {
  if (!text) throw 'Textnya apa?'
  let res = await fetch(`https://api.zeks.me/api/simi?apikey=apivinz&text=${text}`)
  let json = await res.json()
  if (json.status !== true) throw json
  m.reply(json.result)
}
handler.help = ['simi', 'simsimi', 'simih'].map(v => v + ' [teks]')
handler.tags = ['fun']
handler.command = /^((sim)?simi|simih)$/i

module.exports = handler

