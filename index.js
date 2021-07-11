const { Plugin } = require("powercord/entities")
const { getModule , channels } = require("powercord/webpack")
const { createBotMessage } = getModule([ "createBotMessage" ], false)
const { receiveMessage }   = getModule([ "receiveMessage" ], false)

module.exports = class Penis extends Plugin {
    constructor() {
        super()
        
    }
    
    async sendBotMessage(content, title, footer, author, url, footerURL ) {
        const received = createBotMessage(channels.getChannelId())
        received.author.username = "Penis"
        // received.author.avatar = "https://bloximages.newyork1.vip.townnews.com/jewishaz.com/content/tncms/assets/v3/editorial/9/e0/9e0f4054-50aa-11e9-8169-030b16b2a5e4/5c9ba015c2cc7.image.jpg"
        console.log(received)
        received.embeds.push({
            color: 0x0099ff,
            title: title,
            url: url,
            author: {
                name: author,
            },
            description: content,
            timestamp: new Date(),
            footer: {
                text: footer,
                icon_url: footerURL,
            },
        })
        return receiveMessage(received.channel_id, received)
    }

    async startPlugin() {
        
        
        const { sendBotMessage } = this
        
        
        powercord.api.commands.registerCommand({
            command: "penis",
            description: "yes",
            usage: "{c}",
            executor: async (args) => {
                sendBotMessage(`
                ........................„„-~^^~„-„„_
                ..................„-^*'' : : „'' : : : : *-„
                ..............„-* : : :„„--/ : : : : : : : '\
                ............./ : : „-* . .| : : : : : : : : '|
                ............/ : „-* . . . | : : : : : : : : |
                ............\„-* . . . . .| : : : : : : : :'|
                ............/ . . . . . . '| : : : : : : : |
                ........../ . . . . . . . .'\ : : : : : : : |
                ......../ . . . . . . . . . .\ : : : : : : |
                ......./ . . . . . . . . . . . '\ : : : : : /
                ....../ . . . . . . . . . . . . . *-„„„„-*'
                ....'/ . . . . . . . . . . . . . . '|
                .../ . . . . . . . ./ . . . . . . .|
                ../ . . . . . . . .'/ . . . . . . .'|
                ./ . . . . . . . . / . . . . . . .'|
                '/ . . . . . . . . . . . . . . . .'|
                '| . . . . . \ . . . . . . . . . .|
                '| . . . . . . \„_^- „ . . . . .'|
                '| . . . . . . . . .'\ .\ ./ '/ . |
                | .\ . . . . . . . . . \ .'' / . '|
                | . . . . . . . . . . / .'/ . . .|
                | . . . . . . .| . . / ./ ./ . .|`)
            }
        })

    }
    
    pluginWillUnload() {
        // Object.values(commands).forEach(command => powercord.api.commands.unregisterCommand(command.command))
        powercord.api.commands.unregisterCommand("penis")
        
    }
}
