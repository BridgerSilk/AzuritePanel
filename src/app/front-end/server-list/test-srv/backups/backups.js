const backups = [
    { id: 1, name: 'Backup_20230601_120000', date: '2023-06-01 12:00:00', size: '1.2 GB' },
    { id: 2, name: 'Backup_20230530_235959', date: '2023-05-30 23:59:59', size: '1.1 GB' },
    { id: 3, name: 'Backup_20230529_180000', date: '2023-05-29 18:00:00', size: '1.0 GB' },
];

function renderBackups() {
    const backupList = document.getElementById('backupList');
    backupList.innerHTML = '';

    backups.forEach(backup => {
        const backupItem = document.createElement('div');
        backupItem.className = 'backup-item';
        backupItem.innerHTML = `
        <div class="backup-info">
          <strong>${backup.name}</strong><br>
          Date: ${backup.date}<br>
          Size: ${backup.size}
        </div>
        <div class="backup-actions">
          <button onclick="restoreBackup(${backup.id})">Restore</button>
          <button onclick="downloadBackup(${backup.id})">Download</button>
          <button onclick="deleteBackup(${backup.id})">Delete</button>
        </div>
      `;
        backupList.appendChild(backupItem);
    });
}

function createBackup() {
    const progressBar = document.getElementById('backupProgress');
    const statusDiv = document.getElementById('backupStatus');
    statusDiv.textContent = 'Creating backup...';

    let progress = 0;
    const interval = setInterval(() => {
        progress += 10;
        progressBar.style.width = `${progress}%`;

        if (progress >= 100) {
            clearInterval(interval);
            statusDiv.textContent = 'Backup created successfully!';
            const newBackup = {
                id: backups.length + 1,
                name: `Backup_${new Date().toISOString().replace(/[:.]/g, '')}`,
                date: new Date().toLocaleString(),
                size: '1.3 GB'
            };
            backups.unshift(newBackup);
            renderBackups();
            setTimeout(() => {
                progressBar.style.width = '0%';
                statusDiv.textContent = '';
            }, 3000);
        }
    }, 500);
}

function restoreBackup(id) {
    if (confirm(`Are you sure you want to restore backup ${id}? This will overwrite the current server state.`)) {
        alert(`Restoring backup ${id}...`);
        // In a real application, this would trigger the backup restoration process
    }
}

function downloadBackup(id) {
    alert(`Downloading backup ${id}...`);
    // In a real application, this would trigger the backup download
}

function deleteBackup(id) {
    if (confirm(`Are you sure you want to delete backup ${id}? This action cannot be undone.`)) {
        const index = backups.findIndex(backup => backup.id === id);
        if (index !== -1) {
            backups.splice(index, 1);
            renderBackups();
            alert(`Backup ${id} deleted successfully.`);
        }
    }
}

// Initial render
renderBackups();