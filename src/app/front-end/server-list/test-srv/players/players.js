const players = [
    {
        name: "Steve",
        uuid: "c06f89064c8a49119c29ea1dbd1aab82",
        health: 20,
        hunger: 20,
        xp: 1500,
        level: 30,
        gamemode: "survival",
        online: true
    },
    {
        name: "Alex",
        uuid: "6ab43178b6744e9eb23d5a2b0f132e42",
        health: 15,
        hunger: 18,
        xp: 750,
        level: 15,
        gamemode: "creative",
        online: true
    },
    {
        name: "Notch",
        uuid: "069a79f444e94726a5befca90e38aaf5",
        health: 20,
        hunger: 20,
        xp: 5000,
        level: 50,
        gamemode: "survival",
        online: false
    },
    {
        name: "Herobrine",
        uuid: "f84c6a79be2e4c8a99d5ba7cf72d6976",
        health: 20,
        hunger: 20,
        xp: 9999,
        level: 100,
        gamemode: "spectator",
        online: true
    }
];

function renderPlayers(playerList = players) {
    const playerListElement = document.getElementById('playerList');
    playerListElement.innerHTML = '';

    playerList.forEach(player => {
        const playerCard = document.createElement('div');
        playerCard.className = 'player-card';
        playerCard.innerHTML = `
        <img class="player-avatar" src="https://mc-heads.net/avatar/${player.uuid}" alt="${player.name}'s avatar">
        <div class="player-info">
            <h3 class="player-name">${player.name}</h3>
            <div class="player-stats">
                <p>Health: ${player.health}/20</p>
                <p>Hunger: ${player.hunger}/20</p>
                <p>XP: ${player.xp} (Level ${player.level})</p>
                <p>Gamemode: ${player.gamemode}</p>
                <p>Status: ${player.online ? 'Online' : 'Offline'}</p>
            </div>
            <div class="player-actions">
                <button onclick="kickPlayer('${player.name}')">Kick</button>
                <button onclick="banPlayer('${player.name}')">Ban</button>
                <button onclick="teleportPlayer('${player.name}')">Teleport</button>
            </div>
        </div>`;
        playerListElement.appendChild(playerCard);
    });
}

function searchPlayers() {
    const searchTerm = document.getElementById('playerSearch').value.toLowerCase();
    const filteredPlayers = players.filter(player =>
        player.name.toLowerCase().includes(searchTerm)
    );
    renderPlayers(filteredPlayers);
}

function kickPlayer(playerName) {
    alert(`Kicking player: ${playerName}`);
    // In a real application, this would send a request to the server to kick the player
}

function banPlayer(playerName) {
    alert(`Banning player: ${playerName}`);
    // In a real application, this would send a request to the server to ban the player
}

function teleportPlayer(playerName) {
    alert(`Opening teleport interface for player: ${playerName}`);
    // In a real application, this would open an interface to teleport the player
}

// Initial render
renderPlayers();