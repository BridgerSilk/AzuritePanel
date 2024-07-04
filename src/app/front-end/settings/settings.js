document.getElementById('appSettingsForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const settings = Object.fromEntries(formData.entries());

    // Convert checkbox values to booleans
    settings.startWithSystem = !!settings.startWithSystem;
    settings.compressBackups = !!settings.compressBackups;
    settings.useCustomJavaPath = !!settings.useCustomJavaPath;
    settings.autoCheckUpdates = !!settings.autoCheckUpdates;
    settings.betaUpdates = !!settings.betaUpdates;

    // In a real application, this would send the settings to the server
    console.log('Saving app settings:', settings);
    alert('App settings saved successfully!');
});

// In a real application, this would load the current settings from the server
function loadCurrentSettings() {
    // This is just a mock-up of loading settings
    document.getElementById('language').value = 'en';
    document.getElementById('theme').value = 'dark';
    document.getElementById('startWithSystem').checked = false;
    document.getElementById('backupInterval').value = 24;
    document.getElementById('maxBackups').value = 10;
    document.getElementById('compressBackups').checked = true;
    document.getElementById('maxConcurrentServers').value = 3;
    document.getElementById('memoryAllocation').value = 2048;
    document.getElementById('useCustomJavaPath').checked = false;
    document.getElementById('customJavaPath').value = '';
    document.getElementById('autoCheckUpdates').checked = true;
    document.getElementById('betaUpdates').checked = false;
}

// Load current settings when the page loads
loadCurrentSettings();