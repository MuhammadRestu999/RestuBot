let handler = m => m
handler.before = m => {
  if(global.DATABASE.data.chats[m.chat].antiRasis == undefined) global.DATABASE.data.chats[m.chat].antirasis = false
  if(!global.DATABASE.data.chats[m.chat].antiRasis) return
  let kata = m.message.conversation.toLowerCase()
  let no = kata.includes("nigga") || kata.includes("nibba") || kata.includes("n1664") || kata.includes("ni66a")
  if(no) return conn.sendButtonImg(m.chat, "Kok kamu rasis bang?\n\nKlik tombol dibawah ↓ Untuk menonaktifkan (Admin & Owner)", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxs0CYpxfnz617M6I3BzEbSWPZ04MzktKcPw&usqp=CAU", "", "Nonaktifkan", "+antirasis off", m)
}

module.exports = handler
