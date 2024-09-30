const httpInstance = require('http');
const portNumber = 8080;

const httpServer = httpInstance.createServer((req, res) => {
    res.write('Response from server');
    res.statusCode = 200;

    res.end();
})

httpServer.listen(portNumber, () => {
    console.log("Server is lisenting on port " + portNumber)
})