const http = require('http');
let arveldusKontod = ["EE1001","EE1002","EE1003"];
let pensioniKontod = ["EE2021","EE2022"];
const requestListener = function (req, res) {​​​​​
    res.writeHead(200);
    if (req.url === "/kontod")
        res.end( JSON.stringify(arveldusKontod) );
    else if (req.url === "/pension")
        res.end( JSON.stringify(pensioniKontod) );
    else {​​​​​
        res.writeHead(404);
        res.end( "Lehekülge ei leitud" );
    }​​​​​
}​​​​​;
const server = http.createServer(requestListener);
server.listen(8080);
console.log("Läks käima, kuulan porti 8080");