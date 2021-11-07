let fetch = require('node-fetch')
let handler = async (m, { text }) => {
  if (!text) throw 'Textnya apa?'
  let res = await fetch(`https://api-reysekha.herokuapp.com/api/fun/simisimi-ind2?text=${text}&apikey=apirey`)
  let json = await res.json()
  if (json.status !== true) throw json
  m.reply(json.result.success)
}
handler.help = ['simi', 'simi2', 'simsimi', 'simih'].map(v => v + ' [teks]')
handler.tags = ['fun']
handler.command = /^((sim)?simi|simih)$/i

module.exports = handler

