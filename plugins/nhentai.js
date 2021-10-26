let axios = require("axios")

let handler = async(m, { conn, args }) => {
  if (!args || !args[0] || args.length == 0) return m.reply("Kodenya mana?")
  let url = `https://api.lolhuman.xyz/api/nhentai/${args[0]}?apikey=319fc87fef7a8b255c92ba84`
  let { data } = await axios(url)
  throw data.status
  if(data.status != 200) throw data
  let result = data.result

  let download = await axios(`https://api.lolhuman.xyz/api/nhentaipdf/${args[0]}?apikey=319fc87fef7a8b255c92ba84`)
  download = download.data.result

  conn.sendFile(m.chat, result.image[0], null, `Title : ${result.title_romaji}\nBaca online : ${result.read} (No VPN)\n\nCharacter : ${result.info.characters.join(" | ")}\nTags : ${result.info.tags ? result.info.tags.join(" | ") : "tidak ada"}\nUpload ${result.info.uploaded}\n\n\n\nDownload : ${download}`, m)
}

handler.command = /^(nhentai)/i

//handler.private = true
handler.limit = 2

module.exports = handler
