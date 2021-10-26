let { MessageType } = require('@adiwajshing/baileys')
let { buttonsMessage, contactsArray, image, MimeType } = MessageType

let handler = async (m, { conn, text, usedPrefix }) => {
  let nmu = conn.parseMention(text)
  if(nmu.length == 0) return m.reply("Tag orang yang mau di attack!")
  nmu = nmu[0]

  let musuh = global.DATABASE.data.users[nmu]
  let kingdom = global.DATABASE.data.users[m.sender]
  if (kingdom.created == false || kingdom.created == undefined) return m.reply('Kamu belum memiliki kerajaan!')
  if (musuh.created == false || musuh.created == undefined) return m.reply('Dia belum memiliki kerajaan!')
  /* Diri Sendiri */
  let kerajaan = global.DATABASE._data.users[m.sender].kingdomName
  let troops = global.DATABASE._data.users[m.sender].troops
  let lvl = global.DATABASE._data.users[m.sender].lvl
  let koin = global.DATABASE.data.users[m.sender].koin
  let batu = global.DATABASE._data.users[m.sender].besi
  let kayu = global.DATABASE._data.users[m.sender].kayu
  let besi = global.DATABASE.data.users[m.sender].batu
  let emas = global.DATABASE._data.users[m.sender].emas
  let makanan = global.DATABASE._data.users[m.sender].makanan
  let lw = global.DATABASE.data.users[m.sender].lastwar || "-"
  let al = global.DATABASE.data.users[m.sender].aliance
  /* Musuh */
  let kerajaanM = global.DATABASE._data.users[nmu].kingdomName
  let troopsM = global.DATABASE._data.users[nmu].troops
  let lvlM = global.DATABASE._data.users[nmu].lvl
  let koinM = global.DATABASE.data.users[nmu].koin
  let batuM = global.DATABASE._data.users[nmu].besi
  let kayuM = global.DATABASE._data.users[nmu].kayu
  let besiM = global.DATABASE.data.users[nmu].batu
  let emasM = global.DATABASE._data.users[nmu].emas
  let makananM = global.DATABASE._data.users[nmu].makanan
  let alM = global.DATABASE.data.users[nmu].aliance

  if(troops <= 0) return m.reply("Prajurit kamu tidak boleh 0 atau dibawah 0!")

  if(al.includes(nmu.split("@")[0])) return m.reply("Tidak dapat menyerang tim aliansi!")

  if(troops > troopsM) {
    global.DATABASE.data.users[m.sender].lastwar = new Date * 1
    global.DATABASE._data.users[nmu].troops -= troops
    global.DATABASE._data.users[m.sender].troops += troopsM
    global.DATABASE._data.users[m.sender].koin += (koinM - 30)
    global.DATABASE._data.users[m.sender].batu += (batuM - 30)
    global.DATABASE._data.users[m.sender].kayu += (kayuM - 30)
    global.DATABASE._data.users[m.sender].besi += (besiM - 30)
    global.DATABASE._data.users[m.sender].emas += (emasM - 30)
    global.DATABASE._data.users[nmu].koin -= (koinM - 30)
    global.DATABASE._data.users[nmu].batu -= (batuM - 30)
    global.DATABASE._data.users[nmu].kayu -= (kayuM - 30)
    global.DATABASE._data.users[nmu].besi -= (besiM - 30)
    global.DATABASE._data.users[nmu].emas -= (emasM - 30)

    m.reply(`Kamu memenangkan pertarungan!
Kamu mendapatkan:
💂 ${troops + (troopsM)}
💰 ${koin + (koinM - 30)}
🪨 ${batu + (batuM - 30)}
🪵 ${kayu + (batuM - 30)}
⛓️  ${besi + (besiM - 30)}
🪙 ${emas + (emasM - 30)}`)
  } else if(troops < troopsM) {
    global.DATABASE.data.users[m.sender].lastwar = new Date * 1
    global.DATABASE._data.users[nmu].troops -= troops
    global.DATABASE._data.users[m.sender].troops = 0
    global.DATABASE._data.users[m.sender].koin -= (koinM - 30)
    global.DATABASE._data.users[m.sender].batu -= (batuM - 30)
    global.DATABASE._data.users[m.sender].kayu -= (kayuM - 30)
    global.DATABASE._data.users[m.sender].besi -= (besiM - 30)
    global.DATABASE._data.users[m.sender].emas -= (emasM - 30)
    global.DATABASE._data.users[nmu].koin += (koinM - 30)
    global.DATABASE._data.users[nmu].batu += (batuM - 30)
    global.DATABASE._data.users[nmu].kayu += (kayuM - 30)
    global.DATABASE._data.users[nmu].besi += (besiM - 30)
    global.DATABASE._data.users[nmu].emas += (emasM - 30)
    m.reply(`Kamu kalah!
Kamu kehilangan:
💰 ${koin + (koinM - 30)}
🪨 ${batu + (batuM - 30)}
🪵 ${kayu + (batuM - 30)}
⛓️  ${besi + (besiM - 30)}
🪙 ${emas + (emasM - 30)}`)
  } else {
    m.reply("Seri ngab")
  }
}

handler.help = ['war <tag>']
handler.tags = ['rpg']
handler.command = /^(war)/i

handler.owner = false
handler.register = true

module.exports = handler
