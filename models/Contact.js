const {Schema, model} = require('mongoose');

const contactSchema = new Schema(
    {
        email: {
            type: String,
            required: true,
            unique: false,
            trim: true,
            match: /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/
        },
        phone: {
            type: String,
            required: true,
            unique: false,
            trim: true,
            match: /^\d{3}(-|\s)\d{3}(-|\s)\d{4}$|^\d{10}$|^1\s\d{3}(-|\s)\d{3}(-|\s)\d{4}$|^(1\s?)?\(\d{3}\)(\s|\-)?\d{3}\-\d{4}$/
        },
        gitHub: {
            type: String,
            trim: true,
            match: /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/
        },
        linkedIn: {
            type: String,
            trim: true,
            match: /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/
        },
        twitter: {
            type: String,
            trim: true,
            match: /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/
        },
    },
    {
        toJSON: {
            virtuals: false,
        },
        id: false,
    }
)

const Contact = model('contact', contactSchema)

module.exports = Contact