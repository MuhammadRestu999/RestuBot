let handler = async (m, {conn, command, args, usedPrefix}) => {
let type = (args[0] || '').toLowerCase()
//******PEMBATAS********\\
let pedagang = global.DATABASE._data.users[m.sender].pedagang
//**************************\\
let users = global.DATABASE._data.users[m.sender]
let time = global.DATABASE._data.users[m.sender].lastjb + 0
let jobs = `
Pilih Job Dibawah

> Kuli
> Dokter
> Montir
> Pedagang
> Petani
> Ojek
> Petani
> Pembunuh (beta)

Ketik
${usedPrefix}pilihjob montir

Untuk mereset job
${usedPrefix}resetjob
==========================
`.trim()

if (/job|pekerjaan/i.test(command)) {
switch(type) {
	case 'ojek':
	if (global.DATABASE._data.users[m.sender].pedagang == true) throw 'kamu telah memilih job lain'
if (global.DATABASE._data.users[m.sender].polisi == true) throw 'kamu telah memilih job lain'
if (global.DATABASE._data.users[m.sender].montir == true) throw 'kamu telah memilih job lain'
if (global.DATABASE._data.users[m.sender].petani  == true) throw 'kamu telah memilih job lain'
if (global.DATABASE._data.users[m.sender].dokter  == true) throw 'kamu telah memilih job lain'
if (global.DATABASE._data.users[m.sender].pembunuh == true) throw 'kamu telah memilih job lain'
if (global.DATABASE._data.users[m.sender].ojek  == true) throw 'coeg lu kan dah kerja disini'
if (new Date - global.DATABASE._data.users[m.sender].lastjb < 0) throw `anda telah menggunakan job ini, silahkan tunggu ${msToTime(time - new Date())} untung mengganti job`
conn.reply(m.chat, `selamat anda mendapatkan job ${type}`, m)
global.DATABASE._data.users[m.sender].ojek = true
global.DATABASE._data.users[m.sender].lastjb = new Date * 1
break
case 'dokter':
if (global.DATABASE._data.users[m.sender].pedagang == true) throw 'kamu telah memilih job lain'
if (global.DATABASE._data.users[m.sender].polisi == true) throw 'kamu telah memilih job lain'
if (global.DATABASE._data.users[m.sender].montir == true) throw 'kamu telah memilih job lain'
if (global.DATABASE._data.users[m.sender].petani  == true) throw 'kamu telah memilih job lain'
if (global.DATABASE._data.users[m.sender].ojek  == true) throw 'kamu telah memilih job lain'
if (global.DATABASE._data.users[m.sender].pembunuh == true) throw 'kamu telah memilih job lain'
if (global.DATABASE._data.users[m.sender].dokter  == true) throw 'bukannya dah kerja'
if (new Date - global.DATABASE._data.users[m.sender].lastjb < 0) throw `anda telah menggunakan job ini, silahkan tunggu ${msToTime(time - new Date())} untung mengganti job`
global.DATABASE._data.users[m.sender].dokter = true
global.DATABASE._data.users[m.sender].lastjb = new Date * 1
conn.reply(m.chat, `selamat anda mendapatkan job ${type}`, m)
break
case 'montir':
if (global.DATABASE._data.users[m.sender].pedagang == true) throw 'kamu telah memilih job lain'
if (global.DATABASE._data.users[m.sender].polisi == true) throw 'kamu telah memilih job lain'
if (global.DATABASE._data.users[m.sender].petani  == true) throw 'kamu telah memilih job lain'
if (global.DATABASE._data.users[m.sender].dokter  == true) throw 'kamu telah memilih job lain'
if (global.DATABASE._data.users[m.sender].ojek  == true) throw 'kamu telah memilih job lain'
if (global.DATABASE._data.users[m.sender].pembunuh == true) throw 'kamu telah memilih job lain'
if (global.DATABASE._data.users[m.sender].montir  == true) throw 'lukan dah kerja'
if (new Date - global.DATABASE._data.users[m.sender].lastjb < 0) throw `anda telah menggunakan job ini, silahkan tunggu ${msToTime(time - new Date())} untung mengganti job`
global.DATABASE._data.users[m.sender].montir = true
global.DATABASE._data.users[m.sender].lastjb = new Date * 1
conn.reply(m.chat, `selamat anda mendapatkan job ${type}`, m)
break
case 'petani':
if (global.DATABASE._data.users[m.sender].pedagang == true) throw 'kamu telah memilih job lain'
if (global.DATABASE._data.users[m.sender].polisi == true) throw 'kamu telah memilih job lain'
if (global.DATABASE._data.users[m.sender].montir == true) throw 'kamu telah memilih job lain'
if (global.DATABASE._data.users[m.sender].petani  == true) throw 'kamu telah memilih job lain'
if (global.DATABASE._data.users[m.sender].kuli  == true) throw 'kamu telah memilih job lain'
if (global.DATABASE._data.users[m.sender].dokter  == true) throw 'kamu telah memilih job lain'
if (global.DATABASE._data.users[m.sender].ojek  == true) throw 'kamu telah memilih job lain'
if (global.DATABASE._data.users[m.sender].pembunuh == true) throw 'kamu telah memilih job lain'
if (global.DATABASE._data.users[m.sender].petani  == 1) throw 'kamu telah menggunakan job ini'
if (new Date - global.DATABASE._data.users[m.sender].lastjb < 0) throw `anda telah menggunakan job ini, silahkan tunggu ${msToTime(time - new Date())} untung mengganti job`
global.DATABASE._data.users[m.sender].petani = true
global.DATABASE._data.users[m.sender].lastjb = new Date * 1
conn.reply(m.chat, `selamat anda mendapatkan job ${type}`, m)
break
case 'kuli':
if (global.DATABASE._data.users[m.sender].pedagang == true) throw 'kamu telah memilih job lain'
if (global.DATABASE._data.users[m.sender].polisi == true) throw 'kamu telah memilih job lain'
if (global.DATABASE._data.users[m.sender].montir == true) throw 'kamu telah memilih job lain'
if (global.DATABASE._data.users[m.sender].petani  == true) throw 'kamu telah memilih job lain'
if (global.DATABASE._data.users[m.sender].dokter  == true) throw 'kamu telah memilih job lain'
if (global.DATABASE._data.users[m.sender].ojek  == true) throw 'kamu telah memilih job lain'
if (global.DATABASE._data.users[m.sender].pembunuh == true) throw 'kamu telah memilih job lain'
if (global.DATABASE._data.users[m.sender].kuli  == true) throw 'lu kan dah kerj tulul'
if (new Date - global.DATABASE._data.users[m.sender].lastjb < 0) throw `anda telah menggunakan job ini, silahkan tunggu ${msToTime(time - new Date())} untung mengganti job`
global.DATABASE._data.users[m.sender].kuli = true
global.DATABASE._data.users[m.sender].lastjb = new Date * 1
conn.reply(m.chat, `selamat anda mendapatkan job ${type}`, m)
break
case 'pedagang':
if (global.DATABASE._data.users[m.sender].polisi == true) throw 'kamu telah memilih job lain'
if (global.DATABASE._data.users[m.sender].montir == true) throw 'kamu telah memilih job lain'
if (global.DATABASE._data.users[m.sender].petani  == true) throw 'kamu telah memilih job lain'
if (global.DATABASE._data.users[m.sender].kuli  == true) throw 'kamu telah memilih job lain'
if (global.DATABASE._data.users[m.sender].dokter  == true) throw 'kamu telah memilih job lain'
if (global.DATABASE._data.users[m.sender].ojek  == true) throw 'kamu telah memilih job lain'
if (global.DATABASE._data.users[m.sender].pembunuh == true) throw 'kamu telah memilih job lain'
if (global.DATABASE._data.users[m.sender].pedagang  == true) throw 'lukan dah kerja tolol'
if (new Date - global.DATABASE._data.users[m.sender].lastjb < 0) throw `anda telah menggunakan job ini, silahkan tunggu ${msToTime(time - new Date())} untung mengganti job`
global.DATABASE._data.users[m.sender].pedagang = true
global.DATABASE._data.users[m.sender].lastjb = new Date * 1
conn.reply(m.chat, `selamat anda mendapatkan job ${type}`, m)
break
case 'pembunuh':
if (global.DATABASE._data.users[m.sender].polisi == true) throw 'kamu telah memilih job lain'
if (global.DATABASE._data.users[m.sender].montir == true) throw 'kamu telah memilih job lain'
if (global.DATABASE._data.users[m.sender].petani  == true) throw 'kamu telah memilih job lain'
if (global.DATABASE._data.users[m.sender].kuli  == true) throw 'kamu telah memilih job lain'
if (global.DATABASE._data.users[m.sender].dokter  == true) throw 'kamu telah memilih job lain'
if (global.DATABASE._data.users[m.sender].ojek  == true) throw 'kamu telah memilih job lain'
if (global.DATABASE._data.users[m.sender].pedagang  == true) throw 'kamu telah memilih job lain'
if (global.DATABASE._data.users[m.sender].pembunuh == true) throw 'lukan dah kerja tolol'
if (new Date - global.DATABASE._data.users[m.sender].lastjb < 0) throw `anda telah menggunakan job ini, silahkan tunggu ${msToTime(time - new Date())} untung mengganti job`
global.DATABASE._data.users[m.sender].pembunuh = true
global.DATABASE._data.users[m.sender].lastjb = new Date * 1
conn.reply(m.chat, `selamat anda mendapatkan job ${type}`, m)
break
default:
                        return conn.reply(m.chat, jobs, m)
                }
                }
                
             }

handler.help = ['pilihjob','selectjob']
handler.tags = ['pekerjaan']
handler.command = /^(pilihjob|selectjob)$/i 

module.exports = handler
//
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
