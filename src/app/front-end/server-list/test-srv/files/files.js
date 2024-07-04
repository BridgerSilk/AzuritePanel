const fileSystem = {
    '/': {
        type: 'folder',
        contents: {
            'server.properties': { type: 'file', content: '# Minecraft server properties\nserver-port=25565\nmax-players=20\n...' },
            'world': { type: 'folder', contents: {} },
            'plugins': {
                type: 'folder', contents: {
                    'EssentialsX': { type: 'folder', contents: {} },
                    'WorldEdit': { type: 'folder', contents: {} }
                }
            },
            'logs': {
                type: 'folder', contents: {
                    'latest.log': { type: 'file', content: '[INFO] Starting Minecraft server...\n[INFO] Loading properties...\n...' }
                }
            },
            'eula.txt': { type: 'file', content: 'eula=true' }
        }
    }
};

let currentPath = '/';

function updateFileExplorer() {
    const explorer = document.getElementById('fileExplorer');
    explorer.innerHTML = '';

    const currentFolder = getFolder(currentPath);
    for (const [name, item] of Object.entries(currentFolder.contents)) {
        const element = document.createElement('div');
        element.className = item.type;
        element.textContent = name;
        element.onclick = () => {
            if (item.type === 'folder') {
                navigateTo(currentPath + name + '/');
            } else {
                showFileContent(name, item.content);
            }
        };
        explorer.appendChild(element);
    }
}

function updateBreadcrumb() {
    const breadcrumb = document.getElementById('breadcrumb');
    breadcrumb.innerHTML = '';

    const parts = currentPath.split('/').filter(Boolean);
    let path = '';
    breadcrumb.innerHTML += `<a href="#" onclick="navigateTo('/')">Root</a>`;

    for (const part of parts) {
        path += '/' + part;
        breadcrumb.innerHTML += ` / <a href="#" onclick="navigateTo('${path}/')">${part}</a>`;
    }
}

function navigateTo(path) {
    currentPath = path;
    updateFileExplorer();
    updateBreadcrumb();
    hideFileContent();
}

function getFolder(path) {
    return path.split('/').filter(Boolean).reduce((acc, part) => acc.contents[part], fileSystem['/']);
}

function showFileContent(fileName, content) {
    const fileContent = document.getElementById('fileContent');
    fileContent.textContent = content;
    fileContent.style.display = 'block';
}

function hideFileContent() {
    const fileContent = document.getElementById('fileContent');
    fileContent.style.display = 'none';
}

function createFolder() {
    const folderName = prompt('Enter folder name:');
    if (folderName) {
        const currentFolder = getFolder(currentPath);
        currentFolder.contents[folderName] = { type: 'folder', contents: {} };
        updateFileExplorer();
    }
}

function createFile() {
    const fileName = prompt('Enter file name:');
    if (fileName) {
        const currentFolder = getFolder(currentPath);
        currentFolder.contents[fileName] = { type: 'file', content: '' };
        updateFileExplorer();
    }
}

function uploadFile() {
    alert('File upload functionality would be implemented here.');
    // In a real application, this would open a file dialog and handle the upload process
}

// Initial render
updateFileExplorer();
updateBreadcrumb();