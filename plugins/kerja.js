let { MessageType } = require('@adiwajshing/baileys')

let handler = async (m, {conn, command, args, usedPrefix}) => {
let type = (args[0] || '').toLowerCase()
let users = global.DATABASE._data.users[m.sender]
let time = global.DATABASE._data.users[m.sender].lastjb + 300000
//let __timers = (new Date - global.DATABASE._data.users[m.sender].lastkerja)
   // let _timers = (0 - __timers)
   // let timers = clockString(_timers) 
    //JANGAN DI OTAK ATIK
//THIS PLUGINS BY RIZKY
//PEMBATAS
let penumpan = ['mas mas','bapak bapak','cewe sma','bocil epep','emak emak']
let penumpang = penumpan[Math.floor(Math.random() * penumpan.length)]
let daganga = ['wortel','sawi','selada','tomat','seledri','cabai','daging','ikan','ayam']
let dagangan = daganga[Math.floor(Math.random() * daganga.length)]
let pasie = ['sakit kepala','cedera','luka bakar','patah tulang']
let pasien = pasie[Math.floor(Math.random() * pasie.length)]
let pane = ['Wortel','Kubis','stowbery','teh','padi','jeruk','pisang','semangka','durian','rambutan']
let panen = pane[Math.floor(Math.random() * pane.length)]
let bengke = ['mobil','motor','becak','bajai','bus','angkot','becak','sepeda']
let bengkel = bengke[Math.floor(Math.random() * bengke.length)]
let ruma = ['Membangun Musholla', 'Memperbaiki Musholla', 'Membangun Masjid', 'Memperbaiki Masjid', 'Membangun Rumah','Membangun Gedung','Memperbaiki Rumah','Memperbaiki Gedung','Membangun Fasilitas Umum','Memperbaiki Fasilitas Umum']
let rumah = ruma[Math.floor(Math.random() * ruma.length)]
let membunu = ['presiden', 'tukang bakso', 'tentara', 'mantan', 'tukang parkir', 'raja', 'munir', 'soeharto']
let membunuh = membunu[Math.floor(Math.random() * membunu.length)]

let pppecat = ['Ruko Kebakaran','LO NGOCOK DIDEPAN UMUM','Males Malesan','Ngew istrinya yg punya ruko']
let alasanpecat = pppecat[Math.floor(Math.random() * pppecat.length)]
let ddppecat = ['Bakar Pasien','Jual Organ Dalem ke Lapak ilegal','serinv telat']
let alasanpasien = ddppecat[Math.floor(Math.random() * ddppecat.length)]
let krna = ['tidak melakukan tugas', 'identitas ketauan polisi']
//Uang
let uangm = Math.floor(Math.random() * 10) + 10000
let duit = Math.floor(Math.random() * 20) + 20000
let duitm = Math.floor(Math.random() * 50) + 50000
let duitd = Math.floor(Math.random() * 62) + 62000
let duitr = Math.floor(Math.random() * 20) + 40000
let duitk = Math.floor(Math.random() * 70) + 70000
let uhar = Math.floor(Math.random() * 100) + 60000
//ANJAY
let _pecat= `${pickRandom(['1', '1', '1', '1'])}`
            let pecat = (_pecat * 1)
            let ppecat = `KAMU KENA PECAT KARNA KAMU ${alasanpecat}`
let _dpecat = `${pickRandom(['1', '0', '0', '1'])}`
            let dpecat = (_dpecat * 1)
            let dppecat = `KAMU DI PECAT KARNA ${alasanpasien}`
let _pct= `${pickRandom(['0', '1', '1', '0'])}`
           let pctx = (_pct * 1)
           let pctz = `KAMU DI PECAT KARNA ${krna}`
//GAK RAPIH G GANTENG
//PEMBATAS\\
let kerjam = `
_✒️contoh ketik:_
${usedPrefix+command} ojek
_Untuk Claim Pekerjaan ketik:_
${usedPrefix}selectjob ojek

*📝List Kerja:*
🎐 Ojek
🎐 Dokter
🎐 Petani
🎐 Pedagang
🎐 Montir
🎐 Kuli
🎐 Pembunuh

*📌Jika Fitur Ini eror laporkan owner*
`.trim()
if (/kerjadulu|kerja|work/i.test(command)) {
switch(type) {
	case 'ojek':
	if (!global.DATABASE._data.users[m.sender].ojek) throw 'ini bukan tugas kamu atau kamu pengangguran!'
if (new Date - global.DATABASE._data.users[m.sender].lastkerja < 300000)  throw `Kamu sudah bekerja\nSaatnya istirahat selama ${msToTime(time - new Date())}`
	global.DATABASE._data.users[m.sender].money += uangm
global.DATABASE._data.users[m.sender].lastkerja = new Date * 1
	m.reply(`Kamu Sudah Mengantarkan *${penumpang}*\nDan mendapatkan uang senilai *Rp ${uangm}*`)
break
     case 'pedagang':
     if (!global.DATABASE._data.users[m.sender].pedagang) throw 'ini bukan tugas kamu atau kamu pengangguran!'
if (new Date - global.DATABASE._data.users[m.sender].lastkerja < 300000)  throw `Kamu sudah bekerja\nSaatnya istirahat selama ${msToTime(time - new Date())}`
	global.DATABASE._data.users[m.sender].money += duit
global.DATABASE._data.users[m.sender].lastkerja = new Date * 1
	m.reply(`Ada pembeli yg membeli *${dagangan}*\nDan mendapatkan uang senilai *Rp ${duit}*`)
	if (pecat > 1 ) {
                   global.DATABASE._data.users[m.sender].pedagang -= pecat * 1
                   m.reply(ppecat)
            }
break
      case 'dokter':
 if (!global.DATABASE._data.users[m.sender].dokter) throw 'ini bukan tugas kamu atau kamu pengangguran!'
if (new Date - global.DATABASE._data.users[m.sender].lastkerja < 300000)  throw `Kamu sudah bekerja\nSaatnya istirahat selama ${msToTime(time - new Date())}`
	global.DATABASE._data.users[m.sender].money += duitm
global.DATABASE._data.users[m.sender].lastkerja = new Date * 1
	m.reply(`Kamu menyembuhkan pasien *${pasien}*\nDan mendapatkan uang senilai *Rp ${duitm}*`)
break
       case 'petani':
if (!global.DATABASE._data.users[m.sender].petani) throw 'ini bukan tugas kamu atau kamu pengangguran!'
if (new Date - global.DATABASE._data.users[m.sender].lastkerja < 300000)  throw `Kamu sudah bekerja\nSaatnya istirahat selama ${msToTime(time - new Date())}`
	global.DATABASE._data.users[m.sender].money += uangm
global.DATABASE._data.users[m.sender].lastkerja = new Date * 1
	m.reply(`${panen} Sudah Panen\nDan Kamu menjualnya dan mendapatkan uang senilai Rp ${duitd}`)
break
     case 'montir':
 if (!global.DATABASE._data.users[m.sender].montir) throw 'ini bukan tugas kamu atau kamu pengangguran!'
if (new Date - global.DATABASE._data.users[m.sender].lastkerja < 300000)  throw `Kamu sudah bekerja\nSaatnya istirahat selama ${msToTime(time - new Date())}`
	global.DATABASE._data.users[m.sender].money += duitr
global.DATABASE._data.users[m.sender].lastkerja = new Date * 1
	m.reply(`Kamu Baru saja mendapatkan pelanggan dan memperbaiki *${bengkel}*\nDan kamu mendapatkan uang senilai *Rp ${duitr}*`)
break
      case 'kuli':
 if (!global.DATABASE._data.users[m.sender].kuli) throw 'ini bukan tugas kamu atau kamu pengangguran!'
if (new Date - global.DATABASE._data.users[m.sender].lastkerja < 300000)  throw `Kamu sudah bekerja\nSaatnya istirahat selama ${msToTime(time - new Date())}`
	global.DATABASE._data.users[m.sender].money += duitk
global.DATABASE._data.users[m.sender].lastkerja = new Date * 1
	m.reply(`Kamu baru saja selesai ${rumah}\nDan mendapatkan uang senilai *Rp ${duitk}*`)
break
      case 'pembunuh':
 if (!global.DATABASE._data.users[m.sender].pembunuh) throw 'ini bukan tugas kamu atau kamu pengangguran!'
if (new Date - global.DATABASE._data.users[m.sender].lastkerja < 300000)  throw `Kamu sudah bekerja\nSaatnya istirahat selama ${msToTime(time - new Date())}`
	global.DATABASE._data.users[m.sender].money += uhar
global.DATABASE._data.users[m.sender].lastkerja = new Date * 1
	m.reply(`Kamu baru saja membunuh *${membunuh}*\nDan mendapatkan uang senilai *Rp ${uhar}*`)
break

default:
                        return conn.sendButton( m.chat, kerjam, `Games Bot`,`Back`,'+gmenu')
                }
                }
                
                }
///AKSJDDJ
handler.help = ['kerja','work']
handler.tags = ['pekerjaan']
handler.command = /^kerja$/i 

module.exports = handler
//JANGAN DIUBAH YA YG DIBAWAH
function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)]
}
function msToTime(duration) {
  var milliseconds = parseInt((duration % 1000) / 100),
    seconds = Math.floor((duration / 1000) % 60),
    minutes = Math.floor((duration / (1000 * 60)) % 60),
    hours = Math.floor((duration / (1000 * 60 * 60)) % 24)

  hours = (hours < 10) ? "0" + hours : hours
  minutes = (minutes < 10) ? "0" + minutes : minutes
  seconds = (seconds < 10) ? "0" + seconds : seconds

  return hours + " jam " + minutes + " menit"
}
