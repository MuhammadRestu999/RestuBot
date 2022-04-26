//TEAM
//FAUZAN
//RIZKY
//DENTA
//Restu

let handler = async(m, {conn, command, usedPrefix, text}) => {
  let fail = `Format salah\n\nPenggunaan: ${usedPrefix}${command} nama_raja|nama_kerajaan|aliansi\nexample: ${usedPrefix}${command} KingZan|DynastiKingdom|@user`
  let kingdom = global.DATABASE._data.users[m.sender]
  let split = text.split("|")
  let namk = split[0]
  let kingdomName = split[1]
  let aliance = split[2] || ""
  if(kingdom.kingdom) return m.reply("Kamu sudah memiliki kerajaan")
  if(!namk || !kingdomName) return m.reply(fail)

  global.DATABASE._data.users[m.sender].kingdom = {
    namk,
    kingdomName,
    troops: 100,
    population: 100,
    lvl: 1,
    aliance,
    koin: 100000,
    makanan: 1000,
    exp: 0,
    emas: 0,
    kayu: 0,
    batu: 0,
    besi: 0
  }

  conn.reply(m.chat, `

🏰YOUR KINGDOM CREATED!!

🏰 Nama Kerajaan: ${kingdomName}
👑 Nama King: ${namk}
👥 populasi: ${global.DATABASE._data.users[m.sender].kingdom.population}
👮 Army: ${global.DATABASE._data.users[m.sender].kingdom.troops}
🎋 Level: ${global.DATABASE._data.users[m.sender].kingdom.lvl}
🔮 Exp: ${global.DATABASE._data.users[m.sender].kingdom.exp}
💰 Koin: ${global.DATABASE._data.users[m.sender].kingdom.koin} *[ BERGUNA UNTUK UP LEVEL KERAJAAN ]*

🏳️User Yg diajak aliansi
${aliance || "None"}

Cek Kerajaaan mu!
${usedPrefix}Mykingdom
`, m, false, {
    contextInfo: {
      mentionedJid: conn.parseMention(text)
    }
  })
}

handler.help = ["kerajaan nama|namakerajaan"]
handler.tags = ["rpg"]

module.exports = handler

handler.command = /^kingdom$/i
//G USAH NYOLONG ANJG
//NGAKU NGAKU BUATAN SENDIRI TCH
//PDHL CUMAN REKODIN
