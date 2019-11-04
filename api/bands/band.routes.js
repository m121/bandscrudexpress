var Bands = require('./band.controller');

module.exports = function(router) {
    router.post('/create', Bands.createBand);
    router.get('/get', Bands.getBands);
    router.get('/get/:name', Bands.getBand);
    router.put('/update/:id', Bands.updateBand);
    router.delete('/remove/:id', Bands.removeBand);
}