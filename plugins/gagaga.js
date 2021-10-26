let handler = async (m, { text }) => {
  let user = global.DATABASE.data.users[m.sender]
  user.main = + new Date
  user.mainTag = "gak ngapa ngapain selama 2 menit"
  m.reply(`
${conn.getName(m.sender)} is now Bermain gak ngapa ngapain 2menit
`)
}
handler.command = /^(gagaga)$/i

module.exports = handler
