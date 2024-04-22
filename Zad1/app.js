const http = require('http');
const { getCars, getCarInformation, getCarAge } = require('./cars');
const htmlGenerator = require('./htmlGenerator');
const PORT = 3000;
const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });

    const startHTML = htmlGenerator.getHTMLDocumentStart();
    const endHTML = htmlGenerator.getHTMLDocumentEnd();

    res.write(startHTML);
    res.write('<body>');

    const carsList = getCars();
    console.log(carsList);

    res.write(`<p>${getCarInformation(2)}</p>`);

    res.write(`<p>${getCarAge(2)}</p>`);

    res.write('</body>');
    res.write(endHTML);
    res.end();
});

server.listen(PORT, () => {
    console.log(`Server is running on ${PORT}.`);
});
