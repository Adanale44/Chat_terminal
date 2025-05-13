import { WebSocketServer } from "ws";

const wss = new WebSocketServer({ port: 8080 });
const clients = new Map();

console.log("[Servidor]: Servidor de chat iniciado en ws://localhost:8080");

wss.on("connection", (ws) => {
  let username = "";

  ws.on("message", (data) => {
    const msg = data.toString();

    if (!username) {
      username = msg;
      clients.set(ws, username);
      broadcast(`[Servidor]: El usuario "${username}" se ha unido al chat.`);
      return;
    }

    broadcast(`${username}: ${msg}`);
  });

  ws.on("close", () => {
    clients.delete(ws);
    broadcast(`[Servidor]: El usuario "${username}" ha salido del chat.`);
  });
});

function broadcast(message) {
  for (const client of wss.clients) {
    if (client.readyState === client.OPEN) {
      client.send(message);
    }
  }
}
