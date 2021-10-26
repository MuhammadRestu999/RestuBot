let handler = m => m
let levelling = require('../lib/levelling')
let fs = require('fs')
handler.before = m => {
    let user = global.DATABASE._data.users[m.sender]
    let chat = global.DATABASE._data.chats[m.chat]
    if (!chat.autolevelup) return
    if (!user.autolevelup) return
    if (m.sender === global.conn.user.jid) return
    let before = user.level * 1
    while (levelling.canLevelUp(user.level, user.exp, global.multiplier)) user.level++
    let img = fs.readFileSync('./lib/puplevel.jpg')
    if (before !== user.level) {
        let str = `Selamat @${m.sender.split("@")[0]} Anda Naik 🧬level 
*${before}* --> *${user.level}*
`.trim()
        conn.sendButtonImage(m.chat, str, img, "Matikan fitur menggunakan tombol dibawah", "Nonaktifkan (Sendiri)", "+disable autolevelup", {
            contextInfo: {
                mentionedJid: conn.parseMention(str)
            }
        })
    }
    return true
}
 
module.exports = handler
