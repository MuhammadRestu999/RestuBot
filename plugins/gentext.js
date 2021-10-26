let handler = async(m, {conn, text}) => {
  let tersedia = ["hilih", "wangy"]
  let textArr = text.split("|")
  let jenis = textArr[0]
  let teks = textArr[1]

  if(jenis.length == 0) throw "Jenisnya mana?"
  if(teks.length == 0) throw "Textnya mana?"

  let hilih = textArr[1].split("a").join("i").split("e").join("i").split("u").join("i").split("o").join("i")
  let wangy = `${textArr[1]} ${textArr[1]} ${textArr[1]}  ❤️ ❤️ ❤️ WANGI WANGI WANGI WANGI HU HA HU HA HU HA, aaaah baunya rambut ${textArr[1]} wangi aku mau nyiumin aroma wanginya ${textArr[1]} AAAAAAAAH ~ Rambutnya.... aaah rambutnya juga pengen aku elus-elus ~~ AAAAAH ${textArr[1]} keluar pertama kali di anime juga manis ❤️ ❤️ ❤️ banget AAAAAAAAH ${textArr[1]} AAAAA LUCCUUUUUUUUUUUUUUU............${textArr[1]} AAAAAAAAAAAAAAAAAAAAGH ❤️ ❤️ ❤️apa ? ${textArr[1]} itu gak nyata ? Cuma HALU katamu ? nggak, ngak ngak ngak ngak NGAAAAAAAAK GUA GAK PERCAYA ITU DIA NYATA NGAAAAAAAAAAAAAAAAAK PEDULI BANGSAAAAAT !! GUA GAK PEDULI SAMA KENYATAAN POKOKNYA GAK PEDULI. ❤️ ❤️ ❤️ ${textArr[1]} gw ...${textArr[1]} di laptop ngeliatin gw, ${textArr[1]} .. kamu percaya sama aku ? aaaaaaaaaaah syukur ${textArr[1]} aku gak mau merelakan ${textArr[1]} aaaaaah ❤️ ❤️ ❤️ YEAAAAAAAAAAAH GUA MASIH PUNYA ${textArr[1]} SENDIRI PUN NGGAK SAMA AAAAAAAAAAAAAAH`

  if(jenis == tersedia[0]) {
    m.reply(hilih)
  } else if(jenis == tersedia[1]) {
    m.reply(wangy)
  } else {
    let trsd = ""
    for(let n in tersedia) {
      if(tersedia[n] != tersedia[tersedia.length - 1]) {
        trsd.length == 0 ? trsd += tersedia[n] + ", " : trsd += ", " + tersedia[n]
      } else {
        trsd.length != 0 ? trsd += " & " + tersedia[n] : trsd += tersedia[n]
      }
    }
    m.reply("Jenis \"" + jenis + "\" Tidak ditemukan!\n\nJenis yang tersedia: " + trsd)
  }
}

handler.help = ['gentext']
handler.tags = ['']
handler.command = /^(gentext)/i

module.exports = handler
