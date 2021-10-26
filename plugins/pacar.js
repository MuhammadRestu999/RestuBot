let handler = async(m, { conn }) => {
  let pacar = global.DATABASE.data.users[m.sender].pacar
  if(global.DATABASE.data.users[m.sender].pasangan == undefined) {
    if(pacar) {
      let str = `Pacar kamu adalah @${pacar.split("@")[0]}`
      m.reply(str)
    } else {
      m.reply("Kamu tidak memiliki pacar!")
    }
  } else {
    m.reply("Anda sudah menikah")
  }
}

handler.command = /^(pacar(ku)?)$/i

module.exports = handler
