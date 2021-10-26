let handler = m => m
handler.before = async(m, { conn }) => {
  if(conn.runtDesc == false) return false
  let _uptime = process.uptime() * 1000
  let uptime = clockString(_uptime)
  let { status } = await conn.getStatus(m.chat)
  if("Runtime : " + uptime != status) {
    await conn.setStatus("Runtime : " + uptime)
  } else {
  }
}

module.exports = handler

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}
