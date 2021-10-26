let handler = async(m, { conm, text }) => {
  m.reply(`${text}`)
}

handler.command = /^(reply)/i

module.exports = handler
