let { MessageType } = require('@adiwajshing/baileys')
let fetch = require('node-fetch')
let handler = async (m, { conn, text, usedPrefix, command, DevMode }) => {
  try {
    let args = text.includes(" - ") ? text.split(" - ") : text.includes("-") ? text.split("-") : undefined
    if(!args) return m.reply(`Example : _${usedPrefix}${command} Andmesh Kamaleng - Hanya Rindu_`)
    let res = await fetch(global.API('bg', '/lirik', { 
        title: args[1],
        artist: args[0] || ''
    }))
    let json = await res.json()
    if (json.status !== true) throw json
    m.reply(`
*Lyrics ${args[1]}*

\`\`\`${json.result}\`\`\`
`.trim())
    } catch (e) {
    m.reply('Error!!')
    console.log(e)
    if (DevMode) {
        let file = require.resolve(__filename)
        for (let jid of global.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid)) {
        conn.sendMessage(jid, file + ' error\nNo: *' + m.sender.split`@`[0] + '*\nCommand: *' + m.text + '*\n\n*' + e + '*', MessageType.text)
        }
    }
    }
}
    
handler.help = ['lirik', 'lyrics'].map(v => ' [title] [artist]')
handler.tags = ['internet']
handler.command = /^(l(irik|yrics))$/i

module.exports = handler
