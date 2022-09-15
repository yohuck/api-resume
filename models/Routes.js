const {Schema, model} = require('mongoose');

const routeSchema = new Schema(
    {
        routes: {
            type: Array,
            required: true,
        }
    },
    {
        toJSON: {
            virtuals: false,
        },
        id: false,
    }
)

const Route = model('route', routeSchema)

module.exports = Route