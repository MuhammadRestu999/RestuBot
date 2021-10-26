let handler = async(m, { conn, text }) => {
  let tmp = ""
  let tersedia = [
    {
      "a": "✿『",
      "b": "』✿"
    },
    {
      "a": "『",
      "b": "』"
    },
    {
      "a": "✿",
      "b": "✿"
    }
  ]


  for(let i = 0; i < tersedia.length; i++) {
    if(i < tersedia.length - 1) {
      tmp += `${tersedia[i].a} ${text} ${tersedia[i].b}\n\n`
    } else {
      tmp += `${tersedia[i].a} ${text} ${tersedia[i].b}`
    }
  }

  return m.reply(tmp)
}

handler.command = /^(text)/i

module.exports = handler
