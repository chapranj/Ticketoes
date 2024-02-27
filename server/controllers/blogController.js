const { BlogObj, TicketPostObj } = require('../models/blog');
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

const postTicketPost = (req, res) => {
    const { content } = req.body;

    if (!content) {
        return res.status(400).json({ error: "Missing required field content" })
    }
    const ticketPost = new TicketPostObj(req.body);
    ticketPost.save()
        .then(
            (response) => {
                res.send(response);
            }
        )
        .catch(
            (error) => { console.log(error) }
        )
}

const getTicketPost = (req, res) => {
    TicketPostObj.find({ ticketId: req.params.id }).sort({ createdAt: -1 })
        .then(
            (response) => {
                console.log("??????????????????????????????????????????????????????????????????????????????????????????")
                console.log(req)
                console.log(response)
                res.send(response);
            }
        )
        .catch(
            (error) => {
                console.log(error);
            }
        )
}

const deleteTicketPost = (req, res) => {
    TicketPostObj.findByIdAndDelete(req.params.id)
        .then((response) => {
            if (!response) {
                // If response is null, the post with the given id was not found
                return res.status(404).json({ success: false, error: "Ticket post not found" });
            }
            // If the post was successfully deleted, respond with a success message
            res.status(200).json({ success: true, message: "Ticket post deleted successfully" });
        })
        .catch(
            (error) => {
                console.log(error);
            }
        )
}

const blogPost = (req, res) => {
    const { title, snippet, body } = req.body;
    if (!title || !snippet || !body) {
        return res.status(400).json({ error: "Missing required fields!" })
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
    deleteBlogById,
    postTicketPost,
    getTicketPost,
    deleteTicketPost
}