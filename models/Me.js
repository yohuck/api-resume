const {Schema, model} = require('mongoose')

const meSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            unique: false,
            trim: true,
        },
        aboutMe: {
            type: String,
            required: true,
            unique: false,
            trim: true,
        }
        // projects: [{
        //     type: Schema.Types.ObjectId,
        //     ref: 'project'
        // }],
        // contacts: [{
        //     type: Schema.Types.ObjectId,
        //     ref: 'contact'
        // }],
        // comments: [{
        //     type: Schema.Types.ObjectId,
        //     ref: 'comment'
        // }]
    },
    {
        toJSON: {
            virtuals: false,
        },
        id: false,
    }
)

// meSchema.virtual('projectCount').get(function(){
//     return this.projects.length
// })

const Me = model('me', meSchema)

module.exports =  Me