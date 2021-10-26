let handler = async(m, { conn, text }) => {
  m.reply(require("http").STATUS_CODES[text] || "Tidak dapat menemukan \"" + text + "\"!")
}

handler.command = /^(error)/i

module.exports = handler
