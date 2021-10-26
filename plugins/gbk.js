let handler = async(m, { conn, text }) => {
  if(global.DATABASE.data.users[m.sender].money < 500) return m.reply("Minimal 500 uang untuk bermain! (Untuk menghindari angka minus (-500))")
  let bot = Math.floor(Math.random() * 30) // Random bot
  let player = Math.floor(Math.random() * 30) // Random player

  let gbk = ["✂️", "🪨", "🗒"]

  if(bot >= 30) {
    bt = gbk[2]
  } else if(bot >= 20) {
    bt = gbk[1]
  } else {
    bt = gbk[0]
  }
  if(player >= 30) {
    pl = gbk[2]
  } else if(player >= 20) {
    pl = gbk[1]
  } else {
    pl = gbk[0]
  }

  let str = `Gunting Batu Kertas\n👦 : ${pl}\n🤖 : ${bt}`

  if(bt == gbk[0] && pl == gbk[1]) {
    m.reply(`${str}\n\n@${m.sender.split("@")[0]} menang!\n+500 uang`)
    global.DATABASE._data.users[m.sender].money += 500
  } else if(bt == gbk[1] && pl == gbk[2]) {
    m.reply(`${str}\n\n@${m.sender.split("@")[0]} menang!\n+500 uang`)
    global.DATABASE._data.users[m.sender].money += 500
  } else if(bt == pl) {
    m.reply(`${str}\n\nSeri!`)
  } else {
    m.reply(`${str}\n\n@${m.sender.split("@")[0]} kalah!\n-500 uang`)
    global.DATABASE._data.users[m.sender].money -= 500
  }
}

handler.command = /^(gbk|guntingbatukertas|gunting_batu_kertas|✂️🪨🗒)/i

module.exports = handler
