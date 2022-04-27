const { MessageType } = require("@adiwajshing/baileys")
const { sticker } = require("../lib/sticker")
const util = require("util")

let handler = async (m, { conn, args, usedPrefix, command }) => {
  let stiker = false
  try {
    let q = m.quoted ? m.quoted : m
    let mime = (q.msg || q).mimetype || ""
    if (/image/.test(mime)) {
      let img = await q.download()
      m.reply(`Await....`)
      if (!img) return m.reply(`balas gambar dengan caption *${usedPrefix + command}*`)
      stiker = await sticker(img, false, global.packname, global.author)
    } else if (/video/.test(mime)) {
      if ((q.msg || q).seconds > 11) return m.reply("Maksimal 10 detik!")
      let img = await q.download()
      m.reply(`Await....`)
      if (!img) return m.reply(`balas video/gif dengan caption *${usedPrefix + command}*`)
      stiker = await sticker(img, false, global.packname, global.author)
    } else if (/webp/.test(mime)) {
      let img = await q.download()
      m.reply(`Await....`)
      if (!img) return m.reply(`balas sticker dengan caption *${usedPrefix + command}*`)
      stiker = await sticker(img, false, global.packname, global.author)
    } else if (args[0]) {
      if (isUrl(args[0])) stiker = await sticker(false, args[0], global.packname, global.author)
      else return m.reply("URL tidak valid!")
    } else return m.reply(`Reply / Kirim gambar, video & gif dengan caption *${usedPrefix+ command}*!`)
  } catch(err) {
    m.reply(util.parse(err))
  } finally {
    if (stiker) conn.sendMessage(m.chat, stiker, MessageType.sticker, {
      quoted: m,
      contextInfo: {
        externalAdReply: {
          title: "Follow Instagram saya ya kak",
          body: "klo mau follback dm/pm aja :v",
          thumbnail: await Ft.getBuffer(await conn.getProfilePicture(conn.user.jid)),
          sourceUrl: "https://instagram.com/_muhammad.restu_"
        }
      }
    })
    else m.reply("Gagal membuat sticker, Sepertinya ada yg salah!")
  }
}
handler.help = ["stiker (caption|reply media)", "stiker <url>", "stikergif (caption|reply media)", "stikergif <url>"]
handler.tags = ["sticker"]
handler.command = /^s(tic?ker)?(gif)?(wm)?$/i

module.exports = handler

const isUrl = (text) => {
  return text.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)(jpe?g|gif|png)/, "gi")) || text.match(/encrypted-tbn0.gstatic.com/g)
}
