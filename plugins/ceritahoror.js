let fetch = require('node-fetch')

let handler = async (m, { conn, usedPrefix }) => {
  let res = await fetch("https://api.lolhuman.xyz/api/ceritahoror?apikey=319fc87fef7a8b255c92ba84")
  let json = await res.json()
  if (json.status !== 200) throw json
  let caption = json.result.desc
  await conn.sendFile(m.chat, json.result.thumbnail, 'ceritahoror.jpg', caption, m)
}

handler.help = ['ceritahoror']
handler.tags = ['random']
handler.command = /^(ceritahoror)/i

module.exports = handler
