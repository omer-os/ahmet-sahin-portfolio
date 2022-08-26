const TelegramBot = require("node-telegram-bot-api");

const token = process.env.TELEGRAM_BOT;
const bot = new TelegramBot(token, { polling: true });


bot.on("message", (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, "Received your message");
});

export default function handler(req, res) {
  res.status(200).json({ name: "Bot is live!" });
}
