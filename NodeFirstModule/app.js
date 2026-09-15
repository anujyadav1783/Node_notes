const os = require('os');

console.log('Platform:', os.platform());
console.log('Hostname:', os.hostname());
console.log('CPU info:', os.cpus());
console.log('Current working directory:', process.cwd());
console.log('Process ID:', process.pid);

const { log, warn } = require('console');
log('custom log');
warn('custom warning');
