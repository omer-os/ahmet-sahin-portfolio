const TelegramBot = require("node-telegram-bot-api");

export default function handler(req, res) {
  const token = "5580783584:AAEDuAolkA0v2dPonhJxZyQ7V6QUAHh_CCk";
  const bot = new TelegramBot(token, { polling: true });

  bot.on("message", (msg) => {
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, "Received your message");
  });

  res.status(200).json({ name: "Bot is live!" });
}
