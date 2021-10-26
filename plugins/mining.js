let handler = async (m, { conn }) => {
  if (global.DATABASE._data.users[m.sender].lastmine == undefined) global.DATABASE._data.users[m.sender].lastmine = 0
  if (global.DATABASE.data.users[m.sender].pickaxe == undefined) global.DATABASE.data.users[m.sender].pickaxe = 0
  let user = global.DATABASE._data.users[m.sender]
  let pickaxe = user.pickaxe

  let cdm = `${MeNit(new Date - user.lastmine)}`
  let cds = `${DeTik(new Date - user.lastmine)}`
  let cd1 = Math.ceil(01 - cdm)
  let cd2 = Math.ceil(60 - cds)
  function addZ(n) {
    n = Number(n)
    if(n >= 10) return n
    if(n <= 9) return "0" + n
  }
  let timers = `00:${addZ(cd1)}:${addZ(cd2)}`

  if(pickaxe == 0) return conn.send2Button(m.chat, "Kamu belum memiliki pickaxe!\nBeli / Buat pickaxe dulu!", "", "Beli", "+shop buy pickaxe 1", "Buat", "+craft pickaxe")

  if (Number(new Date) - Number(global.DATABASE._data.users[m.sender].lastmine) > 120000) {
    let hasil = Math.floor(Math.random() * 2000)
    global.DATABASE._data.users[m.sender].exp += Number(hasil)
    global.DATABASE._data.users[m.sender].lastmine = Number(new Date)
    await m.reply(`Selamat! Anda mendapatkan ${hasil} exp!`)
  } else {
    await m.reply(`Silahkan tunggu *🕒${timers}* lagi untuk mining`)
  }
}

handler.help = ['mine']
handler.tags = ['rpg']
handler.command = /^(mine|mining)$/i
handler.limit = true

module.exports = handler

function MeNit(ms) {
  let m = isNaN(ms) ? '02' : Math.floor(ms / 60000) % 60
  return [m].map(v => v.toString().padStart(2, 0)).join(':')
}

function DeTik(ms) {
  let s = isNaN(ms) ? '60' : Math.floor(ms / 1000) % 60
  return [s].map(v => v.toString().padStart(2, 0)).join(':')
}
