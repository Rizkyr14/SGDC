let { MessageType } = require('@adiwajshing/baileys')
let handler = async (m, { conn, text}) => {
    if (!text) throw '_Siapa yang mau di banned?_'
    let who
    if (m.isGroup) who = m.mentionedJid[0]
    else who = m.chat
    //let name = conn.ge
    if (!who) throw '_Tag salah satu mbah!_'
    let users = global.DATABASE._data.users
    users[who].banned = true
    conn.reply(m.chat, `_User Berhasil Dibanned!_`, m)
}

handler.command = /^bann$/i
handler.rowner = true

handler.fail = null

module.exports = handler


