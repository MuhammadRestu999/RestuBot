let handler = async(m, { conn }) => {
  let terblokir = conn.blocklist
  let str = "[     *Daftar Orang Yang Terblokir*     ]\n\nJid :\n"
  for(let block in terblokir) {
    str += `  [ ${addZero(block)} ] ${terblokir[block]}\n`
  }

  str += "\n\nTag :\n"
  for(let block in terblokir) {
    str += `  [ ${addZero(block)} ] @${terblokir[block].split("@")[0]}\n`
  }

  m.reply(str)
}

handler.command = /^(blocklist)/i

module.exports = handler

function addZero(n) {
  n = Number(n)
  return n <= 9 ? "0" + (n + 1) : n + 1
}
