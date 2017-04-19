var express = require('express');
var JwtToken = require('./jwtoken');
var PFError = function (message, code) {
    this.message = message || '';
    this.code = code;

};
PFError.prototype = Object.create(Error.prototype);
PFError.prototype.constructor = PFError;

module.exports = function () {
    var tokenValidator = function (req, res, next) {
        try {
            var jwtoken = new JwtToken();
            var token = req.headers.authorization;
            var decoded = jwtoken.validateToken(token);
            //add user info to req
            req.user = {id: decoded.id, code: decoded.code, name: decoded.name, type: decoded.type};
            next();
        }
        catch (err) {
            res.status(401).send(err);
        }
    };
    //api 权限控制
    var permissionValidator = function (req, res, next) {
        //根据用户判断是否有访问api的权限
        next();
    };

    this.Router = function () {
        var router = express.Router();
        router.use(tokenValidator);
        router.use(permissionValidator);
        return router;
    };
    this.Error = function (message, code) {
        return new PFError(message, code);
    };
};



