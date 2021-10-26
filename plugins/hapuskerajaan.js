let handler = async(m, { conn }) => {
  let kingdom = global.DATABASE.data.users[m.sender]
  if(!kingdom.created) return m.reply("Kamu tidak memiliki kerajaan!")
  kingdom.created = undefined
  kingdom.namk = undefined
  kingdom.kingdomName = undefined
  kingdom.troops = undefined
  kingdom.population = undefined
  kingdom.lvl = undefined
  kingdom.aliance = undefined
  kingdom.koin = undefined

  if(!kingdom.created) return m.reply("Berhasil menghapus kerajaan!")
}

handler.help = ['hapuskerajaan']
handler.tags = ['rpg']

module.exports = handler

handler.command = /^hapuskerajaan$/i
