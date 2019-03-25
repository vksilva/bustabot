const telegramCommands = require('../bot_core/telegram_commands');

module.exports = {
    key: "guess",
    help: "Guess",
    execute: function(params, req){
        telegramCommands.sendMessage(
            req.message.chat.id,
            "Guess");
    }
}