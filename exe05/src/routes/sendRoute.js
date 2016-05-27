let express = require('express');
let router = express.Router();
router.post('/', function(req,res){
   console.log('post to contact');
   res.send('ok');
});

module.exports=router;