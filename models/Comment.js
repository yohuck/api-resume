const {Schema, model} = require('mongoose');

const commentSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            unique: false,
            trim: true,
        },
        email: {
            type: String,
            required: true,
            unique: false,
            trim: true,
            match: /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/
        },
        message: {
            type: String,
            required: true,
            unique: false,
            trim: true,
            maxlength: 400
        }
    },
    {
        toJSON: {
            virtuals: false,
        },
        id: false,
    }
)

const Comment = model('comment', commentSchema)

module.exports = Comment