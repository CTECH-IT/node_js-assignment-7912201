var http = require('http');
var url = require('url');
var fs = require('fs');
var events = require('events');
var eventEmitter = new events.EventEmitter();

var myEventHandler = function() {
    console.log("AAAAAAAAAAAAAAAAAA");
}

eventEmitter.on('scream', myEventHandler);



http.createServer(function(req, res) {
    var q = url.parse(req.url, true);
    var filename = "." + q.pathname;
    fs.readFile(filename, function(err, data) {
        if(err) {
            res.writeHead(404, {'Content-Type': 'text/html'})
            return res.end("404 Not Found")
        }
        eventEmitter.emit('scream');
        res.writeHead(200, {'Content-Type': 'text/html'})
        res.write(data)
        return res.end();
    })

}).listen(8080);