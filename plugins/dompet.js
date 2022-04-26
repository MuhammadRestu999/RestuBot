let handler = async(m, { conn, command, isOwner }) => {
  let data = global.DATABASE._data.users[m.sender]
  let levelling = require('../lib/levelling')
  let { name, limit, money, exp, level, registered, gender } = data
  money = money.toLocaleString("id", { currency: "IDR", style: "currency" })
  let { min, max } = levelling.xpRange(level, global.multiplier)

  let premium = prems.includes(m.sender.split("@")[0]) || isOwner

  let ph = (m.sender).replace("62", "0").split("@")[0]
  let jumlah = Object.values(global.DATABASE._data.users).filter(user => user.registered).length

  let nama = conn.getName(m.sender)
  nama = nama.includes("Rina") ? nama : conn.getName(m.sender, true)


  let str = `┌──「 ${command.toUpperCase()} 」──
│
├ Nama : ${nama}
├ Nomor : ${ph}
├ Gender : ${gender ?? "*Belum Di Atur*"}
├ Limit : *${limit}*
├ Uang : *${money}*
├ Level : *${level}*
├ Exp : *${exp} / ${max}*
├ User Terdaftar : ${jumlah} User(s)
├ Owner : ${btul(isOwner)}
├ Premium : ${btul(premium)}
├ Terdaftar : ${btul(registered)}
│
└──「 ${await conn.getName(conn.user.jid)} 」──`

  m.reply(str)
}

handler.help = ["dompet", "bank"]
handler.tags = ["main"]

handler.command = /^(dompet|bank)/i

module.exports = handler


function btul(tof) {
  return tof ? "✓" : "×"
}
