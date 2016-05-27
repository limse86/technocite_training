// const http = require('http');

// const hostname = '127.0.0.1';
// const port = 3000;

// const server = http.createServer((req, res) => {



// let url = req.url;
// if (url !== '/' && url !== '/favicon') {
// 	res.statusCode = 404;
// 	res.setHeader('Content-Type', 'text/plain');
// 	res.end('This is a 404 error please smile :-)');

// }else{

// 	res.statusCode = 200;
//   	res.setHeader('Content-Type', 'text/plain');
//   	res.end('Hello World');
// }
  
// });



// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });

//------------ajoute une page html-------------------//
// const http = require('http');

// const hostname = '127.0.0.1';
// const port = 3000;

// const server = http.createServer((req, res) => {

// const fs =require('fs');


// let url = req.url;
// if (url !== '/' && url !== '/favicon') {
// 	res.statusCode = 404;
// 	res.setHeader('Content-Type', 'text/plain');
// 	res.end('This is a 404 error please smile :-)');

// }else{

// 	res.statusCode = 200;
//   	res.setHeader('Content-Type', 'text/html');
//   	//affiche la page index
//   	fs.readFile('index.html', 'utf8', (err, data)=> { 
//   		res.end(data);
//   	});
// }
  
// });



// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });
//------------ajoute une page html-------------------//


const http = require('http');
const fs =require('fs');
const routeMgt = require('./modules/routesMgt')
const hostname = '127.0.0.1';
const port = 3000;
const server = http.createServer((req, res) => {

	let url = req.url;
	if (url.indexOf('.jpg'||'.gif'||'.png') !== -1) {
		res.statusCode = 200;
		let readStream = fs.createReadStream(`public${url}`);
		readStream.on('open', function(){
			readStream.pipe(res);
			});
		readStream.on('error', function(err){
				console.log(err);
		});

	}else{

		routeMgt(req,res);

	}

});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);

});











