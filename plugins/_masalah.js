/*
* Peler lu wkkaaakakakakak
*/

let handler = async ( m, { conn, command }) => {
  try {
    let name = conn.getName(m.sender)
    if (/masalah/i.test(command)) return conn.send2Button( m.chat, `Hai kak ${name}\nApakah Anda menemukan masalah pada bot ini?`, botwm, `Ya`, `+yhs`, `Tidak`, `+yho`, m)
    if (/yhs/i.test(command)) return conn.send3Button(m.chat, `hai ${name} Kamu menemukan masalah pada bot dibagian mana?`, `list masalah↓`, `FITUR DELAY`, `+fdelay`, `List Menu eror`, `+lmeror`, `Bot Tidak respon`, `+btres`, m)
    if (/yho/i.test(command)) return m.reply(`${name} Terima kasih Atas laporan anda`)
    if (/fdelay/i.test(command)) return conn.sendButton(m.chat, `Jika Kamu merasa Bot Mengalami Delay Silahkan report dibawah ya`, `sepertinya ada masalah?`, `LAPORKAN`, `+report Bot delay`, m)
    if (/lmeror/i.test(command)) return conn.sendButton( m.chat, `Menu eror ? Tekan tombol dibawah`, `↓`, `+bug menu`, m)
    if (/btres/i.test(command)) return conn.sendButton( m.chat, `Bot kadang merespon kadang tidak? mungkin Jaringan Yg diterima bot sedang mengalami gangguan!`, `Tidak membantu?`, `Kembali`, `+masalah`, m)
  } catch (e) {
    throw `${e}`
  }
}

handler.help = ['masalah']
handler.tag = ['info']
handler.command = /(masalah|yhs|yho|fdelay|lmeror|btres)/i

module.exports = handler

/*
*dibuat dengan biji kedelai
*/
