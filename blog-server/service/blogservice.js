let Mongo = require('../lib/db/mongo');
let PlatForm = require('../lib/platform.js');
let Q = require('q');
let async = require('async');
let platform = new PlatForm();
let mongo = new Mongo();
let BlogService = function () {
    this.getBlogs = function () {
        let deferred = Q.defer();
        mongo.find('blogs', {sort: {creationDate: -1}}).then((result) => deferred.resolve(result), (err) => deferred.reject(err));
        return deferred.promise;
    };
    this.getBlogsPage = function (pageIndex, pageSize) {
        let deferred = Q.defer();
        mongo.findPage('blogs', pageIndex, pageSize, {sort: {creationDate: -1}}).then((result) => deferred.resolve(result), (err) => deferred.reject(err));
        return deferred.promise;
    };
};

/*
 if (entity.parentId !== '-1') {
 todoArray.push(function (callback) {
 thisObj.getItem(entity.parentId).then(function (result) {
 parentEntity = new T(result);
 entity.level = parentEntity.level + 1;
 parentEntity.leaf = 0;
 callback(null);
 }, function (err) {
 callback(err);
 })
 });
 }
 todoArray.push(function (callback) {
 thisObj.create(entity).then(function (result) {
 callback(null);
 }, function (err) {
 callback(err);
 })
 });
 if (entity.parentId !== '-1') {
 todoArray.push(function (callback) {
 thisObj.update(parentEntity).then(function (result) {
 callback(null);
 }, function (err) {
 callback(err);
 })
 });
 }
 async.waterfall(todoArray, function (err, result) {
 if (err) {
 thisObj.db.rollbackTransaction();
 deferred.reject(err);
 }
 else {
 thisObj.db.commitTransaction();
 deferred.resolve(entity);
 }
 });

 */

module.exports = function () {
    return new BlogService();
};