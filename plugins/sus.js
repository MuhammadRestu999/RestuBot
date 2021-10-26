let R = Math.random
let Fl = Math.floor
let toM = a => '@' + a.split('@')[0]
function handler(m, { groupMetadata }) {
    let ps = groupMetadata.participants.map(v => v.jid)
    let a = ps[Fl(R() * ps.length)]
    do b = ps[Fl(R() * ps.length)]
    while (b === a)
    m.reply(`Hmmm\n${toM(a)} sus!`, null, {
        contextInfo: {
            mentionedJid: [a, b]
        }
    })
}
handler.help = ['sus']
handler.tags = ['main']
handler.command = ['sus']
handler.group = true

module.exports = handler
