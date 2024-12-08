let http = require('http');
const os = require('os');

function getSystemInfo(res) {
    const totalMemory = os.totalmem();
    const freeMemory = os.freemem();
    const system = os.type();
    const release = os.release();
    const uptime = os.uptime();
    const usedMemory = totalMemory - freeMemory;

    const systemInfo = {
        totalMemory,
        freeMemory,
        system,
        release,
        uptime,
        usedMemory
    };

    res.writeHead(200, {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': 'http://127.0.0.1:5500', // Specified the exact origin to avoid errors
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE',
        'Access-Control-Allow-Headers': 'Content-Type'
    });
    res.end(JSON.stringify(systemInfo));
}

const server = http.createServer(function(req, res) {
    if (req.method === 'OPTIONS') {
        res.writeHead(204, {
            'Access-Control-Allow-Origin': 'http://127.0.0.1:5500', // Specified the exact origin to avoid errors
            'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE',
            'Access-Control-Allow-Headers': 'Content-Type'
        });
        res.end();
    } else if (req.url === '/') {
        getSystemInfo(res);
    }
});

server.listen(3000, () => {
    console.log('Server is running on port 3000');
});