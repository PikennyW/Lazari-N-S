let fetch = require('node-fetch')
//plugin by Samu330

let handler  = async (m, { conn, text }) => {

let linp = await fetch(`https://api.fdci.se/sosmed/rep.php?gambar= + encodeURIComponent(text)`)
let samu = await linp.json()
            let erest = samu[Math.floor(Math.random() * samu.length)]
            await conn.sendFile(m.chat, erest, '', '*:D*', m)


}
handler.help = ['imagen']
handler.tags = ['images']
handler.command = /^imagen?$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler