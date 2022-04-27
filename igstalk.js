let axios = require("axios")

let handler = async (m, { conn, args }) => {
  if(!args[0]) return m.reply("Uhm...username nya mana?")
  let { data } = await axios(`https://hardianto.xyz/api/igstalk?username=${args[0]}&apikey=hardianto`)
  if(data.message) throw data.message
  let {
    username,
    fullname,
    verified,
    video_count_reel,
    followers,
    follow,
    is_bussines,
    is_professional,
    category,
    thumbnail,
    bio
  } = data
  let pp = thumbnail || false
  let caption = `
${fullname} *(@${username})* ${verified ? '✓' : ''}
https://instagram.com/${username}
Reels : ${video_count_reel}
Following *${follow}* User(s)
*${followers}* Followers
*Bio:*
${bio}
`.trim()
  if(pp) conn.sendFile(m.chat, pp, 'ppig.jpg', caption, m)
  else m.reply(caption)
}
handler.help = ['igstalk'].map(v => v + ' <username>')
handler.tags = ['downloader']

handler.command = /^(igstalk)$/i

module.exports = handler
