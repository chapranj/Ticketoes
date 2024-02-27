const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const blogSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    snippet: {
        type: String,
        required: false
    },
    body:{
        type: String,
        required: true
    }
}, {timestamps: true});


const ticketPostSchema = new Schema ({
    ticketId: {
        type: Schema.Types.ObjectId,
        ref: 'Blog', // Reference to the Blog model
        required: true
    },
    content: {
        type: String,
        required: true
    },

},{timestamps:true});
//

const Blog = mongoose.model('Blog', blogSchema);
const TicketPost = mongoose.model('TicketPost', ticketPostSchema);


module.exports = {
    BlogObj : Blog,
    TicketPostObj: TicketPost
};
