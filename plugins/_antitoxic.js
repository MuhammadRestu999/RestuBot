let handler = m => m
handler.before = m => {
  let chat = global.DATABASE.data.chats[m.chat]
  if(chat.antiToxic) {
    let toxic = ["anj", "anjing", "asu", "asw", "kntl", "kontol", "mmk", "memek"]
    let args = m.text.toLowerCase().split(" ")
    for (let tox of toxic) {
      if(args.includes(tox)) {
        return m.reply("Jangan toxic!!")
      }
    }
  }
}

module.exports = handler
