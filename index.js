const TelegramBot = require("node-telegram-bot-api");
const core = require("@actions/core");

const token = core.getInput("TELEGRAM_TOKEN");
const chatID = core.getInput("TELEGRAM_ID_USER");

const bot = new TelegramBot(token, { polling: true });

try {
  const message = `Workflow ejecutado correctamente tras el último commit. Saludos ${core.getInput(
    "user_name"
  )}.`;

  bot.sendMessage(chatID, message);
  core.setOutput("msg", "Mensaje enviado correctamente.");
} catch (e) {
  core.setFailed(e.message);
}
