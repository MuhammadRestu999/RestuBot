let handler = async(m, { conn, args }) => {
    if(m.mentionedJid.length != 0) mention = m.mentionedJid[0]
    else if(m.quoted && [ m.quoted.sender ].length != 0) mention = m.quoted.sender
    else if(args.length != 0) mention = conn.parseMention(args)[0]
    else if(m.sender == conn.user.jid) mention = m.chat
    else mention = ""

    if (!mention) throw 'Tag salah satu lah'
    conn.blockUser(mention, 'remove')
    m.reply("Berhasil membuka blokir [ @" + mention.split("@")[0] + " ] !")
}
handler.help = ['unblock']
handler.tags = ['owner']
handler.command = /^unblock(user)?$/i
handler.mods = true

module.exports = handler
