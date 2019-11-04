var mongoose = require('mongoose');
var bandSchema = require('./band.model');

bandSchema.statics = {

    //crear una banda
    create : function(data, cb) {
        var band = new this(data);
        band.save(cb);
    },
    //buscar todas las bandas
    get: function(query, cb) {
        this.find(query, cb);
    },
    //buscar las bandads por su nombre
    getByName: function(query, cb) {
        this.find(query, cb);
    },
    //actualizar la banda por su id
    update: function(query, updateData, cb) {
        this.findOneAndUpdate(query, {$set: updateData},{new: true}, cb);
    },
    //eliminar una banda por su id
    delete: function(query, cb) {
        this.findOneAndDelete(query,cb);
    }
    
}

var bandsModel = mongoose.model('Bands', bandSchema);
module.exports = bandsModel;