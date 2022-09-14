const {Schema, model} = require('mongoose');

const projectSchema = new Schema(
    {
        name: {
            type: String,
        },
        description: {
            type: String,
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