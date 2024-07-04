document.getElementById('settingsForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const settings = Object.fromEntries(formData.entries());

    // In a real application, this would send the settings to the server
    console.log('Saving settings:', settings);
    alert('Settings saved successfully!');
});