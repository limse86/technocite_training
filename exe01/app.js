let fs = require('fs');
let names = process.argv[2];


let filePath = 'test1.txt'
fs.readFile(filePath, 'utf8', function(err, data) {
    if (err) throw err;
    //  var lines = data.split("\r"); 
    // console.log(data);
    // console.log("----------------------");
    // console.log(`Ce fichier contient ${lines.length} lignes`);
    if (!names) {
        console.log('ERREUR vous n\'avez pas mis de valeurs lors de l\'appel de la commande');
    } else {
        let inData = data + names.replace(/,/g, "\n") + "\n";
        fs.writeFile(filePath, inData, (err) => {
            if (err) throw err;
            console.log('It\'s saved!');
        });
    }
});