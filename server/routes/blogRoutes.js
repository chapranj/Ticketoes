const express = require('express');
const router = express.Router();
const blogController = require('../controllers/blogController')

router.get('/blogs', blogController.blog_index );
router.post('/blogs', blogController.blogPost );
router.get('/blogs/:id', blogController.getBlogById);
router.delete('/blogs/:id', blogController.deleteBlogById);
module.exports = router;