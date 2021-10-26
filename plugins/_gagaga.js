let handler = m => m
function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')
}
handler.before = m => {
  let user = global.DATABASE.data.users[m.sender]
  if (user.main > -1) {
    lama = clockString(new Date - user.main)
    lama = lama.split(":")
    if (Number(lama[1]) >= 2) {
      m.reply(`
Kamu berhasil memenangkan permainan gak ngapa-ngapain selama 2 menit!
`.trim())
      user.main = undefined
      user.mainTag = undefined
      user.level += 10
    } else {
      m.reply("Yahhh\nKamu kalah :(")
      user.main = undefined
      user.mainTag = undefined
    }
  }
  let jids = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
  for (let jid of jids) {
    let user = global.DATABASE.data.users[jid]
    if (!user) continue
    let mainTime = user.main
    if (!mainTime || mainTime < 0) continue
    let reason = user.mainTag
    m.reply(`
Jangan tag dia!
Dia sedang Bermain gak ngapa ngapain selama 2 menit
Waktu berlalu ${clockString(new Date - mainTime)}
`.trim())
  }
  return true
}

module.exports = handler

