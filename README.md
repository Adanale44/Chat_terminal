Antes de comenzar, asegurate de tener instalado:
Bun

Usa una terminal funcional (como Bash, Zsh, PowerShell, cmd, etc.)

1. Clonar el repositorio
git clone https://github.com/tu-usuario/chat-terminal.git
cd chat-terminal
Reemplazá tu-usuario por tu nombre de usuario de GitHub.

2. Instalar las dependencias
Este proyecto usa Bun como gestor de paquetes, así que ejecutá:
bun install
Esto instalará paquetes como:
ws (WebSocket server y client)
chalk (para colorear mensajes en la terminal)

3. Ejecutar el servidor
Abrí una terminal nueva y ejecutá el servidor:
bun websocket-server.js

Esto levantará el servidor en:
ws://localhost:8080

4. Ejecutar el cliente
Abrí otra terminal y ejecutá el cliente:
bun websocket-client.js
El cliente te pedirá un nombre de usuario y luego podrás comenzar a chatear.

5. Probar múltiples usuarios
Podés abrir varias terminales y ejecutar el cliente varias veces para simular diferentes usuarios conectándose y enviando mensajes al chat

Problemas comunes
Error de módulo chalk no encontrado: Ejecutá bun install para instalarlo.
Servidor no responde: Asegurate de que el servidor esté corriendo antes de abrir clientes.
