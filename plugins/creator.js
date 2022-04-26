let { MessageType }= require("@adiwajshing/baileys")
let { contactsArray } = MessageType
let handler = async(m, { conn, command }) => {
  if(command == "owner") {
    let conarray = []
    let ownerContact = global.owner
    for(let i of ownerContact.map(v => v + "@s.whatsapp.net")) {
      let vname = conn.contacts[i] != undefined ? conn.contacts[i].vname || conn.contacts[i].notify : undefined
      conarray.push({
        "displayName": "Restu",
        "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:${vname ? `${vname}` : `${(i.split("@")[0] === "6283159537218") ? "Rina Septiani" : (i.split("@")[0] === "6285783417029") ? "Muhammad Restu" : conn.user.name}`}\nitem1.TEL;waid=${i.split("@")[0]}:${i.split("@")[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
      })
    }
    (await conn.sendMessage(m.chat, {
      "displayName": `${conarray.length} kontak`,
      "contacts": conarray
    }, "contactsArrayMessage", { quoted: m })).reply("Ini contact owner")
  } else if(command == "creator" || command == "partner") {
    let conarray = []
    let ownerContact = ["6285783417029", "6285314830096", "6282328303332", "6288804280094", "6282135250846", "6281313312123"]
    for(let i of ownerContact.map(v => v + "@s.whatsapp.net")) {
      let vname = conn.contacts[i] != undefined ? conn.contacts[i].vname || conn.contacts[i].notify : undefined
      conarray.push({
        "displayName": "Restu",
        "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:${vname ? `${vname}` : `${i.split("@")[0].replace("628", "08")}`}\nitem1.TEL;waid=${i.split("@")[0]}:${i.split("@")[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
      })
    }
    (await conn.sendMessage(m.chat, {
      "displayName": `${conarray.length} kontak`,
      "contacts": conarray
    }, "contactsArrayMessage", { quoted: m })).reply("Ini contact owner dan team")
  }
}

handler.help = ["owner", "creator"]
handler.tags = ["info"]

handler.command = /^(owner|creator|partner)$/i

module.exports = handler
