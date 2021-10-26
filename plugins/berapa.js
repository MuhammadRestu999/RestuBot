let handler = async(m, { conn, text }) => {
  let Jam = text.toLowerCase().endsWith("jam") || text.toLowerCase().endsWith("h")
  let Menit = text.toLowerCase().endsWith("menit") || text.toLowerCase().endsWith("m")
  let Detik = text.toLowerCase().endsWith("detik") || text.toLowerCase().endsWith("s")
  let Milidetik = text.toLowerCase().endsWith("milidetik") || text.toLowerCase().endsWith("ms")


  if(Jam) {
    let n = Number(text.split("jam")[0])
    let mi = Math.floor(n * 1000)
    let de = Math.floor(n * 3600)
    let me = Math.floor(n * 60)
    m.reply(`${n} jam\n${me} menit\n${de} detik`)
  } else if(Menit) {
    let n = Number(text.split("menit")[0])
    let mi = Math.floor(n * 1000)
    let ja = Math.floor(n / 60)
    let de = Math.floor(n * 60)
    m.reply(`${ja} jam\n${n} menit\n${de} detik`)
  } else if(Detik) {
    let n = Number(text.split("detik")[0])
    let mi = Math.floor(n * 1000)
    let ja = Math.floor(n / 3600)
    let me = Math.floor(n / 60)
    m.reply(`${ja} jam\n${me} menit\n${n} detik`)
  } else if(Milidetik) {
 }
}

handler.command = /^(berapa)/i

module.exports = handler
