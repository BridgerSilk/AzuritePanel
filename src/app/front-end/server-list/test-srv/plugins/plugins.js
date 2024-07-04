const plugins = [
    {
        name: "EssentialsX",
        version: "2.19.0",
        author: "EssentialsX Team",
        description: "Essential commands and features for Bukkit servers.",
        enabled: true
    },
    {
        name: "WorldEdit",
        version: "7.2.7",
        author: "EngineHub",
        description: "In-game map editor for faster construction and terraforming.",
        enabled: true
    },
    {
        name: "Vault",
        version: "1.7.3",
        author: "Sleaker",
        description: "Permissions, chat, & economy API for Bukkit plugins.",
        enabled: true
    },
    {
        name: "ProtocolLib",
        version: "4.7.0",
        author: "dmulloy2",
        description: "Provides read and write access to the Minecraft protocol.",
        enabled: false
    }
];

function renderPlugins() {
    const pluginList = document.getElementById('pluginList');
    pluginList.innerHTML = '';

    plugins.forEach(plugin => {
        const pluginCard = document.createElement('div');
        pluginCard.className = 'plugin-card';
        pluginCard.innerHTML = `
        <h3>${plugin.name}</h3>
        <div class="plugin-info">
          <p><strong>Version:</strong> ${plugin.version}</p>
          <p><strong>Author:</strong> ${plugin.author}</p>
          <p><strong>Description:</strong> ${plugin.description}</p>
        </div>
        <div class="plugin-actions">
          <label class="toggle-switch">
            <input type="checkbox" ${plugin.enabled ? 'checked' : ''} onchange="togglePlugin('${plugin.name}', this.checked)">
            <span class="slider"></span>
          </label>
          <button onclick="configurePlugin('${plugin.name}')">Configure</button>
          <button onclick="updatePlugin('${plugin.name}')">Update</button>
          <button onclick="removePlugin('${plugin.name}')">Remove</button>
        </div>
      `;
        pluginList.appendChild(pluginCard);
    });
}

function addPlugin() {
    // In a real application, this would open a dialog to search and install new plugins
    alert("Opening plugin marketplace...");
}

function togglePlugin(pluginName, enabled) {
    const plugin = plugins.find(p => p.name === pluginName);
    if (plugin) {
        plugin.enabled = enabled;
        alert(`Plugin ${pluginName} ${enabled ? 'enabled' : 'disabled'}`);
    }
}

function configurePlugin(pluginName) {
    alert(`Opening configuration for plugin: ${pluginName}`);
    // In a real application, this would open the plugin's configuration interface
}

function updatePlugin(pluginName) {
    alert(`Checking for updates for plugin: ${pluginName}`);
    // In a real application, this would check for and apply updates to the plugin
}

function removePlugin(pluginName) {
    if (confirm(`Are you sure you want to remove the plugin: ${pluginName}?`)) {
        const index = plugins.findIndex(plugin => plugin.name === pluginName);
        if (index !== -1) {
            plugins.splice(index, 1);
            renderPlugins();
        }
    }
}

// Initial render
renderPlugins();