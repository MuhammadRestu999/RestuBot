let handler = async(m, { conn }) => {
  conn.reply(m.chat, `buat kalian yg ingin belajar bahasa jepang,βΊοΈsemoga bermanfaat,πβββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββ

β’ baka yarou ! = dasar bego!
β’ senpai = senior
β’ kouhai = junior
β’ hidoi = jahat
β’ dousta? = kenapa?, ada apa?
β’ nani!! = apa!!
β’ zutto = kalau saja, selalu
β’ kirei = indah
β’ kawaii = cantik, imut
β’ yaksoku = janji
β’ kedo/demo = tapi
β’ warui/gomen = maaf
β’ sumimasen = permisi, maaf
β’ omedetou, ne = selamat ya
β’ dame = jangan, tidak
β’ sugoi! = hebat, keren
β’ daijoubu desu = saya tidak apa apa / saya baik baik saja
β’ hanabi = kembang api
β’ tadaima = aku pulang
β’ okaerinasai = selamat pulang
β’ ja, mata/ mata ne = sampai jumpa
β’ ittekimasu = aku berangkat
β’itterasshai = hati hati di jalan
β’ ohayou = selamat pagi
β’ konnichiwa = selamat siang
β’ konbanwa = selamat malam
β’ oyasumi = selamat tidur
β’ moshi-moshi = halo
β’ zannen desu = sayang sekali
β’ irasshaimase = selamat datang
β’ onegai = tolong
β’ yoroshiku onegaishimasu = mohon bimbingannya/bantuannya
β’ doumo/arigatou = terima kasih
β’ iya = hai
β’ iie = tidak
β’ ittadakimasu = selamat makan
β’ nandemonai = bukan apa apa
β’ nanda korewa? = apa ini?
β’ dare desu ka? = siapa ini?
β’ wakatta = oke, ngerti.
β’ sou ne .. = begitulah, mungkin
β’ masaka.... = nggak mungkin..... (ah masa .....)
β’ naru hodo = oh gitu
β’yokatta... = syukurlaah....
β’ hontou ni?/souka? = bener gitu?
β’ kimi wa boku no mono = kamu milikkuuu
β’ ki o tsukete ne = hati-hati yah~
β’ onaka ga suita = aku laperr
β’ itadakimassuuu = selamat makaaannn
β’ ii yume wo mite ne = mimpi indah yah,
β’ yatta ! = horee!
β’ kawaisou ni... = kasian...
β’ chotto matte ! = tunggu bentar!
β’ uso = bohong
β’ uso tsuki ! = tukang bohong!
β’ uso jyanai! = jangan bohong!
β’ nan da yo!? = ape lu !?
β’ damareeee! = dieeemmm!
β’ omae wa kankei nai darou.. ! = bukan urusanmu..!
β’ mata ne / mata yo ~ = sampe jumpa~
β’ oyasumi = met istirahat (met tidur)
β’ jibun no sei da = salah sendiri
β’ hitomebore datta no yo... = cinta pada pandangan pertama...............(cikiciew)
β’ doki-doki shichatta yo... = aku jadi deg-degan nih...
β’ suki da .. = aku suka kamu
β’ kareshi ga iru no ? = udah punya pacar?
β’ bukkoroshite yaruuu! = akan kubunuh kauuu! (bisanya diucapkan kalau lagi pada berantem)
β’ kusso !! = ta* !! / br*ngs*k !! (diucapkan oleh kaum laki-laki dalam anime kalau lagi kesel)
β’ kimi no katte da! = terserah kamu dah!
β’ 39 (baca : sankyuu ) = makasih
β’ ittekimasu = aku berangkat
β’ itterasshai = silahkan berangkaat (jawaban dari ittekimasu) (shinchan selalu kebalik berkata "itterasshai" kalau mau pergi keluar rumah -_- ) β’ kami nomi zo shiru sekai = dunia hanya tuhan yang mengetahui..(ini sih judul anime... hehe)
β’ aitai naa = kangen nih... >.<
β’ ima made arigatou.. = makasih untuk segalanya... (kalau mau putus biasnaya suka ngomong gini deh)
β’ do iu koto? = maksudnya apa?
β’ chigau yo ! = salah kok!
β’ dame da yo! = ga boleh! (jangan!) β’ kocchi kocchi = sini sini
β’ naicha ikenai yo! = jangan nangis!
β’ anata dare na no? = kamu siapa?
β’ ii yo .. = boleh..~
β’ boku, kimi no koto suki da yo = aku suka kamu....(loh)
β’ dou sureba ii? = apa yang harus aku lakukan?
β’ yamete yo! = berhentii!
β’ bochi-bochi ganbari yaa! = (entah apa artinyah, namun biasanya ungkapan ini untuk memberikan semangat kayak "ganbatte")
β’ anata ga itooshii = aku sayang kamyu
β’ aite ni shinaide! = jangan diladeni!
β’ ikemen = cowok keren
β’ ichiyazuke = sistim kebut semalam/sks
β’ ki ni shinai = emang gw pikirin..
β’ kogyaru = anak baru gede/abg
β’ suki ni shiro! = terserah elo deh!
β’ kimochi= perasaan
β’ kekkai= pelindung
β’ mahcigai desu ga?= apakah aku salah
β’ hikaru nara= jika bercahaya
β’ hitorigoto= bicara sendiri
β’ akirameru= menyerah
β’ akirame nai= jangan menyerah
β’ mukuwareru= terbalas
β’ mukuwarenai= tidak terbalas
β’ itai= sakit
β’ kowai= menakutkan, serem, takut
β’ aniki= abang
β’ onichan= kakak laki2
β’ onechan= kakak perempuan
β’ imouto= adik
β’ tomodachi= teman
lah

*kata ganti*
saya = watashi, watakushi, shousa, boku, atashi, ore
kami = watashitachi, bokutachi, bokura, atashitachi, oretachi
kamu = anata, kimi, omae
kamu sekalian = anatagata, kimitachi, omaera
dia (laki) = kare, karera (jamak)
dia (perempuan) = kanojo, kanojora (jamak)
ini = kore, korera (jamak)
itu = sore, are, sorera (jamak), arera (jamak)

greeting
selamat = omedetou (gozaimasu)
selamat ulang tahun = tanjoubi omedetou
selamat pagi = ohayou (gozaimasu)
selamat siang = konnichiwa
selamat malam = konbanwa
selamat datang = youkoso, itteirasai
selamat tinggal = sayonara
selamat istirahat = oyasumi (nasai)
apa kabar = ogenki desuka, o kigen ikaga desuka (formal)
sampai jumpa lagi = mata aimashou, itte mairimasu

spada = gomen kudasai
permisi = shitsureishimasu
silakan = douzo
maaf = sumimasen, gomen (nasai)
terimakasih = doumo, arigatou (gozaimasu)
terimakasih kembali = dou itashimashite
iya = hai
tidak = iie
saya berangkat = ittekimasu
selamat jalan = itterasshai
saya pulang = tadaima
selamat datang = okaeri (nasai)
selamat makan = itadakimasu
terimakasih utk hidangannya = gochisousama deshita

angka (bango)
1 = ichi
2 = ni
3 = san
4 = shi/ yon
5 = go
6 = roku
7 = sichi/ nana
8 = hachi
9 = ku/ kyuu
10 = juu
11 = juuichi
12 = juuni
13 = juusan
14 = juushi/ juuyon
15 = juugo
16 = juuoku
17 = juusichi/ juunana
18 = juuhachi
19 = juukyuu
20 = nijuu
21 = nijuuichi
22 = nijuuni
23 = nijuusan
30 = sanjuu
37 = sanjuunana
40 = shijuu
50 = gojuu
60 = rokujuu
70 = nanajuu
80 = hachijuu
90 = kujuu
100 = hyaku
101 = hyakuichi
110 = hyakujuu
172 = hyakunanajuuni
1.000 = sen
1997 = sen.kyuuhyaku.kyuujuu.nana
2.000 = nisen
10.000 = man/ ichiman
1.000.000 = hyakuman

*hari-hari*
kanji:
ζζ₯: youbi
ζ₯:nichi

minggu = nichiyoubi ζ₯ζζ₯
senin = getsuyoubi ζζζ₯
selasa = kayoubi η«ζζ₯
rabu = suiyoubi ζ°΄ζζ₯
kamis = mokuyoubi ζ¨ζζ₯
jumat = kinyoubi ιζζ₯
sabtu = doyoubi εζζ₯

*copas/share* izin :v

pagi = asa
menjelang siang = gozen
siang = hiru
menjelang sore = gogo
sore = yuugata
malam = yoru/ ban

2 hari lalu = ototoi
kemarin = kinou
hari ini = kyou
besok = ashita
2 hari lagi = asatte
dulu = mukashi
sekarang = ima
masa depan = mirai/ shorai

minggu/ pekan = shuu
minggu depan = rai shuu

tanggal
tanggal 1 = tsuitachi
tanggal 2 = futsuka
tanggal 3 = mikka
tanggal 4 =yokka
tanggal 5 = itsuka
tanggal 6 = muika
tanggal 7 = nonoka
tanggal 8 = youka
tanggal 9 = kokonoka
tanggal 10 = toka
tanggal 11 = juuichi nichi
tanggal 12 = juuni ichi
tanggal 14 = juuyokka
tanggal 19 = juukyuu nichi
tanggal 20 = hatsuka
tanggal 21 = nijuuichi nichi
tanggal 23 = nijuusan nichi
tanggal 24 = nijuuyokka
tanggal 30 = sanjuu nichi
tanggal 31 = sanjuuichi nichi

nama bulan .:rumus: bilangan pokok + gatsu:.
januari = ichigatsu
februari = nigatsu
maret = sangatsu
april = yongatsu/ shigatsu
mei = gogatsu
juni = rokugatsu
juli = sichigatsu/ nanagatsu
agustus = hachigatsu
september = kugatsu
oktober = juugatsu
november = juuichigatsu
desember = juunigatsu

bulan = getsu
bulan lalu = sengetsu
bulan ini = kongetsu
bulan depan = raigetsu

*musim (kisetsu)*
musim panas = natsu
musim gugur = aki
musim dingin = fuyu
musim semi = haru

empat musim = shiki

tahun = nen/ toshi
tahu
kiri = hidari
di depan = mae ni
di belakang = ushiro ni
di samping = tonari ni

*anggota tubuh*
rambut = kami (no ke)
kepala = atama
mata = me
hidung = hana
telinga = mimi
gigi = ha
mulut = kuchi
tenggorokan = nodo
dada = mune
perut = onaka, hara
pusar = heso
lengan = ude
tangan = te
jari = yubi
kaki = ashi
kuku = tsume

warna
hitam = kuro
putih = shiro
merah = akai
biru = aoi
hijau = midori
kuning = soiro
ungu = murasaki
abu-abu = haiiro
jingga = orenjiiro
pink = momoiroya iy lah kata ganti
saya = watashi, watakushi, shousa, boku, atashi, ore
kami = watashitachi, bokutachi, bokura, atashitachi, oretachi
kamu = anata, kimi, omae
kamu sekalian = anatagata, kimitachi, omaera
dia (laki) = kare, karera (jamak)
dia (perempuan) = kanojo, kanojora (jamak)
ini = kore, korera (jamak)
itu = sore, are, sorera (jamak), arera (jamak)

greeting
selamat = omedetou (gozaimasu).
ohayou gozaimasu (γγ―γγγγγγΎγ) = selamat pagi (pukul 06:00 β 10:30)
konnichiwa (γγγ«γ‘γ―) = selamat siang (pukul 10:30 β 17:00)
konbanwa (γγγ°γγ―) = selamat malam (pukul 17:00 β 22:00)
oyasuminasai (γγγγΏγͺγγ) = selamat tidur (biasanyadiucapkan kepada pasangan/kekasih)
sayounara (γγγγͺγ) = selamat tinggal (diucapkan sebagai salam perpisahan dalam jangka waktu yang lama)
mata ashita (γΎγγγγ) = sampai jumpa besok (diucapkan apabila besok bertemu kembali)
mata raishuu (γΎγγγγγγ) = sampai jumpa minggu depan
mata raigetsu (γΎγγγγγ€) = sampai jumpa bulan depan
mata rainen (γΎγγγγ­γ) = sampai jumpa tahun depan (biasanya ketika tahun baru)

1. ε€§γγ(γγγγ) ooki-i = besar
2. ε°γγ(γ‘γγγ) chiisa-i = kecil
3. ι·γ(γͺγγ) naga-i = panjang
4. η­γ(γΏγγγ) mijika-i = pendek
5. ε€γ(γγγ) oo-i = banyak
6. ε°γͺγ(γγγͺγ) sukuna-i = sedikit
7. ε€ͺγ(γ΅γ¨γ) futo-i = gemuk, tebal
8. η΄°γ(γ»γγ) hoso-i = ramping, tipis
9. εγ(γγ€γ) atsu-i = tebal
10. θγ(γγγ) usu-i = tipis
11. εΊγ(γγγ) kata-i = keras
12. ζγγ(γγγγγ) yawaraka-i = lunak
13. η΄°γγ(γγΎγγ) komaka-i = kecil(uang)
14. η²γ(γγγ) ara-i = kasar
15. ζ°γγ(γγγγγ) atarashi-i = baru
16. ε€γ(γ΅γγ) furu-i = lama, tua
17. ι«γ(γγγ) taka-i = mahal
18. ε?γ(γγγ) yasu-i = murah
19. ζ©γ(γ―γγ) haya-i = cepat (waktu)
20. ιγ(γ―γγ) haya-i = cepat (kelajuan)
21. ιγ(γγγ) oso-i = lambat
22. ι γ(γ¨γγ) too-i = jauh
23. θΏγ(γ‘γγ) chika-i = dekat
24. εΌ·γ(γ€γγ) tsuyo-i = kuat
25. εΌ±γ(γγγ) yowa-i = lemah
26. ι«γ(γγγ) taka-i = tinggi, mahal
27. δ½γ(γ²γγ) hiku-i = rendah
28. η±γ(γγ€γ) atsu-i = panas (utk benda seperti makanan, minuman, air, dll)
29. ε·γγ(γ€γγγ) tsumeta-i = dingin (utk benda seperti makanan, minuman, air, dll)
30. ζΈ©γγ(γγγγγ) atataka-i = hangat (utk benda seperti makanan, minuman, air, dll)
31. γ¬γγ nuru-i = kurang panas. tidak panas dan tidak dingin juga. (air)
32. ιγ(γγγ) ao-i = biru
33. θ΅€γ(γγγ) aka-i = merah
34. ι»θ²γ(γγγγ) kiiro-i = kuning
35. ι»γ(γγγ) kuro-i = hitam
36. η½γ(γγγ) shiro-i = putih
37. θΆθ²γ(γ‘γγγγ) chairo-i = coklat
38. δΈΈγ(γΎγγ) maru-i = bundar, bulat
39. ηγ(γγΎγ) ama-i = manis
40. θΎγ(γγγ) kara-i = pedas
41. γγ£γ±γ suppa-i = asam
42. ε‘©θΎγ(γγγγγ) shiokara-i = asin
43. θ¦γ(γ«γγ) niga-i = pahit
44. ζΏγ(γγ) ko-i = pekat
45. θγ(γγγ) usu-i = tipis, encer(rasanya)
46. γγγγ oishi-i = enak
47. γΎγγ mazu-i = tidak enak
48. ζγ(γγ€γ) atsu-i = panas(suhu)
49. ε―γ(γγγ) samu-i = dingin(suhu)
50. ζγγ(γγγγγ) atataka-i = hangat(suhu)
51. ζΆΌγγ(γγγγ) suzushi-i = sejuk(suhu)
52. θΈζγ(γγγγ€γ) mushiatsu-i = panas gerah(suhu)
53. ζγγ(γγγγ) akaru-i = terang, riang
54. ζγ(γγγ) kura-i = gelap, suram
55. ζ±γ(γγγͺγ) kitana-i = kotor
56. ιγ(γγγ) omo-i = berat
57. θ»½γ(γγγ) karu-i = ringan
58. θ©³γγ(γγγγ) kuwashi-i = detail
59. ι£γγ(γγγγγ) muzukashi-i = sulit
60. ζγγ(γγγγ) yasashi-i = mudah
61. ηγγ(γγγγγ) mezurashi-i = langka
62. γγγγ(γγγγ) okashi-i = aneh, lucu
63. ε±γͺγ(γγΆγͺγ) abuna-i = berbahaya
64. γγΎγ(γγΎγ) uma-i = enak, pandai
65. γγ(γγ) i-i = bagus
66. ζͺγ(γγγ) waru-i = jelek
67. γ²γ©γ(γ²γ©γ) hido-i = kejam
68. γγγγ(γγγγ) urusa-i = berisik
69. εΏγγ(γγγγγ) isogashi-i = sibuk
70. ζ­£γγ(γγ γγ) tadashi-i = benar
71. γγγ sugo-i = hebat
72. η΄ ζ΄γγγ(γγ°γγγ) subarashi-i = luar biasa
73. γγ£γγγ kakkoi-i = keren, terlihat bagus
74. γγγ era-i = pintar, hebat, bagus
75. δ»²γγγ(γͺγγγγ) naka ga i-i = rukun, akrab (*ini bukan kosa kata tp kalimat)
76. θ¦ͺγγ(γγγγ) shitashi-i = akrab
77. εͺγγ(γγγγ) yasashi-i = baik hati, ramah
78. γγγγ(γγγγ) kawai-i = cantik, lucu, imut
79. ηΎγγ(γγ€γγγ) utsukushi-i = indah
80. ε³γγ(γγ³γγ) kibishi-i = tegas
81. ε€§δΊΊγγ(γγ¨γͺγγ) otonashi-i = bersifat lemah lembut dan tidak keras
82. ζ₯½γγ(γγ?γγ) tanoshi-i = menyenangkan
83. ι’η½γ(γγγγγ) omoshiro-i = menarik, lucu
84. γ€γΎγγͺγ tsumarana-i = membosankan, tidak menarik
85. γγγγ ureshi-i = senang, gembira
86. ε―γγ(γγ³γγ) sabishi-i = merasa sepi
87. ζγ(γγγ) kowa-i = takut
88. ζ²γγ(γγͺγγ) kanashi-i = sedih
89. ζ₯γγγ(γ―γγγγ) hazukashi-i = malu
90. ηΎ¨γΎγγ(γγγγΎγγ) urayamashi-i = iri hati
91. ζγγγ(γͺγ€γγγ) natsukashi-i = terkenang, melepaskan rindu
92. η γ(γ­γγ) nemu-i = mengantuk
93. ηγ(γγγ) ita-i = merasa nyeri,sakit
94. ζ¬²γγ(γ»γγ) hoshi-i = ingin mendapatkan
95. η‘γ(γͺγ) na-i = tidak ada
1. ζ?εΏ΅(γγγ­γ) zannen = menyayangkan
2. εΏι(γγγ±γ) shinpai = khawatir
3. δΈε?(γ΅γγ) fuan = cemas
4. ε₯½γ(γγ) suki = suka
5. ε«γ(γγγ) kirai = tidak sukaγ»benci
6. ε€§ε₯½γ(γ γγγ) daisuki = suka sekali
7. ε€§ε«γ(γ γγγγ) daikirai = benci sekali
8. γγγ kiree = cantik, bersih
9. γ«γγγ nigiyaka = ramai
10. ιγ(γγγ) shizuka = tenang
11. θ€ι(γ΅γγγ€) fukuzatsu = rumit
12. η°‘ε(γγγγ) kantan = mudah
13. δΎΏε©(γΉγγ) benri = praktis
14. δΈδΎΏ(γ΅γΉγ) fuben = tidak praktis
15. εΉΈγ(γγγγ) shiawase = bahagia
16. η΄ ζ΅(γγ¦γ) suteki = bagus(dan terpesona)
17. ζε(γγγγ) yuumee = terkenal
18. ε?ε¨(γγγγ) anzen = aman
19. ε±ιΊ(γγγ) kiken = berbahaya
20. θ²γ(γγγγ) iroiro = bermacam
21. ε€§δΈε€«(γ γγγγγΆ) daijoobu = tidak apa apa
22. ε€§δΊ(γ γγ) daiji = penting
23. ε€§ε(γγγγ€) taisetsu = penting
24. ι§η?(γ γ) dame = tidak boleh,situasinya tidak bagus
25. ε€(γΈγ) hen = aneh
26. η‘ι§(γγ ) muda = sia-sia
27. ζ₯(γγγ) kyuu = mendadak
28. δΈζ(γγγγ) joozu = pandai
29. δΈζ(γΈγ) heta = tidak pandai
30. εΎζ(γ¨γγ) tokui = pandai, jago
31. θ¦ζ(γ«γγ¦) nigate = tidak begitu suka, tidak pandai, lemah
32. ζ(γ²γΎ) hima = senggang
33. γγγγγ kawaisoo = kasihan
34. η«ζ΄Ύ(γγ£γ±) rippa = megah, layak dihormati
35. ε€§ε€(γγγΈγ) taihen = berat (*hal, kasus, peristiwa, dll, bukan benda)
36. ζ₯½(γγ) raku = enteng, mudah
37. η‘η(γγ) muri = mustahil
38. γγγγ oshare = modis
39. δΈε―§(γ¦γγ­γ) teenee = sopan, halus, ramah, teliti
40. θ¦ͺε(γγγγ€) shinsetsu = baik hati, ramah
41. γγ³γ΅γ (γ―γγγ) hansamu = ganteng
42. ηι’η?(γΎγγ) majime = rajin, serius, jujur
43. δΈηι’η?(γ΅γΎγγ) fumajime = tidak serius, tidak jujur
44. ε«(γγ) iya = tidak suka / benci
45. δΈζζΈε½(γγ£γγγγγγ) isshokenmee / δΈηζΈε½(γγ£γγγγγγγ) isshookenmei = sungguh-sungguh
46. ηγ(γγγ) sakan = popular
47. ιͺι­(γγγΎ) jama = mengganggu
48. εε(γγγγΆγ) juubun = cukup
49. δΈε€«(γγγγΆ) joobu = kuat
50. ι©ε½(γ¦γγ¨γ) tekitoo = tepat, yg sesuai
51. ηΉε₯(γ¨γγΉγ€) tokubetsu = khusus, spesial
52. θͺη±(γγγ) jiyuu = bebas
53. γΎγ£γγ massugu = lurus
54. η±εΏ(γ­γ£γγ) nesshin = dng sungguh hati, dng rajin
55. εΏθ¦(γ²γ€γγ) hitsuyoo = perlu
56. ε₯(γΉγ€) betsu = lain, beda
57. δΈζθ­°(γ΅γγ) fushigi = ajaib
58. θ±ͺθ―(γγγ) gooka = mewah
59. εγ(γγͺγ) onaji = sama
60. δΌη΅±η(γ§γγ¨γγ¦γ) dentoteki = tradisional
61. ζ΄»ηΊ(γγ£γ±γ€) kappatsu = aktif
62. θͺ ε?(γγγγ€) seejitsu = tulus hati, setia
63. γγγΎγΎ(γγγΎγΎ) wagamama = bersifat egois
64. ι εΊ(γγγ) ganko = keras kepala
65. η΄ η΄(γγͺγ) sunao = patuh, polos
66. ζε°ζͺ(γγγγ) ijiwaru = bersifat tega, jahat
67. εγ‘ζ°(γγ‘γ) kachiki = tidak mau kalah
68. η₯η΅θ³ͺ(γγγγγγ€)
shinkeeshitsu = bersifat sensitif, khawatir berlebihan

smoga bermanfaat:v
tuh gan buat kalian yg mau belajar bhs jepang`, m)
}

handler.command = /^(belajarjepang|learnjapan)/i

module.exports = handler
