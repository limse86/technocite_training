let model = require('./model');
let friend = model();
let logger =require(`${process.cwd()}/server/utils/logger`);


exports.param = function(req,res,next,id){  //pré traitement de l'information
    req.friend = friend.getOne(id);
    next();
}

exports.get = function(req,res,next){  //va chercher l'info et renvois la donnée
    let friends = friend.getAllFriends();
    res.json(friends);
}

exports.getOne = function(req,res,next){ //renvois le resultat
    res.json(req.friends);
}

exports.post = function(req,res,next){
    friend.post(req.body);
}