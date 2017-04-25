let Mongo = require('../lib/db/mongo');
let PlatForm = require('../lib/platform.js');
let Q = require('q');
let async = require('async');
let platform = new PlatForm();
let mongo = new Mongo();
let ObjectID = require('mongodb').ObjectID;
class BlogService {
    getBlogs() {
        let deferred = Q.defer();
        mongo.find('blogs', {sort: {creationDate: -1}}).then((result) => deferred.resolve(result), (err) => deferred.reject(err));
        return deferred.promise;
    }

    getBlogsPage(pageIndex, pageSize) {
        let deferred = Q.defer();
        mongo.findPage('blogs', pageIndex, pageSize, {sort: {creationDate: -1}}).then((result) => deferred.resolve(result), (err) => deferred.reject(err));
        return deferred.promise;
    }

    getBlog(id) {
        let deferred = Q.defer();
        mongo.find('blogs', {condition: {"_id": ObjectID(id)}}).then((result) => {
            if (result.length === 1)
                deferred.resolve(result[0]);
            else
                deferred.reject(platform.Error('no blog find'));
        }, (err) => deferred.reject(err));
        return deferred.promise;
    }

    getCategoryBlogs(category, pageIndex, pageSize) {
        let deferred = Q.defer();
        mongo.findPage('blogs', pageIndex, pageSize, {
            sort: {creationDate: -1},
            condition: {category: category}
        }).then((result) => deferred.resolve(result), (err) => deferred.reject(err));
        return deferred.promise;
    }

    insertBlog({title = '', abstract = '', category = '', content = '', creationDate = new Date()} = {}) {
        let deferred = Q.defer();
        mongo.insert('blogs', {
            title: title,
            abstract: abstract,
            category: category,
            content: content,
            creationDate: creationDate
        }).then((result) => deferred.resolve(result), (err) => deferred.reject(err));
        return deferred.promise;
    }

    getCategorys() {
        let deferred = Q.defer();
        mongo.aggregate('blogs', [{
            $group: {
                _id: "$category",
                count: {$sum: 1}
            }
        },
            {
                $sort: {
                    count: -1
                }
            }
        ]).then((result) => deferred.resolve(result), (err) => deferred.reject(err));
        return deferred.promise;
    }

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
}
module.exports = BlogService;