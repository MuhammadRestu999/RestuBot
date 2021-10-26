let handler = async (m, { text }) => {
  let axios = require("axios")
  let data = await axios(`https://restapifull-by-rey.herokuapp.com/api/fakedata?country=en&apikey=administrator`)
  data = data.data
  let json = JSON.parse(JSON.stringify(data.result));
  if (json.code != 200) return m.reply(json)
  let name = json.name
  let birthday = json.birthday
  let address = json.address
  let city = json.city
  let region = json.region
  let country = json.country
  let zip = json.zip
  let phone_number = json.phone_number
  let username = json.username
  let password = json.password
  let email = json.email
  let teks = `
name: *${name}*
birthday: *${birthday}*
address: *${address}*
city: *${city}*
region: *${region}*
country: *${country}*
zip: *${zip}*
phone_number: *${phone_number}*
username: *${username}*
password: *${password}*
email: *${email}*
`
  m.reply(teks)
}

handler.help = ['fakedsta']
handler.tags = ['random']
handler.command = /^(fakedata)/i

module.exports = handler
