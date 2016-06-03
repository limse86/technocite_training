let model = require('./model');
let friend = model();
let logger = require(`${process.cwd()}/server/utils/logger`);
let _ = require('lodash');


exports.param = function(req, res, next, id) {
    req.friend = friend.getOne(id);
    next();
}

exports.get = function(req, res, next) {
    let friends = friend.getAllFriends();
    res.json(friends);
}

exports.getOne = function(req, res, next) {
    res.json(req.friend);
}

exports.updateOne = function(req, res, next) {
    if (_.isEmpty(req.body)) {
        next(new Error('the request is empty wtf why ???'));
    } else {
        if (friend.updateOne(req.body)) res.json({
            'message': ' update friend successful'
        });
    }
}
exports.post = function(req, res, next) {
    if (_.isEmpty(req.body)) {
        next(new Error('the request is empty wtf why ???'));
    } else {
        if (friend.post(req.body)) res.json({
            'message': ' post friend successful'
        });
    }
}
exports.delete = function(req, res, next) { 
   if( friend.deleteOne(req.friend)) res.json({'message':'delete friend successfull'});
}