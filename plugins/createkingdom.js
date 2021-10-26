//TEAM
//FAUZAN
//RIZKY
//DENTA
//Restu?

let handler = async(m, {conn, command, usedPrefix, text}) => {

let fail = 'format salah, example: ' +usedPrefix+command+ ' KingZan|DynastiKingdom|@user'

let kingdom = global.DATABASE.data.users[m.sender]

let split = text.split`|`

let namk = split[0]

let kingdomName = split[1]

let aliance = split[2]

if (kingdom.created == true) return m.reply('Kamu sudah memiliki kingdom!')

if (!namk || !kingdomName || !aliance) return m.reply(fail)


global.DATABASE.data.users[m.sender].created = true
global.DATABASE.data.users[m.sender].namk = namk
global.DATABASE.data.users[m.sender].kingdomName
global.DATABASE.data.users[m.sender].troops = 100
global.DATABASE.data.users[m.sender].population = 100
global.DATABASE.data.users[m.sender].lvl = 1
global.DATABASE.data.users[m.sender].aliance = aliance
global.DATABASE.data.users[m.sender].koin = 100000
global.DATABASE._data.users[m.sender].makanan = 1000

conn.reply(m.chat, `

🏰YOUR KINGDOM CREATED!!

🏰Name Kerajaan: ${kingdomName}
👑Name King: ${namk}
👥populasi: ${global.DATABASE.data.users[m.sender].population}
👮army: ${global.DATABASE.data.users[m.sender].troops}
🎋Level: ${global.DATABASE.data.users[m.sender].lvl}
💰Koin: ${global.DATABASE.data.users[m.sender].koin} *[ BERGUNA UNTUK UP LEVEL KERAJAAN ]*

🏳️User Yg diajak aliansi
${aliance}

Cek Kerajaaan mu!
${usedPrefix}Mykingdom
`, m, false, {
    contextInfo: {
      mentionedJid: conn.parseMention(text)
    }
  })
}

handler.help = ['kerajaan nama|namakerajaan']
handler.tags = ['rpg']

module.exports = handler

handler.command = /^kingdom$/i
//G USAH NYOLONG ANJG
//NGAKU NGAKU BUATAN SENDIRI TCH
//PDHL CUMAN REKODING








