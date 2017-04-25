/**
 * Created by ck on 24/04/2017.
 */
let express = require('express');
let PlatForm = require('../lib/platform.js');
let platform = new PlatForm();
let router = platform.Router();
let BlogService = require('../service/blogservice');
//search
router.get('/blogsearch', function (req, res, next) {
    try {
        let service = new BlogService();
        let pageIndex = Number(req.query.pageIndex) || 1;
        let pageSize = Number(req.query.pageSize) || 10;
        service.getBlogsPage(pageIndex, pageSize,
            {
                condition: {
                    title: new RegExp(req.query.key || '', 'i')
                }
            }).then((result) => res.apiSuccess(result), (err) => next(err));
    }
    catch (err) {
        next(err);
    }
});
//add
router.post('/blogs', function (req, res, next) {
    try {
        let service = new BlogService();
        service.insertBlog({
            title: req.body.title,
            abstract: req.body.abstract,
            category: req.body.category,
            content: req.body.content
        }).then((result) => res.apiSuccess(result), (err) => next(err));
    }
    catch (err) {
        next(err);
    }
});
//update
router.patch('/blogs/:id', function (req, res, next) {
    try {
        let service = new BlogService();
        service.updateBlog(req.params.id, {
            title: req.body.title,
            abstract: req.body.abstract,
            category: req.body.category,
            content: req.body.content
        }).then((result) => res.apiSuccess(result), (err) => next(err));
    }
    catch (err) {
        next(err);
    }
});
//delete
router.delete('/blogs/:id', function (req, res, next) {
    try {
        let service = new BlogService();
        service.deleteBlog(req.params.id).then((result) => res.apiSuccess(result), (err) => next(err));
    }
    catch (err) {
        next(err);
    }
});
module.exports = router;

