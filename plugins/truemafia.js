// Masih beta bamg


let handler = async(m, { conn, text }) => {
  let user = global.DATABASE._data.users[m.sender]
  global.DATABASE._data.users[m.sender].lastmafia = global.DATABASE._data.users[m.sender].lastmafia || 0

  global.mafia = global.mafia || {}
  if (Object.values(global.mafia).find(room => room.id.startsWith('mafia') && [room.game.player1, room.game.player2, room.game.player3, room.game.player4, room.game.player5].includes(m.sender))) return m.reply('Kamu masih di dalam game mafia')
  let timing = (new Date - (user.lastmafia * 1)) * 1
  if (timing < 3600000) return m.reply(`Silahkan tunggu ${clockString(3600000 - timing)} untuk bisa bermain true mafia`)
  let room = Object.values(global.mafia).find(room => room.state === 'WAITING' && (text ? room.name === text : true))

  if(room) {
    let p1 = room.game.player1 || ''
    let p2 = room.game.player2 || ''
    let p3 = room.game.player3 || ''
    let p4 = room.game.player4 || ''
    let p5 = room.game.player5 || ''
    let c1 = room.player1 || ''
    let c2 = room.player2 || ''
    let c3 = room.player3 || ''
    let c4 = room.player4 || ''
    let c5 = room.player5 || ''

    if (!p2) {
      room.player2 = m.chat
      room.game.player2 = m.sender
    } else if (!p3) {
      room.player3 = m.chat
      room.game.player3 = m.sender
    } else if (!p4) {
      room.player4 = m.char
      room.game.player4 = m.sender
    } else if (!p5) {
      room.player5 = m.chat
      room.game.player5 = m.sender
      room.state = 'PLAYING'
    }

    const buttons = [
      {buttonId: 'id1', buttonText: {displayText: 'gass..'}, type: 1}
    ]

    let lmao = `${!room.game.player5 ? `Menunggu ${!room.game.player4 && !room.game.player3 ? '2' : '1'} Partner lagi... ${room.name ? `mengetik command dibawah ini *${usedPrefix}${command} ${room.name}*` : ''}` : 'Semua partner telah lengkap...'}`
    const buttonMessage = {
      contentText: lmao,
      footerText: '©games-wabot',
      buttons: buttons,
      headerType: 1
    }
    conn.sendMessage(m.chat, buttonMessage, MessageType.buttonsMessage)

    if (room.game.player1 && room.game.player2 && room.game.player3 && room.game.player4 && room.game.player5) {
      room.price.money += (Math.floor(Math.random() * 1000)) * 1
      room.price.exp += (Math.floor(Math.random() * 500)) * 1

      let str = `
Room ID: ${room.id}

${M(p1)}, ${M(p2)}, ${M(p3)}, ${M(p4)} dan ${M(p5)}

Sedang bermain true mafia...
`.trim()






function clockString(ms) {
  let h = Math.floor(ms / 3600000)
  let m = Math.floor(ms / 60000) % 60
  let s = Math.floor(ms / 1000) % 60
  console.log({ms,h,m,s})
  return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')
}
