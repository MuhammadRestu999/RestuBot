let { getGroupAdmins: ladmin } = require("../lib/function")

let handler = async(m, { conn, participants, groupMetadata }) => {
  let list = (list, groupName) => {
    var text = `╭───「 Admin 」
│
├❏ Group : ${groupName}
├❏ Total : ${list.length} admin(s)
│
`
    for (var x of list) {
      text += `├❏ @${x.split("@")[0]}\n`
    }
    text += `│
╰───「 ${conn.getName(conn.user.jid)} 」`
    return text
  }

  let admin = list(ladmin(participants), groupMetadata.subject)
  m.reply(`${admin}`)
}

handler.help = ["listadmin"]
handler.tags = ["group"]
handler.group = true

handler.command = /^(listadmin)$/i

module.exports = handler
