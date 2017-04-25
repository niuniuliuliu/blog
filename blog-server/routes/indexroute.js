let express = require('express');
let router = express.Router();
let BlogService = require('../service/blogservice');
let JwtToken = require('../lib/jwtoken.js');
//admin login
router.get('/login', function (req, res, next) {
    try {
        let jwtoken = new JwtToken();
        jwtoken.signToken(req.query.userName, req.query.password).then(function (token) {
            res.apiSuccess(token);
        }, function (err) {
            next(err);
        });
    }
    catch (err) {
        next(err);
    }
});

//load page
router.get('/blogs', function (req, res, next) {
    try {
        let service = new BlogService();
        let pageIndex = Number(req.query.pageIndex) || 1;
        let pageSize = Number(req.query.pageSize) || 10;
        service.getBlogsPage(pageIndex, pageSize).then((result) => res.apiSuccess(result), (err) => next(err));
    }
    catch (err) {
        next(err);
    }
});

//single blog
router.get('/blogs/:id', function (req, res, next) {
    try {
        let service = new BlogService();
        service.getBlog(req.params.id).then((result) => res.apiSuccess(result), (err) => next(err));
    }
    catch (err) {
        next(err);
    }
});
//categorys
router.get('/categorys', function (req, res, next) {
    try {
        let service = new BlogService();
        service.getCategorys().then((result) => res.apiSuccess(result), (err) => next(err));
    }
    catch (err) {
        next(err);
    }
});
//category blogs
router.get('/categorys/:category/blogs', function (req, res, next) {
    try {
        let service = new BlogService();
        let pageIndex = Number(req.query.pageIndex) || 1;
        let pageSize = Number(req.query.pageSize) || 10;
        service.getCategoryBlogs(req.params.category, pageIndex, pageSize).then((result) => res.apiSuccess(result), (err) => next(err));
    }
    catch (err) {
        next(err);
    }
});
module.exports = router;
