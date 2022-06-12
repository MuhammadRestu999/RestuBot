let handler = async(m, { conn, text }) => {
  if(!m.quoted && !m.mentionedJid[0]) return m.reply("Tag atau balas ke pesan seseorang!\n\nTag or reply to someone's message!")
  let others = m?.quoted?.sender || m.mentionedJid[0]
  let you = global.DATABASE._data.users[m.sender]
  let enemy = global.DATABASE._data.users[others]

  if(!enemy) return m.reply("Dia belum terdaftar di bot\n\nHe/She is not registered in the bot")
  if(you.healt <= 0) return m.reply("Kesehatanmu dibawah 0\n\nYour health is below 0")
  if(enemy.healt <= 0) return m.reply("Kesehatan musuhmu dibawah 0\n\nYour enemy\'s health is below 0")

  if(you.healt < enemy.healt) {
    m.reply("Kamu kalah!\n\nYou lose!")
    m.reply(`@${m.sender.split("@")[0]}: -10000 💵\n@${others.split("@")[0]}: +10000 💵`)
    global.DATABASE._data.users[others].healt -= you.healt
    global.DATABASE._data.users[m.sender].healt = 0
    global.DATABASE._data.users[m.sender].money -= 10000
    global.DATABASE._data.users[m?.quoted?.sender || m.mentionedJid[0]].money += 10000
  } else if(you.healt > enemy.healt) {
    m.reply("Kamu menang!\n\nYou win!")
    m.reply(`@${m.sender.split("@")[0]}: +10000 💵\n@${others.split("@")[0]}: -10000 💵`)
    global.DATABASE._data.users[m.sender].healt -= enemy.healt
    global.DATABASE._data.users[others].healt = 0
    global.DATABASE._data.users[m.sender].money += 10000
    global.DATABASE._data.users[m?.quoted?.sender || m.mentionedJid[0]].money -= 10000
  } else {
    m.reply("Seri\n\nDraw")
    m.reply(`@${m.sender.split("@")[0]}: +5000 💵\n@${others.split("@")[0]}: +5000 💵`)
    global.DATABASE._data.users[m.sender].healt = 0
    global.DATABASE._data.users[others].healt = 0
    global.DATABASE._data.users[m.sender].money += 5000
    global.DATABASE._data.users[m?.quoted?.sender || m.mentionedJid[0]].money += 5000
  }
}

handler.help = ["fight", "fighting"]
handler.tags = ["game"]

handler.register = true

handler.command = /^(fight(ing)?)/i

module.exports = handler
