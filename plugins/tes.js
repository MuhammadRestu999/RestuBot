let moment = require("moment-timezone");
moment.tz.setDefault("Asia/Jakarta").locale("id")
let waktu = moment.tz('Asia/Jakarta').format('a')
moment.tz.setDefault("Asia/Jakarta").locale("id")

let { MessageType } = require("@adiwajshing/baileys")
let fs = require("fs")

let handler = async(m, { conn, text }) => {
  let pp = fs.readFileSync("./src/pp.png")
  conn.sendMessage(m.chat, "Work", MessageType.text,
    {
      quoted: m,
      contextInfo: {
        externalAdReply: {
          title: "RestuBot",
          body: `Selamat ${waktu}`,
          previewType: 0,
          thumbnail: pp,
          sourceUrl: "https://youtube.com/channel/UCj-s_sWqCclC-fPsQ001QCA"
        }
      }
    }
  )
}

handler.command = "tes"

module.exports = handler
