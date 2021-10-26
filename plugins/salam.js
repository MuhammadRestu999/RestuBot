let handler = m => m

handler.before = async (m) => {
  if(/^(Assalamu\'alaikum|Assalamualaikum|Assalamualaikum|Assalamu\'alaikum warahmatullahi wabarokatuhu)/i.test(m.text)) {
    m.reply(`\n*Wa'alaikumussalam warahmatullahi wabarokatuhu*\n`)
  }
}

module.exports = handler
