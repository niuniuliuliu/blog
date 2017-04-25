/**
 * Created by ck on 24/04/2017.
 */
let express = require('express');
let PlatForm = require('../lib/platform.js');
let platform = new PlatForm();
let router = platform.Router();
let BlogService = require('../service/blogservice');
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
module.exports = router;

