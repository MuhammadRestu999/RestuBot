global.DeveloperMode = 'false' //true Or false
global.linkGC = ['https://chat.whatsapp.com/Lb4Emjih98rBiCZiZoS2eM', 'https://chat.whatsapp.com/FrluVyY5kBRIhY6yKfH4DI']
global.owner = ['6285783417029'] // Owner
global.mods = [] // moderator
global.prems = []  //premium
global.APIs = { // API Prefix
  // name: 'https://website'
  nrtm: 'https://nurutomo.herokuapp.com',
  xteam: 'https://api.xteam.xyz',
  nzcha: 'http://nzcha-apii.herokuapp.com',
  bg: 'http://bochil.ddns.net',
  fdci: 'https://api.fdci.se',
  dzx: 'https://api.dhamzxploit.my.id',
  bsbt: 'https://bsbt-api-rest.herokuapp.com',
  zahir: 'https://zahirr-web.herokuapp.com',
  zeks: 'https://api.zeks.xyz',
  LeysCoder: 'https://leyscoders-api.herokuapp.com',
  pencarikode: 'https://pencarikode.xyz',
  lolhuman: 'https://api.lolhuman.xyz',
  chipa: 'https://api.chipa.xyz'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': 'APIKEY_DISINI',
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://bsbt-api-rest.herokuapp.com': 'benniismael',
  'https://api.zeks.xyz': 'apivinz',
  'https://pencarikode.xyz': 'pais',
  'https://hardianto-chan.herokuapp.com': 'hardianto',
  'https://leyscoders-api.herokuapp.com': 'MIMINGANZ',
  'https://api.lolhuman.xyz': 'APIKEY_DISINI',
  'https://api.chipa.xyz': 'APIKEY_DISINI'
}

// Sticker WM
global.packname = 'Create By RestuBot\nOwner : Muhammad Restu'
global.author = ''

global.multiplier = 39 // The higher, The harder levelup

global.botwm = "©RestuBot" // Wm

let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
