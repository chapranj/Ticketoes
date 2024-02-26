const {BlogObj} = require('../models/blog');
const upload = require('../app')

const blog_index = (req, res) => {
    BlogObj.find().sort({ createdAt: -1 })
        .then(
            (response) => {
                res.send(response);
            }
        )
        .catch(
            (err) => {
                console.log(err)
            }
        )
}

const blogPost = (req, res) => {
    const {title, snippet, body } = req.body;
    if(!title || !snippet || !body){
        return res.status(400).json({error: "Missing required fields!"})
    }
    const blog = new BlogObj(req.body);
    console.log(req.body);
    blog.save()
        .then(
            (response) => {
                res.send(response);
            }
        )
        .catch(
            (err) => {
                console.log(err)
            }

        )
}

const getBlogById = (req, res) => {
    const id = req.params.id
    BlogObj.findById(id)
        .then(
            (response) => {
                res.send(response);
            }
        )
        .catch(
            (error) => {
                console.log(error);
            }
        )
}
const deleteBlogById = (req, res) => {
    const id = req.params.id;
    BlogObj.findByIdAndDelete(id)
        .then(
            (response) => {
                res.json({ redirect: '/blogs' })
            }
        )
        .catch(
            (error) => {
                console.log(error);
            }
        )
}

module.exports = {
    blog_index,
    blogPost,
    getBlogById,
    deleteBlogById
}