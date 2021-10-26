let { MessageType } = require('@adiwajshing/baileys')
let PhoneNumber = require('awesome-phonenumber')
let { buttonsMessage, contactsArray, image, MimeType } = MessageType
let fs = require('fs')
let chalk = require('chalk')
let fetch = require('node-fetch');
let path = require('path')
let moment = require('moment-timezone')
let levelling = require('../lib/levelling')
//************PEMBATAS************\\
let handler = async (m, { conn, usedPrefix }) => {
    let user = global.DATABASE.data.users[m.sender]
    let name = conn.getName(m.sender)
    let me = conn.user.name
    let pp = await conn.getProfilePicture(conn.user.jid)
    /// sosial media\\
    let gith = 'https://github.com/MuhammadRestu999'
let fbe = 'https://www.facebook.com/mohamad.restu.71'
//************PEMBATAS************\\
let urlyyt = ['https://youtu.be/shw7xIzGX5o','https://youtu.be/aKtb7Y3qOck','https://youtu.be/yJg-Y5byMMw','https://youtu.be/3nQNiWdeH2Q']
let urlyt = urlyyt[Math.floor(Math.random() * urlyyt.length)]
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
avtar = await conn.getProfilePicture(conn.user.jid)
    let d = new Date(new Date + 3600000)
    let locale = 'id'
    // d.getTimeZoneOffset()
    // Offset -420 is 18.00
    // Offset    0 is  0.00
    // Offset  420 is  7.00
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(d)
    let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    })
     let _uptime = process.uptime() * 1000
    let _muptime
    if (process.send) {
      process.send('uptime')
      _muptime = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
    let muptime = clockString(_muptime)
    let uptime = clockString(_uptime)
//************PEMBATAS************\\

    let totalreg = Object.keys(global.DATABASE.data.users).length
let totalchat = Object.keys(global.DATABASE.data.chats).length
let totalprem = Object.keys(global.prems).length
    let rtotalreg = Object.values(global.DATABASE.data.users).filter(user => user.registered == true).length
//************PEMBATAS************\\
    let { exp, limit, level, role } = global.DATABASE.data.users[m.sender]
    let { min, xp, max } = levelling.xpRange(level, global.multiplier)
//*************************************\\
       let jam = moment.tz('Asia/Jakarta').format('HH:mm')
       let wita = moment.tz('Asia/Makassar').format("HH:mm:ss")
            let wit = moment.tz('Asia/Jayapura').format("HH:mm:ss")
//*********JAM*********\\
    let ma = await conn.getProfilePicture(conn.user.jid)
    let prem = global.prems.includes(who.split`@`[0])
    let about = (await conn.getStatus(who).catch(console.error) || {}).status || ''
//******************************\\
        
let tes = `
Halo ${name}
Im ${me}

Sekarang Jam
⏲️ ${jam} WIB
⏲️ ${wita} WITA
⏲️ ${wit} WIT

_*📌My Sosmed*_
*📎 Facebook:* ${fbe}
*📎Github:* ${gith}
*📎Youtube:* https://youtube.com/c/Rizxyu🅥

_*⛩️LIST FEATURE⛩️*_
🔖 +attp <teks>
🔖 +attp2 <teks> (Limit)
🔖 +customtahta <teks> (Limit)
🔖 +ctrigger <text> (Limit)
🔖 +getexif
🔖 +glitch <teks> (Limit)
🔖 +kiss
🔖 +metalicglow <teks> (Limit)
🔖 +neon <teks> (Limit)
🔖 +phlogo <text|text>
🔖 +photooxy <effect|teks> (Limit)
🔖 +pubglogo teks|teks
🔖 +pubgserti <teks>
🔖 +pubgserti2 <teks>
🔖 +rainbowglow <teks> (Limit)
🔖 +rainbowshine <teks> (Limit)
🔖 +realisticcloud <teks> (Limit)
🔖 +semoji [tipe] <emoji>
🔖 +sfire (Limit)
🔖 +stiker (caption|reply media)
🔖 +stiker <url>
🔖 +stikergif (caption|reply media)
🔖 +stikergif <url>
🔖 +stikerline <url> (Limit)
🔖 +stikerly <pencarian> (Limit)
🔖 +stikertelegram <url> (Limit)
🔖 +stickfilter (caption|reply media) (Limit)
🔖 +stickmaker (caption|reply media) (Limit)
🔖 +surgaserti <teks>
🔖 +text3d <teks>
🔖 +text3d2 <teks>
🔖 +togif (reply)
🔖 +toimg (reply)
🔖 +toimg2 (reply)
🔖 +tovideo (reply)
🔖 +ttp <teks>
🔖 +ttp2 <teks> (Limit)
🔖 +ttpdark <teks> (Limit)
🔖 +warface <teks> (Limit)
🔖 +water <teks>
🔖 +wm <packname>|<author>
🔖 +wolflogo <text|text>
🔖 +wolfmetal <teks> (Limit)
🔖 +woodenboard <teks> (Limit)
🔖 +magernulis1 <teks> (Limit)
🔖 +magernulis2 <teks> (Limit)
🔖 +magernulis3 <teks> (Limit)
🔖 +magernulis4 <teks> (Limit)
🔖 +magernulis5 <teks> (Limit)
🔖 +magernulis6 <teks> (Limit)
🔖 +nulis <teks>
🔖 +quotemaker <teks>|<wm> (Limit)
🔖 +quotemaker2 <teks | wm> (Limit)
🔖 +tahta2<teks>
🔖 +gay
🔖 +hornycard
🔖 +hornylicense
🔖 +itssostupid
🔖 +iss
🔖 +stupid
🔖 +lolice
🔖 +trigger
🔖 +ytcomment <comment>

_Jika kamu menemukan Bug Silahkan lapor ke owner_`

///conn.sendMessage(m.chat, buttons, MessageType.buttonsMessage, { quoted: m })
conn.send2ButtonImg( m.chat, tes, avtar, `©RestuBot`, `Kembali`, '+menu', `Partner`, '+creator', {
    quoted: m,
    contextInfo: {
        externalAdReply: {
            title: `☕THIS MENU Maker`,
            body: `Hai ${name} Terimakasih sudah menggunakan bot`,
            description: `BOT AKTIF ${uptime}`,
            mediaType: 2,
          thumbnail: await conn.getProfilePicture(conn.user.jid),
         mediaUrl: urlyt
        }
    }
})
    }
    //
    //
handler.help = ['makermenu']
handler.tags = ['main']
handler.command = /^(mmenu|makermenu)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.money = 0

module.exports = handler

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}
///Siapa dulu dong Rizky

const tombol = [
{buttonId: '+menu', buttonText: {displayText: 'Menu'}, type: 1},
{buttonId: '+donasi', buttonText: {displayText: 'Donasi'}, type: 1}
]
