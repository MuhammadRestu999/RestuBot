let handler = async(m, {conn, command, args, usedPrefix}) => {
  let user = global.DATABASE._data.users[m.sender]
  user.lastsda ? true : global.DATABASE._data.users[m.sender].lastsda = 0

  let __timers = (new Date - user.lastsda)
  let _timers = (480000 - __timers)
  let timers = clockString(_timers)

  if(!user.kingdom) return m.reply("G punya kerajaan")

  let ems = `${Math.floor(Math.random() * 50000)}`
  let emd = `${Math.floor(Math.random() * 50000)}`
  let ema = `${Math.floor(Math.random() * 50000)}`
  let emt = `${Math.floor(Math.random() * 50000)}`

  let tup = `${Math.floor(Math.random() * 25)}`
  let lvp = `${Math.floor(Math.random() * 10)}`

  let rply = "Maaf peletonmu tidak cukup"
  let khebis = `kamu sudah mengambil Sumber daya dan kamu tidak bisa mengambil nya lagi selama ${timers}`


  if(new Date - user.lastsda > 480000) {
    if(user.kingdom.troops > 50 ) {
      setTimeout(() => {
        m.reply(`\n⚔️Peletonmu berkurang -${tup}\n\nSda yg kamu dapatkan♨️\n🏅Emas: ${ems}\n🌳Kayu: ${emd}\n🪨Batu: ${ema}\n⛓️besi: ${emt}\n🌮Makanan: ${ems}\n`)
      }, 480000)
      setTimeout(() => {
      }, 280000)
      setTimeout(() => {
        m.reply(`Menemukan ${pickRandom(["Pertambangan", "Pertanian", "Perkebunan"])} dngn level ${lvp}`)
      }, 18000)
      setTimeout(() => {
        m.reply(`*Memulai Mencari Sumber daya♨️*\n\n*dan memakan waktu 8 menit*`)
      }, 0)
      user.lastsda = new Date * 1
      user.kingdom.emas += ems * 1
      user.kingdom.kayu += emd * 1
      user.kingdom.batu += ema * 1
      user.kingdom.besi += emt * 1
      user.kingdom.makanan += ems * 1
      user.kingdom.exp += 10
      user.kingdom.troops -= tup
    } else m.reply(rply)
  } else m.reply(khebis)
}

handler.help = ["getsda"]

handler.command = /^getsda/i

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}

function clockString(ms) {
  let h = Math.floor(ms / 3600000)
  let m = Math.floor(ms / 60000) % 60
  let s = Math.floor(ms / 1000) % 60
  console.log({ms,h,m,s})
  return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(":")
}
