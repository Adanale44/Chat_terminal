import { WebSocketServer } from "ws";
import chalk from "chalk";

const PORT = 8080;
const wss = new WebSocketServer({ port: PORT });

const clients = new Set();

console.log(chalk.green(`[Servidor] Escuchando en ws://localhost:${PORT}`));

function broadcast(message, sender) {
  for (const client of clients) {
    if (client.readyState === client.OPEN && client !== sender) {
      client.send(message);
    }
  }
}

wss.on("connection", (ws) => {
  let username = "";
  clients.add(ws);

  console.log(chalk.yellow("[Servidor] Nueva conexión WebSocket"));

  ws.on("message", (data) => {
    const msg = data.toString();

    // 🟡 Mostrar en consola lo que recibe el servidor
    console.log(chalk.gray(`[DEBUG] ${username || "???"} dijo: ${msg}`));

    if (!username) {
      username = msg;
      broadcast(
        chalk.blue(`[Servidor]: El usuario "${username}" se ha unido al chat.`),
        ws
      );
      return;
    }

    broadcast(`${username}: ${msg}`, ws);
  });

  ws.on("close", () => {
    clients.delete(ws);

    if (username) {
      broadcast(
        chalk.blue(`[Servidor]: El usuario "${username}" ha salido del chat.`),
        ws
      );
      console.log(chalk.red(`[Servidor] ${username} se desconectó`));
    }
  });
});
