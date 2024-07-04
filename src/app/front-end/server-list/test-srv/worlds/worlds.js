const worlds = [
    {
        name: "Main Survival World",
        seed: "4815162342",
        type: "DEFAULT",
        difficulty: "NORMAL",
        gameMode: "SURVIVAL",
        spawnProtection: 16,
        players: 5
    },
    {
        name: "Creative Flatland",
        seed: "1138",
        type: "FLAT",
        difficulty: "PEACEFUL",
        gameMode: "CREATIVE",
        spawnProtection: 0,
        players: 2
    },
    {
        name: "Nether Challenge",
        seed: "666",
        type: "NETHER",
        difficulty: "HARD",
        gameMode: "SURVIVAL",
        spawnProtection: 32,
        players: 1
    }
];

function renderWorlds() {
    const worldList = document.getElementById('worldList');
    worldList.innerHTML = '';

    worlds.forEach(world => {
        const worldCard = document.createElement('div');
        worldCard.className = 'world-card';
        worldCard.innerHTML = `
        <h3>${world.name}</h3>
        <div class="world-info">
            <p><strong>Seed:</strong> ${world.seed}</p>
            <p><strong>Type:</strong> ${world.type}</p>
            <p><strong>Difficulty:</strong> ${world.difficulty}</p>
            <p><strong>Game Mode:</strong> ${world.gameMode}</p>
            <p><strong>Spawn Protection:</strong> ${world.spawnProtection} blocks</p>
            <p><strong>Players:</strong> ${world.players}</p>
        </div>
        <div class="world-actions">
            <button onclick="loadWorld('${world.name}')">Load</button>
            <button onclick="editWorld('${world.name}')">Edit</button>
            <button onclick="backupWorld('${world.name}')">Backup</button>
            <button onclick="deleteWorld('${world.name}')">Delete</button>
        </div>`;
        worldList.appendChild(worldCard);
    });
}

function addWorld() {
    const newWorld = {
        name: "New World " + (worlds.length + 1),
        seed: Math.floor(Math.random() * 1000000000).toString(),
        type: "DEFAULT",
        difficulty: "NORMAL",
        gameMode: "SURVIVAL",
        spawnProtection: 16,
        players: 0
    };
    worlds.push(newWorld);
    renderWorlds();
}

function loadWorld(worldName) {
    alert(`Loading world: ${worldName}`);
    // In a real application, this would send a request to the server to load the world
}

function editWorld(worldName) {
    alert(`Editing world: ${worldName}`);
    // In a real application, this would open a world editing interface
}

function backupWorld(worldName) {
    alert(`Creating backup of world: ${worldName}`);
    // In a real application, this would initiate a world backup process
}

function deleteWorld(worldName) {
    if (confirm(`Are you sure you want to delete the world: ${worldName}?`)) {
        const index = worlds.findIndex(world => world.name === worldName);
        if (index !== -1) {
            worlds.splice(index, 1);
            renderWorlds();
        }
    }
}

// Initial render
renderWorlds();