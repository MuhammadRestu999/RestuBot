let fetch = require('node-fetch')

let timeout = 100000
let poin = 500
let handler = async (m, { conn, usedPrefix }) => {
    conn.tebakkata = conn.tebakkata ? conn.tebakkata : {}
    let id = m.chat
    if (id in conn.tebakkata) {
        conn.reply(m.chat, 'Masih ada soal belum terjawab di chat ini', conn.tebakkata[id][0])
        throw false
    }
    let res = await fetch("https://github.com/Rizxyu/Rizx-Json/raw/main/Game/Tebakkata.json")
    if (res.status !== 200) throw await res.text()
    let json = await res.json()
    json = json[Math.floor(Math.random() * json.length)]
    let caption = `
*${json.soal}*

Timeout *${(timeout / 1000).toFixed(2)} detik*
Ketik ${usedPrefix}tkhint untuk bantuan
Bonus: ${poin} XP
`.trim()
    conn.tebakkata[id] = [
        await conn.reply(m.chat, caption, m),
        json, poin,
        setTimeout(() => {
            if (conn.tebakkata[id]) conn.reply(m.chat, `Waktu habis!\nJawabannya adalah *${json.jawaban}*`, conn.tebakkata[id][0])
            delete conn.tebakkata[id]
        }, timeout)
    ]
}
handler.help = ['tebakkata']
handler.tags = ['game']
handler.command = /^tebakkata/i

module.exports = handler
