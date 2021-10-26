let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • Im3 [ 085783417029 ]
│ • OVO [ 085783417029 ]
    • Dana [ 085783417029 ]
╰────
╭─「 Hubungi 」
│ > Ingin donasi? https://wa.me/6285783417029?text=Bang+saya+mau+donasi
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
