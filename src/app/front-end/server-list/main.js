const servers = [
    {
        name: "Main Survival Server",
        status: "online",
        ip: "localhost",
        port: 25565,
        version: "1.19.4",
        motd: "Welcome to the main survival server!",
        players: 5,
        maxPlayers: 20
    },
    {
        name: "Creative Build Server",
        status: "online",
        ip: "localhost",
        port: 25566,
        version: "1.19.4",
        motd: "Let your imagination run wild!",
        players: 3,
        maxPlayers: 10
    },
    {
        name: "Minigames Server",
        status: "offline",
        ip: "localhost",
        port: 25567,
        version: "1.19.4",
        motd: "Fun minigames for everyone!",
        players: 0,
        maxPlayers: 16
    }
];

function renderServers() {
    const serverList = document.getElementById('serverList');
    serverList.innerHTML = '';

    servers.forEach(server => {
        const serverCard = document.createElement('div');
        serverCard.className = 'server-card';
        serverCard.innerHTML = `
        <div class="server-status">
            <h3>${server.name}</h3>
            <span class="status-indicator ${server.status}"></span>
        </div>
        <div class="server-info">
            <p><strong>Status:</strong> ${server.status}</p>
            <p><strong>IP:</strong> ${server.ip}:${server.port}</p>
            <p><strong>Version:</strong> ${server.version}</p>
            <p><strong>MOTD:</strong> ${server.motd}</p>
            <p><strong>Players:</strong> ${server.players}/${server.maxPlayers}</p>
        </div>
        <button onclick="manageServer('${server.name}')">Manage</button>
        <button onclick="deleteServer('${server.name}')">Delete</button>`;
        serverList.appendChild(serverCard);
    });
}

function addServer() {
    const newServer = {
        name: "New Server " + (servers.length + 1),
        status: "offline",
        ip: "localhost",
        port: 25565 + servers.length,
        version: "1.19.4",
        motd: "A new Minecraft server",
        players: 0,
        maxPlayers: 20
    };
    servers.push(newServer);
    renderServers();
}

function manageServer(serverName) {
    alert(`Managing server: ${serverName}`);
    // In a real application, this would redirect to a server management page
}

function deleteServer(serverName) {
    const index = servers.findIndex(server => server.name === serverName);
    if (index !== -1) {
        servers.splice(index, 1);
        renderServers();
    }
}

// Initial render
renderServers();