var Bands = require('./band.dao');

exports.createBand = function (req, res, next) {
    var band = {
        name: req.body.name,
        genre: req.body.genre,
        origin: req.body.origin,
        num_integrants: req.body.num_integrants,
        year_founded: req.body.year_founded
    };

    Bands.create(band, function(err, band) {
        if(err) {
            res.json({
                error : err
            })
        }
        res.json({
            message : "Banda creada"
        })
    })
}

exports.getBands = function(req, res, next) {
    Bands.get({}, function(err, bands) {
        if(err) {
            res.json({
                error: err
            })
        }
        res.json({
            bands: bands
        })
    })
}

exports.getBand = function(req, res, next) {
    Bands.get({name: req.params.name}, function(err, bands) {
        if(err) {
            res.json({
                error: err
            })
        }
        res.json({
            bands: bands
        })
    })
}


exports.updateBand = function(req, res, next) {
    var band = {
        name: req.body.name,
        genre: req.body.genre,
        origin: req.body.origin,
        num_integrants: req.body.num_integrants,
        year_founded: req.body.year_founded
    }
    Bands.update({_id: req.params.id}, band, function(err, band) {
        if(err) {
            res.json({
                error : err
            })
        }
        res.json({
            message : "Banda actualizada"
        })
    })
}

exports.removeBand = function(req, res, next) {
    Bands.delete({_id: req.params.id}, function(err, band) {
        if(err) {
            res.json({
                error : err
            })
        }
        res.json({
            message : "Banda eliminada"
        })
    })
}