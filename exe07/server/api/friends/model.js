let fs = require('fs');
let _ = require('lodash');
let logger = require(`${process.cwd()}/server/utils/logger`);
let datas = JSON.parse(fs.readFileSync(`${process.cwd()}/friends.json`)).friends;

function Friend() {

    function getAllFriends() {
        return datas;
    }

    function getOne(id) {
        return _.find(datas, {
            'id': parseInt(id)
        });
    }
    function updateOne( obj) {
        let updateObject = {
            'id':obj.id,
            'name': obj.name,
            'email': obj.email
        };
        datas[_.findIndex(datas, {
            'id': parseInt(obj.id)
        })] = updateObject;
        save();
        return true ;
    }

    function post(obj) {
        let insertObject = {
            'id':nextId(),
            'name': obj.name,
            'email': obj.email
        };
        datas.push(insertObject);
        save();
        return true;
    }
    
    function deleteOne (item){
        logger.log(item)
       _.remove(datas,_.find(datas,item));
       save();
       return true;
    }
    
    function nextId()
    {
        let max =  parseInt((_.maxBy(datas,'id').id));
        max++;
        return max;
    }
    
    function save(){
        let outData = JSON.stringify({
            "friends": datas
        });
        fs.writeFileSync(`${process.cwd()}/friends.json`, outData);
    }
    let that = {};
    that.getAllFriends = getAllFriends;
    that.getOne = getOne;
    that.post = post;
    that.updateOne = updateOne;
    that.deleteOne = deleteOne;
    return that;
}

module.exports = Friend;