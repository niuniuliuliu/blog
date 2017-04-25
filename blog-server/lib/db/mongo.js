/**
 * Created by ck on 18/04/2017.
 */
let MongoClient = require('mongodb').MongoClient;
let dbConfig = require('../../config/db.json');
class Mongo {
    constructor() {
    }

    connect() {
        let url = `mongodb://${dbConfig.user}:${dbConfig.password}@${dbConfig.server}:27017/${dbConfig.database}`;
        let Q = require('q');
        let deferred = Q.defer();
        MongoClient.connect(url, (err, db) => {
            if (err) {
                deferred.reject(err);
            } else {
                deferred.resolve(db);
            }
        });
        return deferred.promise;
    }

    insert(collection, document) {
        let Q = require('q');
        let deferred = Q.defer();
        this.connect().then((db) => {
            db.collection(collection).insertOne(document, (err, r) => {
                if (err) {
                    deferred.reject(err);
                } else {
                    db.close();
                    deferred.resolve(r);
                }
            });
        }, (err) => {
            deferred.reject(err);
        });
        return deferred.promise;
    }

    update(collection, document, condition) {
        let Q = require('q');
        let deferred = Q.defer();
        this.connect().then((db) => {
            db.collection(collection).updateMany(condition, {$set: document}, (err, r) => {
                if (err) {
                    deferred.reject(err);
                } else {
                    db.close();
                    deferred.resolve(r);
                }
            });
        }, (err) => {
            deferred.reject(err);
        });
        return deferred.promise;
    }

    delete(collection, condition) {
        let Q = require('q');
        let deferred = Q.defer();
        this.connect().then(function (db) {
            db.collection(collection).deleteMany(condition, (err, r) => {
                if (err) {
                    deferred.reject(err);
                } else {
                    db.close();
                    deferred.resolve(r);
                }
            });
        }, (err) => {
            deferred.reject(err);
        });
        return deferred.promise;
    }

    find(collection, {condition = null, sort = null} = {}) {
        let Q = require('q');
        let deferred = Q.defer();
        this.connect().then((db) => {
            db.collection(collection).find(condition).sort(sort).toArray((err, docs) => {
                if (err) {
                    deferred.reject(err);
                } else {
                    db.close();
                    deferred.resolve(docs);
                }
            });
        }, (err) => {
            deferred.reject(err);
        });
        return deferred.promise;
    }

    findPage(collection, pageIndex = 1, pageSize = 10, {condition = null, sort = null} = {}) {
        let Q = require('q');
        let deferred = Q.defer();
        this.connect().then((db) => {
            db.collection(collection).find(condition).limit(pageSize).skip((pageIndex - 1) * pageSize).sort(sort).toArray((err, docs) => {
                if (err) {
                    deferred.reject(err);
                } else {
                    db.close();
                    deferred.resolve(docs);
                }
            });
        }, (err) => {
            deferred.reject(err);
        });
        return deferred.promise;
    };

    distinct(collection, field, {condition = null, options = null} = {}) {
        let Q = require('q');
        let deferred = Q.defer();
        this.connect().then((db) => {
            db.collection(collection).distinct(field, condition, options, (err, docs) => {
                if (err) {
                    deferred.reject(err);
                } else {
                    db.close();
                    deferred.resolve(docs);
                }
            });
        }, (err) => {
            deferred.reject(err);
        });
        return deferred.promise;
    }

    aggregate(collection, pipeline, {options = null} = {}) {
        let Q = require('q');
        let deferred = Q.defer();
        this.connect().then((db) => {
            db.collection(collection).aggregate(pipeline, options).toArray((err, docs) => {
                if (err) {
                    deferred.reject(err);
                } else {
                    db.close();
                    deferred.resolve(docs);
                }
            });
        }, (err) => {
            deferred.reject(err);
        });
        return deferred.promise;
    }
}


module.exports = Mongo;
