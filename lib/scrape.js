const cheerio = require("cheerio")
const fetch = require("node-fetch")
const axios = require("axios")
const qs = require("qs")
const fs = require("fs")
const chalk = require("chalk")
const { JSDOM } = require("jsdom")
const FormData = require("form-data")
const FakeUseragent = require("fake-useragent")
const path = require("path")

function quotes(input) {
    return new Promise((resolve, reject) => {
        fetch("https://jagokata.com/kata-bijak/kata-" + input.replace(/\s/g, "_") + ".html?page=1")
            .then(res => res.text())
            .then(res => {
                const $ = cheerio.load(res)
                data = []
                $('div[id="main"]').find('ul[id="citatenrijen"] > li').each(function (index, element) {
                    x = $(this).find('div[class="citatenlijst-auteur"] > a').text().trim()
                    y = $(this).find('span[class="auteur-beschrijving"]').text().trim()
                    z = $(element).find('q[class="fbquote"]').text().trim()
                    data.push({ author: x, bio: y, quote: z })
                })
                data.splice(2, 1)
                if (data.length == 0) return resolve({ creator: 'BOTSTYLE', status: false })
                resolve({ creator: 'BOTSTYLE', status: true, data })
            }).catch(reject)
    })
}

function joox(query) {
    return new Promise((resolve, reject) => {
        const time = Math.floor(new Date() / 1000)
        axios.get('http://api.joox.com/web-fcgi-bin//web_search?lang=id&country=id&type=0&search_input=' + query + '&pn=1&sin=0&ein=29&_=' + time)
            .then(({ data }) => {
                let result = []
                let hasil = []
                let promoses = []
                let ids = []
                data.itemlist.forEach(result => {
                    ids.push(result.songid)
                });
                for (let i = 0; i < data.itemlist.length; i++) {
                    const get = 'http://api.joox.com/web-fcgi-bin/web_get_songinfo?songid=' + ids[i]
                    promoses.push(
                        axios.get(get, {
                            headers: {
                                Cookie: 'wmid=142420656; user_type=1; country=id; session_key=2a5d97d05dc8fe238150184eaf3519ad;'
                            }
                        })
                            .then(({ data }) => {
                                const res = JSON.parse(data.replace('MusicInfoCallback(', '').replace('\n)', ''))
                                hasil.push({
                                    lagu: res.msong,
                                    album: res.malbum,
                                    penyanyi: res.msinger,
                                    publish: res.public_time,
                                    img: res.imgSrc,
                                    mp3: res.mp3Url
                                })
                                Promise.all(promoses).then(() => resolve({
                                    creator: "Benniismael",
                                    status: true,
                                    data: hasil,
                                }))
                            }).catch(reject)
                    )
                }
            }).catch(reject)
    })
}

function tiktok(url) {
    return new Promise(async (resolve, reject) => {
        axios.get('https://ttdownloader.com/', {
            headers: {
                "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
                "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
                "cookie": "PHPSESSID=9ut8phujrprrmll6oc3bist01t; popCookie=1; _ga=GA1.2.1068750365.1625213061; _gid=GA1.2.842420949.1625213061"
            }
        })
            .then(({ data }) => {
                const $ = cheerio.load(data)
                let token = $('#token').attr('value')
                let config = {
                    'url': url,
                    'format': '',
                    'token': token
                }
                axios('https://ttdownloader.com/req/', {
                    method: 'POST',
                    data: new URLSearchParams(Object.entries(config)),
                    headers: {
                        "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
                        "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
                        "cookie": "PHPSESSID=9ut8phujrprrmll6oc3bist01t; popCookie=1; _ga=GA1.2.1068750365.1625213061; _gid=GA1.2.842420949.1625213061"
                    }
                })
                    .then(({ data }) => {
                        const $ = cheerio.load(data)
                        resolve({
                            nowm: $('div:nth-child(2) > div.download > a').attr('href'),
                            wm: $('div:nth-child(3) > div.download > a').attr('href'),
                            audio: $('div:nth-child(4) > div.download > a').attr('href')
                        })
                    })
            })
            .catch(reject)
    })
}

function twitter(url) {
    return new Promise((resolve, reject) => {
        let params = new URLSearchParams()
        params.append('URL', url)
        fetch('https://twdown.net/download.php', { method: 'POST', body: params })
            .then(res => res.text())
            .then(res => {
                const $ = cheerio.load(res);
                data = []
                $('div.container').find('tbody > tr > td').each(function (index, element) {
                    x = $(this).find('a').attr('href')
                    if (x !== '#') {
                        if (typeof x !== 'undefined') {
                            data.push({ url: x })
                        }
                    }
                })
                if (data.length == 0) return resolve({ status: false })
                resolve({ status: true, data })
            }).catch(reject)
    })
}

function igdl(url) {
    return new Promise(async (resolve, reject) => {
        axios.request({
            url: 'https://www.instagramsave.com/download-instagram-videos.php',
            method: 'GET',
            headers: {
                "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
                "cookie": "PHPSESSID=ugpgvu6fgc4592jh7ht9d18v49; _ga=GA1.2.1126798330.1625045680; _gid=GA1.2.1475525047.1625045680; __gads=ID=92b58ed9ed58d147-221917af11ca0021:T=1625045679:RT=1625045679:S=ALNI_MYnQToDW3kOUClBGEzULNjeyAqOtg"
            }
        })
            .then(({ data }) => {
                const $ = cheerio.load(data)
                const token = $('#token').attr('value')
                let config = {
                    headers: {
                        'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
                        "sec-ch-ua": '" Not;A Brand";v="99", "Google Chrome";v="91", "Chromium";v="91"',
                        "cookie": "PHPSESSID=ugpgvu6fgc4592jh7ht9d18v49; _ga=GA1.2.1126798330.1625045680; _gid=GA1.2.1475525047.1625045680; __gads=ID=92b58ed9ed58d147-221917af11ca0021:T=1625045679:RT=1625045679:S=ALNI_MYnQToDW3kOUClBGEzULNjeyAqOtg",
                        "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
                    },
                    data: {
                        'url': url,
                        'action': 'post',
                        'token': token
                    }
                }
                axios.post('https://www.instagramsave.com/system/action.php', qs.stringify(config.data), { headers: config.headers })
                    .then(({ data }) => {
                        if(data.error) reject(data)
                        resolve(data.medias)
                    })
            })
            .catch(reject)
    })
}

function igstory(username) {
    return new Promise(async (resolve, reject) => {
        axios.request({
            url: 'https://www.instagramsave.com/instagram-story-downloader.php',
            method: 'GET',
            headers: {
                "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
                "cookie": "PHPSESSID=ugpgvu6fgc4592jh7ht9d18v49; _ga=GA1.2.1126798330.1625045680; _gid=GA1.2.1475525047.1625045680; __gads=ID=92b58ed9ed58d147-221917af11ca0021:T=1625045679:RT=1625045679:S=ALNI_MYnQToDW3kOUClBGEzULNjeyAqOtg"
            }
        })
            .then(({ data }) => {
                const $ = cheerio.load(data)
                const token = $('#token').attr('value')
                let config = {
                    headers: {
                        'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
                        "sec-ch-ua": '" Not;A Brand";v="99", "Google Chrome";v="91", "Chromium";v="91"',
                        "cookie": "PHPSESSID=ugpgvu6fgc4592jh7ht9d18v49; _ga=GA1.2.1126798330.1625045680; _gid=GA1.2.1475525047.1625045680; __gads=ID=92b58ed9ed58d147-221917af11ca0021:T=1625045679:RT=1625045679:S=ALNI_MYnQToDW3kOUClBGEzULNjeyAqOtg",
                        "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
                    },
                    data: {
                        'url': 'https://www.instagram.com/' + username,
                        'action': 'story',
                        'token': token
                    }
                }
                axios.post('https://www.instagramsave.com/system/action.php', qs.stringify(config.data), { headers: config.headers })
                    .then(({ data }) => {
                        resolve(data.medias)
                    })
            })
            .catch(reject)
    })
}

function pin(url) {
    return new Promise((resolve, reject) => {
        function rand() {
            return `${Math.floor(Math.random() * 1000000)}`
        }
        let params = new URLSearchParams()
        params.append('url', url)
        fetch('https://www.expertsphp.com/facebook-video-downloader.php', { method: 'POST', body: params })
            .then(res => res.text())
            .then(res => {
                const $ = cheerio.load(res)
                y = 'pinterest_' + rand() + '.mp4'
                x = $('video').find('source').attr('src')
                data = { file: y, url: x }
                if (typeof x == 'undefined') return resolve({ status: false })
                resolve({ status: true, data })
            }).catch(reject)
    })
}

let is = {
    headers: {
        'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
        "sec-ch-ua": '" Not;A Brand";v="99", "Google Chrome";v="91", "Chromium";v="91"',
        "cookie": "PHPSESSID=ugpgvu6fgc4592jh7ht9d18v49; _ga=GA1.2.1126798330.1625045680; _gid=GA1.2.1475525047.1625045680; __gads=ID=92b58ed9ed58d147-221917af11ca0021:T=1625045679:RT=1625045679:S=ALNI_MYnQToDW3kOUClBGEzULNjeyAqOtg",
        "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
    }
}

function _token(host) {
    return new Promise(async (resolve, reject) => {
        axios.request({
            url: host, method: 'GET', headers: {
                "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
                "cookie": "PHPSESSID=ugpgvu6fgc4592jh7ht9d18v49; _ga=GA1.2.1126798330.1625045680; _gid=GA1.2.1475525047.1625045680; __gads=ID=92b58ed9ed58d147-221917af11ca0021:T=1625045679:RT=1625045679:S=ALNI_MYnQToDW3kOUClBGEzULNjeyAqOtg"
            }
        }).then(({ data }) => {
            let $ = cheerio.load(data)
            let token = $('#token').attr('value')
            resolve(token)
        })
    })
}

function facebook(url) {
    return new Promise(async (resolve, reject) => {
        let host = 'https://aiovideodl.ml/'
        let form = { data: { 'url': url, 'token': (await _token(host)) } }
        axios.post(host + '/system/action.php', qs.stringify(form.data), { headers: is.headers })
            .then(({ data }) => {
                if (data.links.lenght == 0) return resolve({ creator: 'BOTSTYLE', status: false })
                resolve({ creator: 'BOTSTYLE', status: true, data: data.links })
            })
    })
}

function mediafire(link) {
  return new Promise(async(resolve, reject) => {
    try {
      let html = ""
      let $ = cheerio.load((await axios(link)).data)
      let data = $("a#downloadButton.input.popsok")["0"]
      let url = data.attribs.href
      let size = data.childNodes[0].data.replace(/[ ]/g, "").replace(RegExp("\n", "g"), "").replace("Download", "").replace(/[()]/g, "")

      resolve({
        status: 200,
        creator: "Restu",
        result: {
          url,
          size
        }
      })
    } catch(err) {
      return resolve({
        status: err.response.status,
        message: err.response.statusText
      })
    }
  })
}

const nhentai = {
  info: async(nuklir) => {
    if(!nuklir) throw "Code?"
    let html = (await axios(`https://nhentai.net/g/${nuklir}/`)).data

    var document = new JSDOM(html).window.document
    let anu = document.querySelectorAll("div.tag-container.field-name")

    let title = document.querySelector("h1.title").outerHTML
    title = (cheerio.load(title))("h1.title").text()

    let thumb = (cheerio.load(html))("div#cover")[0].children[0].children[0].attribs["data-src"]

    let parodies = (cheerio.load(anu[0].innerHTML))(".tags").text().replace(/((\d+)K|(\d+))/g, " | ")
    let characters = (cheerio.load(anu[1].innerHTML))(".tags").text().replace(/((\d+)K|(\d+))/g, " | ")
    let tags = (cheerio.load(anu[2].innerHTML))(".tags").text().replace(/((\d+)K|(\d+))/g, " | ")
    let artists = (cheerio.load(anu[3].innerHTML))(".tags").text().replace(/((\d+)K|(\d+))/g, " | ")
    let groups = (cheerio.load(anu[4].innerHTML))(".tags").text().replace(/((\d+)K|(\d+))/g, " | ")
    let languages = (cheerio.load(anu[5].innerHTML))(".tags").text().replace(/((\d+)K|(\d+))/g, " | ")
    let categories = (cheerio.load(anu[6].innerHTML))(".tags").text().replace(/((\d+)K|(\d+))/g, " | ")
    let pages = (cheerio.load(anu[7].innerHTML))(".tags").text()

    parodies = parodies.endsWith(" | ") ? parodies.substr(0, parodies.lastIndexOf(" | ")) : parodies
    characters = characters.endsWith(" | ") ? characters.substr(0, characters.lastIndexOf(" | ")) : characters
    tags = tags.endsWith(" | ") ? tags.substr(0, tags.lastIndexOf(" | ")) : tags
    artists = artists.endsWith(" | ") ? artists.substr(0, artists.lastIndexOf(" | ")) : artists
    groups = groups.endsWith(" | ") ? groups.substr(0, groups.lastIndexOf(" | ")) : groups
    languages = languages.endsWith(" | ") ? languages.substr(0, languages.lastIndexOf(" | ")) : languages
    categories = categories.endsWith(" | ") ? categories.substr(0, categories.lastIndexOf(" | ")) : categories
    pages = pages.endsWith(" | ") ? pages.substr(0, pages.lastIndexOf(" | ")) : pages
    pages = Number(pages)

    return { title, thumb, parodies, characters, tags, artists, groups, languages, categories, pages }
  }
}

const primbon = {
  "No-Hoki": async function(no = "085783417029") {
    if(typeof no != "string") throw new Error("Variable \"no\" requires String\nReceive :" + typeof no)
    let form = new FormData
    let headers = {
      accept: "*/*",
      origin: "https://www.primbon.com",
      reverer: "https://www.primbon.com/no_hoki_bagua_shuzi.php",
      "content-type": form.getHeaders()["content-type"],
      "user-agent": FakeUseragent()
    }

    form.append("nomer", no)

    let html = (await axios.post("https://www.primbon.com/no_hoki_bagua_shuzi.php", form, { headers })).data

    let $ = cheerio.load(html)

    let bodi = cheerio.load($("div#body").html())
    let title = bodi("h1").text()

    let { document } = (new JSDOM($("div#body").html())).window


    let str = `${title[0] + title.replace(title[0], "").toLowerCase()}\n\n*${document.querySelectorAll("b")[0].innerHTML}*\n*${document.querySelectorAll("b")[1].innerHTML}*\n\n${document.querySelectorAll("td")[0].innerHTML.replace(new RegExp("<b>", "g"), "*").replace(new RegExp("</b>", "g"), "*").replace(new RegExp("<br>", "g"), "")}\n\n\n${document.querySelectorAll("td")[2].innerHTML.replace(new RegExp("<b>", "g"), "*").replace(new RegExp("</b>", "g"), "*").replace(new RegExp("<br>", "g"), "")}`

    return str
  }
}

const emojipedia = async(emoji) => {
  emoji = encodeURIComponent(emoji)

  let { data } = await axios(`https://emojipedia.org/${emoji}`)
  let $ = cheerio.load(data)

  let arr = $("div.vendor-image > img")
  let arr2 = $("div.vendor-info > h2 > a")

  let img = []
  let info = []

  arr2.each((v) => {
    info.push($(arr2[v]).text())
  })

  arr.each((v) => {
    img.push({ title: arr[v].attribs.alt, type: info[v], link: arr[v].attribs.src })
  })

  let found = img.filter(v => v.title.toLowerCase().includes("emojipedia") || v.title.toLowerCase().includes("google") || v.title.toLowerCase().includes("ios") || v.title.toLowerCase().includes("whatsapp") || v.title.toLowerCase().includes("microsoft"))

  let name = $("div.content > article > h1").text()

  return { name, download: found }
}

const tikolu = {
  emojimix: async(em1, em2) => {
    try {
      let url = `https://tikolu.net/emojimix/${encodeURIComponent(em1)}+${encodeURIComponent(em2)}`
      let { data } = await axios(url)
      let $ = cheerio.load(data)
      let gambar = $("img#link-share-preview")[0]
      return gambar
    } catch(err) {
      console.log(err.stack)
      return `${err}`
    }
  }
}

const anime = {
  top: function() {
    return new Promise(async(resolve, reject) => {
      try {
        let hasil = []
        let { data } = await axios("https://myanimelist.net/topanime.php?type=bypopularity")
        let $ = cheerio.load(data)
        let content  = $(".ranking-list")
        content.each((a, b ) =>{
          let getHtml = $(b)
          let judul = getHtml.find("div.di-ib.clearfix").text()
          let rank = hasil.length + 1
          let score = getHtml.find("td.score.ac.fs14" ).text().split("\n")[0]
          let information = getHtml.find("div.information.di-ib.mt4").text().split("\n").map(p => p.trim())
          while(information.indexOf("") !== -1) {
            information.splice(information.indexOf(""), 1)
          }
          hasil.push({judul, rank, score, information})
        })
        return resolve(hasil)
      } catch(err) {
        return reject({ error: true, message: err.message, status: err.status, stack: err.stack })
      }
    })
  },
  chara: async function(name) {
    let result = {}
    let { data } = await axios(`https://myanimelist.net/character.php?q=${escape(name)}&cat=character`)
    let url = (cheerio.load(data))("tr > td.borderClass.bgColor1 > a")[0].attribs.href
    let { data: html } = await axios(url)
    let $ = cheerio.load(html)
    result.name = $("tr > td > h2.normal_header").text()
    result.info = $("tr > td").text()
    return result
  }
}

async function stalkGithub(username) {
  let block = ["login", "register", ""]
  if(block.includes(username)) return false

  let { data } = await axios(`https://github.com/${username}/`).catch(err => { return { data: err } })
  if(data.message == "Request failed with status code 404") return { error: true, status: 404, message: "Account not found!" }

  let $ = cheerio.load(data)
  let { document } = (new JSDOM($("div.js-profile-editable-replace").html())).window

  let result = {}
  result.picture = document.querySelector("a > img").getAttribute("src")
  result.name = document.querySelector("span.p-name").innerHTML.trim()
  result.username = username
  result.desc = document.querySelector("div.p-note > div")?.innerHTML
  result.followers = Number(document.querySelectorAll("span.text-bold.color-fg-default")[0]?.innerHTML)
  result.following = Number(document.querySelectorAll("span.text-bold.color-fg-default")[1]?.innerHTML)

  return result
}

const google = {
  search: async function(query) {
    let { data } = await axios("https://www.google.com/search?q=" + query)
    let { document } = (new JSDOM(data)).window
    let result = []
    for(let dom of document.querySelectorAll("div.ZINbbc.luh4tb.xpd.O9g5cc.uUPGi")) result.push(dom.innerHTML)
    result = result.map(function(html) {
      let date = cheerio.load(html)("span.xUrNXd.UMOHqf").text()
      date = date.split(" ")[0] + " " + date.split(" ")[1] + " " + date.split(" ")[2]
      if(new Date(date) == "Invalid Date") date = undefined

      return {
        url: decodeURIComponent((cheerio.load(html)("div.egMi0.kCrYT > a").attr("href")).replace("/url?q=", "").split("&")[0]),
        title: cheerio.load(html)("div.egMi0.kCrYT > a").text(),
        date,
        desc: cheerio.load(html)("div.BNeawe.s3v9rd.AP7Wnd").text()
      }
    })

    return result
  },
  lyric: async function(search) {
    search = search.trim()
    let { data } = await axios("https://www.google.com/search?q=" + encodeURIComponent(search) + "%20lirik")
    let $ = cheerio.load(data)
    let result = { creator: null, title: null, lyrics: null }
    result.creator = $($("span.BNeawe.s3v9rd.AP7Wnd").get(1)).text()
    result.title = $("span.BNeawe.tAd8D.AP7Wnd").text()
    result.lyrics = $($("div.BNeawe.tAd8D.AP7Wnd").get(3)).text()
    if(!result.lyrics) return { status: 404, message: "Lyrics not found!" }
    return result
  }
}

module.exports = { facebook, quotes, igdl, igstory, tiktok, twitter, joox, pin, nhentai, tikolu, anime, mediafire, primbon, emojipedia, stalkGithub, google }


if(typeof watch != "undefined") watch(__filename, (f) => {
  global.Scrape = require(f)
})
