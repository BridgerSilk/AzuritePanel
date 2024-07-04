const toggleServerBtn = document.getElementById('toggleServer');
const restartServerBtn = document.getElementById('restartServer');
const statusIndicator = document.querySelector('.status-indicator');
const playerList = document.querySelector('.player-list ul');
const consoleOutput = document.getElementById('consoleOutput');
const consoleInput = document.getElementById('consoleInput');
let isServerRunning = false;

toggleServerBtn.addEventListener('click', () => {
    isServerRunning = !isServerRunning;
    updateServerStatus();
});

restartServerBtn.addEventListener('click', () => {
    if (isServerRunning) {
        isServerRunning = false;
        updateServerStatus();
        setTimeout(() => {
            isServerRunning = true;
            updateServerStatus();
        }, 2000);
    }
});

consoleInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        const command = consoleInput.value;
        addConsoleMessage(`> ${command}`);
        processCommand(command);
        consoleInput.value = '';
    }
});

function updateServerStatus() {
    if (isServerRunning) {
        statusIndicator.classList.add('online');
        toggleServerBtn.textContent = 'Stop Server';
        restartServerBtn.disabled = false;
        populatePlayerList();
        addConsoleMessage('Server started successfully.');
    } else {
        statusIndicator.classList.remove('online');
        toggleServerBtn.textContent = 'Start Server';
        restartServerBtn.disabled = true;
        playerList.innerHTML = '';
        addConsoleMessage('Server stopped.');
    }
}

function populatePlayerList() {
    const players = ['Steve', 'Alex', 'Notch'];
    playerList.innerHTML = '';
    players.forEach(player => {
        const li = document.createElement('li');
        li.textContent = player;
        playerList.appendChild(li);
    });
}

function addConsoleMessage(message) {
    const p = document.createElement('p');
    p.textContent = message;
    consoleOutput.appendChild(p);
    consoleOutput.scrollTop = consoleOutput.scrollHeight;
}

function processCommand(command) {
    // Simulate processing commands
    switch (command.toLowerCase()) {
        case 'help':
            addConsoleMessage('Available commands: help, list, stop');
            break;
        case 'list':
            addConsoleMessage('Players online: Steve, Alex, Notch');
            break;
        case 'stop':
            if (isServerRunning) {
                isServerRunning = false;
                updateServerStatus();
            } else {
                addConsoleMessage('Server is not running.');
            }
            break;
        default:
            addConsoleMessage('Unknown command. Type "help" for a list of commands.');
    }
}

updateServerStatus();