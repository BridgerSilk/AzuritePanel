const servers = [
    { id: 1, name: "Survival Server", status: "online" },
    { id: 2, name: "Creative Server", status: "offline" },
    { id: 3, name: "Modded Server", status: "online" },
];

let activeServer = null;
let activeTab = 'console';

function renderServerList() {
    const serverList = document.getElementById('serverList');
    serverList.innerHTML = '';
    servers.forEach(server => {
        const serverItem = document.createElement('div');
        serverItem.className = `server-item${server.id === activeServer?.id ? ' active' : ''}`;
        serverItem.innerHTML = `
        <span class="status-indicator ${server.status === 'online' ? 'status-online' : 'status-offline'}"></span>
        ${server.name}
      `;
        serverItem.onclick = () => selectServer(server);
        serverList.appendChild(serverItem);
    });
}

function selectServer(server) {
    activeServer = server;
    renderServerList();
    renderServerContent();
}

function switchTab(tab) {
    activeTab = tab;
    document.querySelectorAll('.server-tab').forEach(tabElement => {
        tabElement.classList.toggle('active', tabElement.textContent.toLowerCase() === tab);
    });
    renderServerContent();
}

function renderServerContent() {
    const content = document.getElementById('serverContent');
    if (!activeServer) {
        content.innerHTML = '<p>Select a server to view details.</p>';
        return;
    }

    switch (activeTab) {
        case 'console':
            content.innerHTML = `
          <div class="console" id="consoleOutput"></div>
          <div class="console-input">
            <input type="text" id="consoleInput" placeholder="Enter command...">
            <button onclick="sendCommand()">Send</button>
          </div>
        `;
            simulateConsoleOutput();
            break;
        case 'players':
            content.innerHTML = `
          <h3>Online Players</h3>
          <ul>
            <li>Player1</li>
            <li>Player2</li>
            <li>Player3</li>
          </ul>
        `;
            break;
        case 'performance':
            content.innerHTML = `
          <h3>Server Performance</h3>
          <p>CPU Usage: 35%</p>
          <p>Memory Usage: 2048MB / 4096MB</p>
          <p>TPS: 20</p>
        `;
            break;
    }
}

function simulateConsoleOutput() {
    const consoleOutput = document.getElementById('consoleOutput');
    const messages = [
        "[INFO] Server started",
        "[INFO] Loading world...",
        "[INFO] World loaded. Seed: 1234567890",
        "[INFO] Player1 joined the game",
        "[INFO] Player2 joined the game",
        "[WARN] Can't keep up! Is the server overloaded?",
        "[INFO] Player3 joined the game",
        "[INFO] Player1 lost connection: Timed out",
    ];

    let i = 0;
    function addMessage() {
        if (i < messages.length) {
            consoleOutput.innerHTML += messages[i] + '\n';
            consoleOutput.scrollTop = consoleOutput.scrollHeight;
            i++;
            setTimeout(addMessage, Math.random() * 2000 + 1000);
        }
    }
    addMessage();
}

function sendCommand() {
    const input = document.getElementById('consoleInput');
    const command = input.value.trim();
    if (command) {
        const consoleOutput = document.getElementById('consoleOutput');
        consoleOutput.innerHTML += `> ${command}\n`;
        consoleOutput.scrollTop = consoleOutput.scrollHeight;
        input.value = '';
        // In a real application, this would send the command to the server
        setTimeout(() => {
            consoleOutput.innerHTML += `[INFO] Executed command: ${command}\n`;
            consoleOutput.scrollTop = consoleOutput.scrollHeight;
        }, 500);
    }
}

// Initial render
renderServerList();
renderServerContent();