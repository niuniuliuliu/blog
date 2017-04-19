/**
 * Created by ck on 11/03/2017.
 */
module.exports = function (app) {
    //index
    var indexRoutes = require('./indexroute');
    app.use('/api', indexRoutes);
}