var  http = require("http"); 
http.createServer( function (req, res) { 
  res.writeHead( 200 , {"Content-Type": "text/html"}); 
  res.write("<h1>Test Nodejs</h1>"); 
  res.write("<p>Hello World</p>");
  res.write("<p>w3ccafe.com</p>");
}).listen(8080);