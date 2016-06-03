let logger = require(`${process.cwd()}/server/utils/logger`);
let MongoClient = require('mongodb').MongoClient


exports.get = function(req, res, next) {
    // Connection URL
    var url = 'mongodb://localhost:27017/companies';
    // Use connect method to connect to the Server
    MongoClient.connect(url, function(err, db) {
        if (err) logger.log(err);
        let collection = db.collection('companies');
        collection.find({ "financial_data.employees":{'$lt':"200"}}).toArray(function(err, docs) {
            if(err) console.log(err);
            console.log("Found the following records");
            res.json(docs);
            db.close();
        });

    });


}