setInterval(async function callGetSystemInfo() {
    try {
        const response = await fetch('http://localhost:3000', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await response.json();
        // Update HTML with the data received
        document.querySelector('.ui.head').innerText = `It looks like you're using ${data.system}.`;
        document.querySelector('.os').innerText = `The version you're using is ${data.release}.`;
        document.querySelector('.totalmem').innerText = `The total memory on your device is ${data.totalMemory} bytes.`;
        document.querySelector('.freemem').innerText = `The free memory on your device is ${data.freeMemory} bytes.`;
        document.querySelector('.usedmem').innerText = `The used memory on your device is ${data.usedMemory} bytes.`;
        document.querySelector('.sysuptime').innerText = `The system uptime on your device is ${data.uptime} seconds.`;
    } catch (error) {
        console.error('Error fetching system info:', error);
    }
}, 1000);
