var http = require('http');
http.createServer(function handler(req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World\n');//http://127.0.0.1:1337/访问
}).listen(1337, '127.0.0.1');//防止因运行进程还在内存导致的端口占用
console.log('Server running at http://127.0.0.1:1337/');
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'test'
});
 
connection.connect();
 
connection.query('select * from tb_xuanjiang', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results[0].cityName);
});
