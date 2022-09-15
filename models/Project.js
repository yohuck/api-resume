const {Schema, model} = require('mongoose');

const projectSchema = new Schema(
    {
        name: {
            type: String,
        },
        repo: {
            type: String,
        },
        live: {
            type: String,
        },
        description: {
            type: String,
        },
        stack: {
            type: Array,
        }
    },
    {
        toJSON: {
            virtuals: false,
        },
        id: false,
    }
)

const Project = model('project', projectSchema)

module.exports = Project