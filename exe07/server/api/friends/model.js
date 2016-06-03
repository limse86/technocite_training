let fs = require('fs');
let _ = require('lodash');
let logger =require(`${process.cwd()}/server/utils/logger`);
let datas = JSON.parse(fs.readFileSync(`${process.cwd()}/friends.json`)).friends;

function Friend() {
    function getAllFriends() {
        return datas;
    }

    function getOne(id) {
        return _.find(datas, {'_id': parseInt(id)});
    }
    
    function post(obj)
    {
        logger.log(obj);
    }
    let that = {};
    that.getAllFriends = getAllFriends;
    that.getOne = getOne;
    that.post = post;
    return that;
}

module.exports = Friend;