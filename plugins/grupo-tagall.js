let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}
let pesan = args.join` `
let oi = `@𝕞𝕠𝕟𝕠𝕧𝕒𝕟 ${pesan}`
let teks = `*despiertate te está hablando Pikachu bot ⚡*\n${oi}\n\n*🚨𝙈𝙚𝙣𝙘𝙞𝙤𝙣𝙚𝙨*\n`
for (let mem of participants) {
teks += `⚡ @${mem.id.split('@')[0]}\n`}
teks += `𝙋𝙞𝙠𝙖𝙘𝙝𝙪 𝙗𝙮 𝙢𝙤𝙣𝙤𝙫𝙖𝙣 𝙫𝙚𝙣𝙩𝙖𝙨`
conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )  
}
handler.command = /^(tagall|invocar|invocacion|todos|invocación)$/i
handler.admin = true
handler.group = true
handler.botAdmin = true
export default handler
