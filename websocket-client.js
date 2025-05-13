import WebSocket from "ws";
import readline from "readline";
import chalk from "chalk";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const socket = new WebSocket("ws://localhost:8080");

rl.question(
  "Bienvenido al chat. Por favor, ingresa tu nombre de usuario: ",
  (username) => {
    socket.send(username);
    console.log(chalk.green(`Conectado al chat como "${username}".`));

    rl.on("line", (input) => {
      socket.send(input);
    });

    socket.on("message", (data) => {
      const message = data.toString();
      if (message.startsWith("[Servidor]")) {
        console.log(chalk.blue(message));
      } else {
        console.log(message);
      }
    });

    socket.on("close", () => {
      console.log(chalk.red("[Servidor]: Desconectado del chat."));
      process.exit(0);
    });
  }
);
