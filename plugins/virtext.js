let virt = [
  "*๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒*"
]

let handler = m => m
handler.before = (m, { conn }) => {
  if(m.text.includes(virt[0])) {
    conn.sendMessage(m.chat, "Virtext terdeteksi!\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nVirtext terdeteksi!", "conversation")
    conn.sendMessage(m.chat, "Virtext terdeteksi!\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nVirtext terdeteksi!", "conversation")
    conn.sendMessage(m.chat, "Virtext terdeteksi!\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nVirtext terdeteksi!", "conversation")
  }
}

module.exports = handler
