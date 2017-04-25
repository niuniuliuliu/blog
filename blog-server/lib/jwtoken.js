'use strict'
module.exports = function () {
    let jwt = require('jsonwebtoken');
    let Q = require('q');
    let obj = require('../config/token.json');
    let admin = require('../config/admin.json');
    this.signToken = function (userName, password) {
        var deferred = Q.defer();
        //check data base here

        //
        if (userName.toLowerCase() === admin.userName.toLowerCase() && password === admin.password) {
            let token = jwt.sign(
                //payload
                {
                    code: admin.userName,
                    name: admin.userName
                },
                //private key
                obj.secretkey,
                //options
                {
                    algorithm: 'HS256',
                    expiresIn: 60 * 60 * 24 * obj.expires,
                    audience: obj.audience,
                    issuer: obj.issuer
                });
            deferred.resolve(token);
        } else {
            deferred.reject('invalid username or password');
        }
        return deferred.promise;
    };
    this.validateToken = function (token) {
        try {
            var decoded = jwt.verify(token, obj.secretkey);
            return decoded;
        } catch (err) {
            throw err;
        }
    };
};