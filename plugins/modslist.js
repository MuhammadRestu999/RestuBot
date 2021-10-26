let handler = async(m, { conn }) => {
  if(global.mods.length == 0) return m.reply("Tidak ada mods!")
  let str = "Daftar mod bot ini :\n\n"
  for(let mod in global.mods) {
    str += `[${addZero(mod)}] => @${global.mods[mod]}\n`
  }
  m.reply(str)
}

handler.command = /^(mod?(s)?list)/i

module.exports = handler

function addZero(n) {
  n = Number(n) + 1
  return n < 10 ? "0" + n : n
}
