//------------Appeler une page html-------------------//
// const http = require('http');
// const url = process.argv[2];
// if (!url){
// 	console.log("you must include a url");
// }else {
// 	http.get(url, res =>{
// 		console.log(`got Response status : ${res.statusCode}`);
// 			let content= '';
// 			res.on('data', chunk => {
// 				content += chunk;
// 			});
// 			res.on('end', () =>{
// 				console.log(content)

// 			})


// 		}).on('error', e => {
// 			console.log("Got error: " + e.message);
// 		});
// }

//------------Appeler le Title d'une page html via module htmlCrawler-------------------//
	

const http = require('http');
const crawler = require(`${__dirname}/utils/htmlCrawler`);
const url = process.argv[2];

if (!url){
	console.log('you must include a url');
} else {
	http.get(url, res =>{
		console.log(`got Response status : ${res.statusCode}`);
			let content= '';
			res.on('data', chunk => {
				content += chunk;
			});
			res.on('end', () =>{
				crawler.saveTagToFile(content, 'title')

			})


		}).on('error', e => {
			console.log("Got error: " + e.message);
		});
}
