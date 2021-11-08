let handler = async(m, { conn, usedPrefix, command, text }) => {
  if(!text) return m.reply(`Format salah!\nFormat : ${usedPrefix + command} RestuWeb | ./script.js | ./style.css`)
  let args = text.split(text.includes(" | ") ? " | " : "|")
  let [wn, sty, scr] = args
  let html = `\n<!DOCTYPE html>\n<html>\n  <head>\n${sty ? "    <link rel=\"stylesheet\" href=\"" + sty + "\">\n" : ""}${scr ? "    <script src=\"" + sty + "\"></script>\n" : ""}    <title>${wn}</title>\n  </head>\n  <body>\n    <h1>${wn}</h1>\n    <hr>\n  </body>\n</html>\n`

  m.reply(html)
}

handler.help = ["htmltemplate", "templatehtml", "htmlgen", "htmlgenerator"].map(v => v + " <nama web> | <style> | <script>")
handler.tags = ["tools", "other"]

handler.command = /^(htmltemplate|templatehtml|htmlgenerator|htmlgen)/i

module.exports = handler
