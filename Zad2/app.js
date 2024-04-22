const http = require('http');
const { handleHome, handleAddCar, handleCar, handlePageNotFound } = require('./routes');
const PORT = 3000;
const server = http.createServer((request, response) => {
    if (request.method === 'GET' && request.url === '/') {
        handleHome(response);
    } else if (request.method === 'GET' && request.url === '/add-car') {
        handleAddCar('GET', request, response);
    } else if (request.method === 'POST' && request.url === '/add-car') {
        handleAddCar('POST', request, response);
    } else if (request.method === 'GET' && request.url === '/car') {
        handleCar(response);
    } else {
        handlePageNotFound(response);
    }
});
server.listen(PORT, () => {
    console.log(`Server is running on ${PORT}.`);
});