const similarity = require('similarity')
const threshold = 0.72
let handler = m => m
handler.before = async function (m) {
    let id = m.chat
    if (!m.quoted || !m.quoted.fromMe || !m.quoted.isBaileys || !/Ketik.*teka/i.test(m.quoted.text)) return !0
    conn.tebaktebakan = conn.tebaktebakan ? conn.tebaktebakan : {}
    if (!(id in conn.tebaktebakan)) return m.reply('Soal itu telah berakhir')
    if (m.quoted.id == conn.tebaktebakan[id][0].id) {
        let json = JSON.parse(JSON.stringify(conn.tebaktebakan[id][1]))
        if (/^.*teka$/i.test(m.text)) return !0
        if (m.text.toLowerCase() == json.data.jawaban.toLowerCase().trim()) {
            global.DATABASE.data.users[m.sender].exp += conn.tebaktebakan[id][2]
            m.reply(`*Benar!*\n+${conn.tebaktebakan[id][2]} XP`)
            clearTimeout(conn.tebaktebakan[id][3])
            delete conn.tebaktebakan[id]
        } else if (similarity(m.text.toLowerCase(), json.data.jawaban.toLowerCase().trim()) >= threshold) m.reply(`*Dikit Lagi!*`)
        else m.reply(`*Salah!*`)
    }
    return !0
}
handler.exp = 0

module.exports = handler
