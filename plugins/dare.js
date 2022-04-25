let fetch = require('node-fetch')
let handler = async (m, { text }) => {
/*  let res = await fetch(global.API('abdillah', '/api/game/dare', {}, 'apikey'))
  if (!res.ok) throw await res.text()
  let json = await res.json()
  if (!json.result) throw 'Error!'
  if (json.result) m.reply(json.result.dare)
  else throw json*/
  let json = [
    "Foto kuburan tengah malam berani ga?",
    "Ambil foto bot, jadikan foto profil kamu selama 1 hari",
    "VN nyanyi balonku ada 5",
    "Kirim pesan ke mantan kamu dan bilang _aku masih suka sama kamu_",
    "Telfon crush/pacar sekarang dan ss ke pemain",
    "Pap ke salah satu anggota grup",
    "SS recent call whatsapp",
    "Kirim voice note bilang can i call u baby?",
    "Pake foto sule sampe 3 hari'",
    "Ketik pake bahasa daerah 24 jam",
    "Ganti nama menjadi _gue anak lucinta luna_ selama 5 jam",
    "Chat ke kontak wa urutan sesuai %batre kamu, terus bilang ke dia _i lucky to hv you_",
    "Prank chat mantan dan bilang *i love u, pgn balikan*",
    "Record voice baca surah al-kautsar",
    "Ganti nama jadi *BOWO* selama 24 jam",
    "Sebutkan tipe pacar mu!",
    "VN *aku mencintaimu*",
    "Kamu harus pap sekarang!",
    "Kamu harus bagi bagi limit, minimal 2 setiap pengguna",
    "Chatingan selama 1 jam harus 4l4Y 8AN93T",
    "Tag orang yang kamu suka",
    "Bilang i love you (nama pacar) kamu di ig story sekarang",
    "Telpon mama kamu dan bilang bahwa kamu rindu",
    "Pejamkan mata dan scroll kontak wa, siapa yang berhenti terakhir wajib kamu chat",
  ]
  m.reply(json[Math.floor(Math.random() * json.length)])
}
handler.help = ['dare']
handler.tags = ['fun']
handler.command = /^(dare|berani|tantangan)$/i
//ftwr
module.exports = handler
