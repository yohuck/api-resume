const {Me} = require('../models');
const {ObjectId} = require('mongodb');

module.exports = {
    getMe(req, res) {
        console.log('hello')
        Me.find()
        // .populate('projects')
            .then((users) => res.json(users))
            .catch((err) => res.status(500).json(err))
    },
    createMe(req, res){
        Me.create(req.body)
        .then((me) => res.json(me))
        .catch((err) => {
            console.log(err);
            return res.status(500).json(err);
        });
    }
}