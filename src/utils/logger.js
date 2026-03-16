// logger.js

const fs = require('fs');
const path = require('path');

class Logger {
    constructor(logFile = 'app.log') {
        this.logFile = path.join(__dirname, logFile);
    }

    log(message) {
        const timestamp = new Date().toISOString();
        const logMessage = `[${timestamp}] ${message}\n`;
        fs.appendFileSync(this.logFile, logMessage);
    }

    info(message) {
        this.log(`INFO: ${message}`);
    }

    warn(message) {
        this.log(`WARN: ${message}`);
    }

    error(message) {
        this.log(`ERROR: ${message}`);
    }
}

module.exports = new Logger();
