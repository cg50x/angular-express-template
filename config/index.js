var path = require('path');

// configPath is relative to app.js
function load(configPath) {
    configPath = configPath || 'server-config.json';
    var config = require(path.resolve(process.cwd(), configPath));
    validate(config);
    return config;
}

function validate(serverConfig) {
    if (!serverConfig.port) {
        throw new Error('port must be a valid number');
    }
    if (!serverConfig.address) {
        throw new Error ('address must be defined');
    }
}

module.exports = {
    load: load
};