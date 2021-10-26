let levelling = require('../lib/levelling')

let handler = async(m) => {
  let name = m.fromMe ? conn.user : conn.contacts[m.sender] 
  let sortedExp = Object.entries(global.DATABASE.data.users).sort((a, b) => b[1].exp - a[1].exp)
  let sortedLim = Object.entries(global.DATABASE.data.users).sort((a, b) => b[1].limit - a[1].limit)
  let sortedmoney = Object.entries(global.DATABASE.data.users).sort((a, b) => b[1].money - a[1].money)
  let sortedlevel = Object.entries(global.DATABASE.data.users).sort((a, b) => b[1].level - a[1].level)
  let usersExp = sortedExp.map(v => v[0])
  let usersLim = sortedLim.map(v => v[0])
  let usersmoney = sortedmoney.map(v => v[0])
  let userslevel = sortedlevel.map(v => v[0])

  let user = global.DATABASE.data.users[m.sender]
  let pp = await conn.getProfilePicture(m.sender)
  let { min, max } = levelling.xpRange(user.level, user.exp, global.multiplier)
  let url = `https://api.lolhuman.xyz/api/rank?apikey=${global.APIKeys["https://api.lolhuman.xyz"]}&img=${pp}&background=https://i.ibb.co/8B6Q84n/LTqHsfYS.jpg&username=${name.notify}&level=${user.level}&ranking=${userslevel.indexOf(m.sender) + 1}&currxp=${min}&xpneed=${max}`
  conn.sendFile(m.chat, url, "", `Halo ${name.notify}!\nLevel : ${user.level}\nExp : ${min}\n  Butuh *${max}* lagi untuk naik level`, m)
}

handler.command = /^(lvl)/i

module.exports = handler
