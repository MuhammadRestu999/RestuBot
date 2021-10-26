let axios = require("axios")

let handler = async (m, { conn, args }) => {
  if(!(global.owner.includes(m.sender.split("@")[0]) || global.mods.includes(m.sender.split("@")[0]))) return m.reply("Sedang dalam perbaikan!")
  if (!args[0]) throw 'Uhm...username nya mana?'
  let { data } = await axios(`https://hardianto-chan.herokuapp.com/api/igstalk?username=${args[0]}&apikey=hardianto`)
  if (data.code != 200) throw "Error!\n\nUsername tidak ditemukan / web api error"
  let {
    fullname,
    username,
    verified,
    media_count,
    follower_count,
    following_count,
    biography,
    external_url,
    profile_pic_url,
    hd_profile_pic_url_info,
    is_private
  } = data.user
  let pp = hd_profile_pic_url_info.url || profile_pic_url
  let caption = `
${full_name} *(@${username})* ${is_verified ? '✓' : ''}
https://instagram.com/${username}
${is_private ? 'Post Hidden by User' : ('*' + media_count + '* Post(s)')}
Following *${following_count}* User(s)
*${follower_count}* Followers
*Bio:*
${biography}${external_url ? '\n*External URL:* ' + external_url : ''}
`.trim()
  if (pp) conn.sendFile(m.chat, pp, 'ppig.jpg', caption, m)
  else m.reply(caption)
}
handler.help = ['igstalk'].map(v => v + ' <username>')
handler.tags = ['downloader']

handler.command = /^(igstalk)$/i

module.exports = handler
