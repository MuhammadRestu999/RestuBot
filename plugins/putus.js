let handler = async(m, { conn }) => {
  let user = global.DATABASE._data.users[m.sender]
  if(!user.pasangan) {
    if(user.pacar) {
      m.reply(`@${user.pacar.split("@")[0]} & @${m.sender.split("@")[0]} telah putus`)
      global.DATABASE._data.users[user.pacar].pacar = undefined
      global.DATABASE._data.users[m.sender].pacar = undefined
    } else {
      m.reply("Kamu tidak memiliki pacar!")
    }
  } else {
    m.reply("Kamu sudah nikah!")
  }
}

handler.command = /^(putus)/i

module.exports = handler
