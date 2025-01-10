import { networkInterfaces } from 'os';
import { spawn } from 'child_process';

/* eslint-disable no-console */

// Get local IP address to display
function getLocalIP(): string {
  const nets = networkInterfaces();
  for (const name of Object.keys(nets)) {
    const interfaces = nets[name];
    if (!interfaces) continue;

    for (const net of interfaces) {
      // Skip internal (i.e. 127.0.0.1) and non-ipv4 addresses
      if (!net.internal && net.family === 'IPv4') {
        return net.address;
      }
    }
  }
  return '0.0.0.0'; // Fallback to all interfaces if no specific IP is found
}

const localIP = getLocalIP();
console.log(`\x1b[36m%s\x1b[0m`, `🌐 Local IP address: ${localIP}`);
console.log(`\x1b[36m%s\x1b[0m`, `🔗 Access URLs:`);
console.log(`\x1b[36m%s\x1b[0m`, `   Local: http://localhost:3000`);
console.log(`\x1b[36m%s\x1b[0m`, `   Network: http://${localIP}:3000`);

// Start Next.js with 0.0.0.0 to bind to all interfaces
const nextDev = spawn('next', ['dev', '-H', '0.0.0.0'], {
  stdio: 'inherit',
  shell: true,
});

nextDev.on('error', err => {
  console.error('Failed to start Next.js:', err);
  process.exit(1);
});
