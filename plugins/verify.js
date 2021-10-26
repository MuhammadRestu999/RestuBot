const { createHash } = require('crypto')
let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i
let { MessageType } = require('@adiwajshing/baileys')
let { buttonsMessage, contactsArray, image, MimeType } = MessageType
let fs = require('fs')

let handler = async function (m, { text, conn, usedPrefix }) {
  let user = global.DATABASE.data.users[m.sender]
 if (user.registered === true) return conn.sendButton( m.chat, `Anda sudah terdaftar di database bot`, `Bot By Restu`,'OK','Ok')
  let name = conn.getName(m.sender)
     let age = `${Math.floor(Math.random() * 70)}`.trim()
  user.name = name
  user.age = age
  user.regTime = + new Date
  user.registered = true
  let sn = createHash('md5').update(m.sender).digest('hex')
  
  let pp = './src/avatar_contact.png'
  try {
    pp = await conn.getProfilePicture(m.sender)
  } catch (e) {

  } finally {
/// let avtar = await conn.getProfilePicture(m.sender)
 
  conn.sendFile( m.chat, pp, 'pp.jpg',
`_Verify Succes [ ✅ ]_

*🔸Name:* ${name}
*🔸Age:* ${age} <random>
*🔸SN:* ${sn}

_to use the 🤖bot feature type *+menu*_
_You can report if you find a bug by typing *+bug (reason)*_
`,
m
   )
   }
}
handler.help = ['verify']
handler.tags = ['main']

handler.command = /^verify$/i

module.exports = handler
