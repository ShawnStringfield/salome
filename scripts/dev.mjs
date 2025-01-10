import { networkInterfaces } from 'os';
import { spawn } from 'child_process';

// Get local IP address
function getLocalIP() {
  const nets = networkInterfaces();
  for (const name of Object.keys(nets)) {
    for (const net of nets[name]) {
      // Skip internal (i.e. 127.0.0.1) and non-ipv4 addresses
      if (!net.internal && net.family === 'IPv4') {
        return net.address;
      }
    }
  }
  return '0.0.0.0'; // Fallback to all interfaces if no specific IP is found
}

const ip = getLocalIP();
console.log(`\x1b[36m%s\x1b[0m`, `🌐 Local IP address: ${ip}`);

// Start Next.js with the detected IP
const nextDev = spawn('next', ['dev', '-H', ip], {
  stdio: 'inherit',
  shell: true
});

nextDev.on('error', (err) => {
  console.error('Failed to start Next.js:', err);
  process.exit(1);
}); 