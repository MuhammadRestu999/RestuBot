module.exports = Object.assign(async function handler(m, { text }) {
    let hash = text
    if (m.quoted && m.quoted.fileSha256) hash = m.quoted.fileSha256.toString("hex")
    if (!hash) throw `Tidak ada hash`
    let sticker = global.DATABASE.data.sticker
    if (sticker[hash] && sticker[hash].locked) throw 'You don\'t have permission to delete this command'
    if (sticker[hash] == undefined) throw 'Hash tidak berada dalam database'
    delete global.DATABASE.data.sticker[hash]
    m.reply(`Done!`)
}, {
    help: ['cmd'].map(v => 'del' + v + ' <text>'),
    tags: ['database'],
    command: ['delcmd']
})
