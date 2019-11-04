var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var bandSchema = new Schema({
    name :{
        type: String,
        unique : false,
        required : true
    },
    genre : {
        type: String,
        unique : false,
        required : true
    },
    origin : {
        type : String,
        unique : false,
        required: true
    },
    num_integrants : {
        type: Number,
        unique : false,
        required : true

    },
    year_founded : {
        type : Number,
        unique : false,
        required : true
    }

}, {
    timestamps: true
});

module.exports = bandSchema;