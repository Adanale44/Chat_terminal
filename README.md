Antes de comenzar, asegurate de tener instalado:
Bun
Si no tenes el bun, usa los siguentes comandos:
Para windos = powershell -c "irm bun.sh/install.ps1|iex"
Para linux = curl -fsSL https://bun.sh/install | bash -s "bun-v1.2.13"

luego de installar el bun, tenes que instalar el bun en la carpeta Chat_terminal
Para ir a la carpeta Chat_termina usa el siguiente comando:
cd Documentos/Chat_terminal/
y dentro de la carpeta pon el comando:
curl -fsSL https://bun.sh/install | bash
esto para que el servidor websocket inicie correctamente

Usa una terminal funcional (como Bash, Zsh, PowerShell, cmd, etc.)

1. Clonar el repositorio
git clone https://github.com/Adanale44/Chat_terminal.git
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

Dato importante:
Asegurate de abrir dos terminales para poder hablar
