let handler = async(m, { conn, usedPrefix, command, text }) => {
  let usage = `Penggunaan : ${usedPrefix}${command} Tabung Gas LPG | RP 24.000`
  let susun = text.includes(" | ") ? text.split(" | ") : text.split("|")
  let nama_barang = susun[0]
  let harga_beli = susun[1]

  if(nama_barang == undefined || harga_beli == undefined) return m.reply(usage)

  harga_beli = Number(harga_beli.split(" ")[1].split(".").join(""))

  m.reply(`${nama_barang}\nKamu dapat menjualnya seharga *RP ${harga_beli + 2000}* (Dapat 2.000) / *RP ${harga_beli + 1000}* (Dapat 1.000)`)
}

handler.command = /^(penjualan)/i

module.exports = handler
