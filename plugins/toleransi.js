let handler = m => m

handler.before = async (m) => {
  if(/^(shalom)/i.test(m.text)) {
    m.reply(`\n*wa'alaikum*\n\nDalam sebuah hadis yang diriwayatkan Imam Bukhari, Rasulullah SAW bersabda, \"Apabila ahli kitab bersalam kepada kalian maka ucapkanlah wa\'alaikum.\"\n`)
  }
}

module.exports = handler
