async function handler(m, { usedPrefix }) {
  let users = [...new Set([...global.conns.filter(conn => conn.user && conn.state !== 'close').map(conn => conn.user)])]
  m.reply(users.map(v => `${v.name} : https://wa.me/` + v.jid.replace(/[^0-9]/g, '') + `?text=${encodeURIComponent(usedPrefix)}menu`).join('\n'))
}
handler.command = handler.help = ['listjadibot']
handler.tags = ['jadibot']

module.exports = handler
