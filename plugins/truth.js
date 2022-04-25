let fetch = require('node-fetch')
let handler = async (m, { text }) => {
/*  let res = await fetch(global.API('abdillah', '/api/game/truth', {}, 'apikey'))
  if (!res.ok) throw await res.text()
  let json = await res.json()
  if (!json.result) throw 'Error!'
  if (json.result) m.reply(json.result.truth)
  else throw json*/
  let json = [
    "Pernah ngambil uang ortu apa ga?",
    "Pernah bohong sama ortu apa aja?\nCoba ceritakan tentang kebohongannya",
    "Apa makanan yang kamu sukai?",
    "Siapa yang mau di jadikan pacar di gc ini?",
    "Apa mimpi terburukmu?",
    "Apa hal paling memalukan dari temanmu?",
    "Pernah suka sama siapa aja? berapa lama?",
    "Kalau boleh atau kalau mau, di gc/luar gc siapa yang akan kamu jadikan sahabat?(boleh beda/sma jenis)",
    "Apa ketakutan terbesar kamu?",
    "Pernah suka sama orang dan merasa orang itu suka sama kamu juga?",
    "Siapa nama mantan pacar teman mu yang pernah kamu sukai diam diam?",
    "Pernah gak nyuri uang nyokap atau bokap? Alesanya?",                                                                 "Hal yang bikin seneng pas lu lagi sedih apa?",
    "Pernah cinta bertepuk sebelah tangan? kalo pernah sama siapa? rasanya gimana brou?",
    "Pernah jadi selingkuhan orang?",
    "Hal yang paling ditakutin",
    "Siapa orang yang paling berpengaruh kepada kehidupanmu",
    "Hal membanggakan apa yang kamu dapatkan di tahun ini",
    "(bgi yg muslim) pernah ga solat seharian?",
    "Siapa yang paling mendekati tipe pasangan idealmu di sini",
    "Suka mabar(main bareng)sama siapa?",
    "Pernah nolak orang? alasannya kenapa?",
    "Sebutkan kejadian yang bikin kamu sakit hati yang masih di inget",
    "Pencapaian yang udah didapet apa aja ditahun ini?",
    "Kebiasaan terburuk lo pas di sekolah apa?",
    "(bgi yg bisa ngoding) apa aja bahasa pemrograman yang kamu bisa?",
    "Pernahkah kamu selingkuh?",
    "Siapa orang yang diam-diam kamu sukai?",
    "Apa rahasia yang kamu sembunyikan dari orangtuamu?",
    "Kalau kamu bisa jadi tidak terlihat, apa hal pertama yang akan kamu lakukan?",
    "Kapan terakhir kali kamu menangis?",
    "Siapa orang terakhir yang kamu kepoin di media sosial?",
    "Kesalahan terburuk apa yang pernah kamu lakukan?",
    "Kapan terakhir kali kamu berbohong?",
    "Acara TV apa yang paling kamu benci? Beri tahu alasannya!",
    "Siapa orang yang paling sering kamu chat?"
  ]
  m.reply(json[Math.floor(Math.random() * json.length)])
}
handler.help = ['truth']
handler.tags = ['fun']
handler.command = /^(truth|kebenaran|kejujuran)$/i
//ftwr
module.exports = handler
