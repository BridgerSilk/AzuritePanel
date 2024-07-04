const console = document.getElementById('console');
const commandInput = document.getElementById('commandInput');

function addConsoleMessage(message, type = 'info') {
    const messageElement = document.createElement('div');
    messageElement.textContent = `[${new Date().toLocaleTimeString()}] [${type.toUpperCase()}] ${message}`;
    messageElement.style.color = type === 'error' ? '#ff6b6b' : type === 'warning' ? '#feca57' : '#4CAF50';
    console.appendChild(messageElement);
    console.scrollTop = console.scrollHeight;
}

function sendCommand() {
    const command = commandInput.value.trim();
    if (command) {
        addConsoleMessage(`> ${command}`, 'command');
        // In a real application, this would send the command to the server
        handleCommand(command);
        commandInput.value = '';
    }
}

function handleCommand(command) {
    // This is a mock implementation. In a real application, these would be processed server-side.
    switch (command.toLowerCase()) {
        case 'help':
            addConsoleMessage('Available commands: help, list, stop, restart, seed');
            break;
        case 'list':
            addConsoleMessage('There are 3/20 players online: Steve, Alex, Herobrine');
            break;
        case 'stop':
            addConsoleMessage('Stopping the server...');
            setTimeout(() => addConsoleMessage('Server stopped.'), 2000);
            break;
        case 'restart':
            addConsoleMessage('Restarting the server...');
            setTimeout(() => addConsoleMessage('Server restarted.'), 5000);
            break;
        case 'seed':
            addConsoleMessage('World seed: 4815162342');
            break;
        default:
            addConsoleMessage(`Unknown command: ${command}`, 'error');
    }
}

function updateResourceUsage() {
    const cpuUsage = Math.floor(Math.random() * 100);
    const memoryUsage = Math.floor(Math.random() * 1024);
    const diskUsage = Math.floor(Math.random() * 50);

    document.getElementById('cpuValue').textContent = `${cpuUsage}%`;
    document.getElementById('cpuBar').style.width = `${cpuUsage}%`;

    document.getElementById('memoryValue').textContent = `${memoryUsage} MB / 1024 MB`;
    document.getElementById('memoryBar').style.width = `${(memoryUsage / 1024) * 100}%`;

    document.getElementById('diskValue').textContent = `${diskUsage} GB / 50 GB`;
    document.getElementById('diskBar').style.width = `${(diskUsage / 50) * 100}%`;
}

// Simulate incoming console messages
setInterval(() => {
    const messages = [
        'Player Steve joined the game',
        'Player Alex left the game',
        'Saved the world',
        'Preparing spawn area',
        'Villager [x=100, y=64, z=-200] restocked trades'
    ];
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    addConsoleMessage(randomMessage);
}, 5000);

// Update resource usage every 2 seconds
setInterval(updateResourceUsage, 2000);

// Initial resource update
updateResourceUsage();

// Add some initial console messages
addConsoleMessage('Server started successfully.');
addConsoleMessage('World loaded. Seed: 4815162342');
addConsoleMessage('Server is running on port 25565');