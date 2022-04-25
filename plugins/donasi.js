let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • Im3 [ 085783417029 ]
╰────

╭─「 Donasi • Non Pulsa 」
│ • Dana [ 085783417029 ]
│ • Gopay [ 085783417029 ]
│ • OVO [ 085783417029 ]
│ • Saweria [ https://saweria.co/MuhammadRestu ]
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
