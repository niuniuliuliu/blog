/**
 * Created by ck on 18/04/2017.
 */
module.exports = function () {
    let MongoClient = require('mongodb').MongoClient
    let dbConfig = require('../../config/db.json');
    let url = `mongodb://${dbConfig.user}:${dbConfig.password}@${dbConfig.server}:27017/${dbConfig.database}`;
    this.connect = function () {
        let Q = require('q');
        let deferred = Q.defer();
        MongoClient.connect(url, function (err, db) {
            if (err) {
                deferred.reject(err);
            } else {
                deferred.resolve(db);
            }
        });
        return deferred.promise;
    };
    this.insert = function (collection, document) {
        let Q = require('q');
        let deferred = Q.defer();
        this.connect().then(function (db) {
            db.collection(collection).insertOne(document, function (err, r) {
                if (err) {
                    deferred.reject(err);
                } else {
                    db.close();
                    deferred.resolve(r);
                }
            });
        }, function (err) {
            deferred.reject(err);
        });
        return deferred.promise;
    };
    this.update = function (collection, document, condition) {
        let Q = require('q');
        let deferred = Q.defer();
        this.connect().then(function (db) {
            db.collection(collection).updateMany(condition, {$set: document}, function (err, r) {
                if (err) {
                    deferred.reject(err);
                } else {
                    db.close();
                    deferred.resolve(r);
                }
            });
        }, function (err) {
            deferred.reject(err);
        });
        return deferred.promise;
    };
    this.delete = function (collection, condition) {
        let Q = require('q');
        let deferred = Q.defer();
        this.connect().then(function (db) {
            db.collection(collection).deleteMany(condition, function (err, r) {
                if (err) {
                    deferred.reject(err);
                } else {
                    db.close();
                    deferred.resolve(r);
                }
            });
        }, function (err) {
            deferred.reject(err);
        });
        return deferred.promise;
    };
    this.find = function (collection, {condition = null, sort = null} = {}) {
        let Q = require('q');
        let deferred = Q.defer();
        this.connect().then(function (db) {
            db.collection(collection).find(condition).sort(sort).toArray(function (err, docs) {
                if (err) {
                    deferred.reject(err);
                } else {
                    db.close();
                    deferred.resolve(docs);
                }
            });
        }, function (err) {
            deferred.reject(err);
        });
        return deferred.promise;
    };
    this.findPage = function (collection, pageIndex = 1, pageSize = 10, {condition = null, sort = null} = {}) {
        let Q = require('q');
        let deferred = Q.defer();
        this.connect().then(function (db) {
            db.collection(collection).find(condition).limit(pageSize).skip((pageIndex - 1) * pageSize).sort(sort).toArray(function (err, docs) {
                if (err) {
                    deferred.reject(err);
                } else {
                    db.close();
                    deferred.resolve(docs);
                }
            });
        }, function (err) {
            deferred.reject(err);
        });
        return deferred.promise;
    };
};

