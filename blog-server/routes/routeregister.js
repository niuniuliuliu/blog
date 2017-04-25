/**
 * Created by ck on 11/03/2017.
 */
module.exports = function (app) {
    //index
    let indexRoutes = require('./indexroute');
    app.use('/api', indexRoutes);
    //admin
    let adminRoutes = require('./adminroute');
    app.use('/api', adminRoutes);
}