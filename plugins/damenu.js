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
    let __timers = (new Date - user.lastclaim)
    let name = conn.getName(m.sender)
    let me = conn.user.name
    let pp = await conn.getProfilePicture(conn.user.jid)
    /// sosial media\\
    let gith = 'https://github.com/MuhammadRestu999'
let fbe = 'https://www.facebook.com/mohamad.restu.71'
let Txh = `━━┅⑈𝒯𝒽𝒶𝓃𝓀𝓈 ℱℴ𝓇⑈┅━━\n⊙Nurutomo,\n⊙Arrifb,\n⊙Bochil Gaming,\n⊙Rendy Ganz,\n⊙Rizky,\n⊙ Fauzan\n⊙Farhan\n⊙Denta\n⊙Penyedia apikey\n⊙ All creator Bot\n┅━━⊙━━┅`
//
let tags = {
  'main': 'Main',
  'info': 'Info',
  'rpg': 'Rpg',
  'game': 'Game',
  'xp': 'Exp & Limit',
  'sticker': 'Maker',
  'kerang': 'Kerang Ajaib',
  'quotes': 'Quotes',
  'admin': 'Admin',
  'group': 'Group',
  'premium': 'Premium',
  'internet': 'Internet',
  'anonymous': 'Anonymous Chat',
  'nulis': 'MagerNulis & Logo',
  'downloader': 'Downloader',
  'tools': 'Tools',
  'fun': 'Fun',
  'database': 'Database',
  'vote': 'Voting',
  'absen': 'Absen',
  'quran': 'Islami',
  'jadibot': 'Jadi Bot',
  'owner': 'Owner',
  'host': 'Host',
  'advanced': 'Advanced',
  '': 'No Category',
}
///
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

_*📌My Sosmed*_
*📎 Facebook:* ${fbe}
*📎Github:* ${gith}
*📎Youtube:* https://youtube.com/channel/UCj-s_sWqCclC-fPsQ001QCA

_*⛩️LIST FEATURE⛩️*_
🔖 +addvn <text>
🔖 +addmsg <text>
🔖 +addvideo <text>
🔖 +addaudio <text>
🔖 +addsticker <text>
🔖 +delcmd <text>  (Owner)
🔖 +delvn <text>
🔖 +delmsg <text>
🔖 +delvideo <text>
🔖 +delaudio <text>
🔖 +delsticker <text>
🔖 +getvn <text>
🔖 +getmsg <text>
🔖 +getvideo <text>
🔖 +getaudio <text>
🔖 +getsticker <text>
🔖 +infocmd <text>
🔖 +listcmd <text>
🔖 +listvn
🔖 +listmsg
🔖 +listvideo
🔖 +listaudio
🔖 +liststicker
🔖 +unlockcmd
🔖 +lockcmd
🔖 +setcmd <text>  (Owner)

_Jika kamu menemukan Bug Silahkan lapor ke owner_`

///conn.sendMessage(m.chat, buttons, MessageType.buttonsMessage, { quoted: m })
conn.send2ButtonImg( m.chat, tes, avtar, `©RestuBot`, `Kembali`, '+menu', `Partner`, "+creown", {
    quoted: m,
    contextInfo: {
        externalAdReply: {
            title: `☕THIS DATABASE MENU`,
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
handler.help = ['infomenu']
handler.tags = ['main']
handler.command = /^(damenu|infomenu)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.register = true

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
