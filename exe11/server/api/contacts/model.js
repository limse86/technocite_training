let mongoose = require('mongoose');
let model = function() {
    let schema = mongoose.Schema({
        name: String,
        address: {
            street: String,
            number: Number,
            cp: Number,
            town: String,
            country: String
        },
        finacial_data: {
            turnover: Number,
            employees: Number
        },
        creation_year: Number
    });
    return mongoose.model('company', schema,'companies');
};

module.exports = new model();