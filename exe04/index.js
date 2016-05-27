//---------affiche avec expressJs la page Html------//

// const express = require('express');
// const app = express();
// const root = process.cwd(); //chemin d'execution du fichier actuelle
// app.use(express.static('public'));//mise en route fichier statique dans dossier "public"

// app.get('/', function (req, res) {

//   res.sendFile(`${root}/public/index.html`);
// });

// app.listen(3000, function () {
//   console.log('Example app listening on port 3000!');
// });

//---------affiche un moteur de rendu avec express + handlebars------//

const express = require('express');
const exphbs = require('express-handlebars');
const app = express();
const root=process.cwd();

let hbs = exphbs.create({
    defaultLayout :'main',
    extname:'.hbs',
    helpers:{ //rajoute des fonctionalités handlebars

        crie : function(){return new Date();},
        yell :function(str) {return str.toUpperCase()}
    }
})


app.engine('hbs',hbs.engine);
app.set('view engine','hbs');
app.use(express.static('public'));
app.get('/', (req, res)=> {
  res.render('home',{data:{name:'Selim',title: 'training'}});
});
app.get('/page',(req,res) =>{
 res.render('page1',{layout:'pages'})
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});