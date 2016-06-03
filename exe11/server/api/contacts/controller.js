let logger = require(`${process.cwd()}/server/utils/logger`);
let model = require('./model');

exports.get = function(req, res, next) {
  model.find()
  .then(function(docs){
        res.json(docs);
  });


}