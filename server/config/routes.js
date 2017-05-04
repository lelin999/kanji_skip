var kanjis = require('../controllers/kanjis.js');

module.exports = function(app){
    app.get('/kanjis', function(req, res) {
        kanjis.showRandom(req, res);
    });
    app.get('/kanjis/level_one', function(req, res) {
        kanjis.showRandom1(req, res);
    });
    app.get('/kanjis/level_two', function(req, res) {
        kanjis.showRandom2(req, res);
    });
    app.get('/kanjis/level_three', function(req, res) {
        kanjis.showRandom3(req, res);
    });
    app.get('/kanjis/level_four', function(req, res) {
        kanjis.showRandom4(req, res);
    });
};
