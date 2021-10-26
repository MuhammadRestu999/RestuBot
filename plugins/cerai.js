let handler = async(m, { conn, usedPrefix, args }) => {
  try {
  conn.cerai = conn.cerai || []

  let user = global.DATABASE._data.users[m.sender]
  if(!user.pasangan) return m.reply("Kamu belum menikah!")
  if(args[0] == undefined) {
    conn.cerai[m.sender] = {
      "setuju": 0
    }
    m.reply(`Apakah anda yakin ingin cerai?\nUntuk cerai\nBot memerlukan keputusan dari dua pihak (@${m.sender.split("@")[0]} & @${user.pasangan.split("@")[0]})\nTulis:\n  ${usedPrefix}cerai 1 (Untuk setuju)\n  ${usedPrefix}cerai 0 (Untuk tidak setuju)`)
  } else if(args[0] == "1") {
    if(conn.cerai[m.sender]) {
      conn.cerai.udah = conn.cerai.udah || []
      if(conn.cerai.udah[m.sender]) return m.reply("Kamu sudah menyetujuinya!")
      conn.cerai.udah.push(m.sender)
      conn.cerai[m.sender].setuju += 1
      if(conn.cerai[m.sender].setuju == 2) {
        conn.cerai = {}
        m.reply(`@${m.sender.split("@")[0]} & @${user.pasangan.split("@")[0]} telah cerai`)
        global.DATABASE._data.users[user.pasangan].pasangan = undefined
        global.DATABASE._data.users[m.sender].pasangan = undefined
      } else {
        m.reply(`@${m.sender.split("@")[0]} Telah menyetujui\nTinggal @${user.pasangan.split("@")[0]}`)
      }
    } else if(conn.cerai[user.pasangan]) {
      conn.cerai[user.pasangan].setuju += 1
      if(conn.cerai[user.pasangan].setuju == 2) {
        conn.cerai = {}
        m.reply(`@${m.sender.split("@")[0]} & @${user.pasangan.split("@")[0]} telah cerai`)
        global.DATABASE._data.users[user.pasangan].pasangan = undefined
        global.DATABASE._data.users[m.sender].pasangan = undefined
      } else {
        m.reply(`@${m.sender.split("@")[0]} Telah menyetujui\nTinggal @${user.pasangan.split("@")[0]}`)
      }
    } else {
      m.reply("Lu saha?")
    }
  } else if(args[0] == "0") {
    if(conn.cerai[m.sender] || conn.cerai[user.pasangan]) {
      conn.cerai = {}
      m.reply(`@${m.sender.split("@")[0]} Menolak untuk cerai`)
    } else {
      m.reply("Lu saha?")
    }
  }
  } catch(err) {
    return m.reply("Rusak!\n\n" + err.stack)
  }

}

handler.command = /^(cerai)/i

module.exports = handler
