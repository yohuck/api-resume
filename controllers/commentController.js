const {Comment} = require('../models');
const {ObjectId} = require('mongodb');

module.exports = {
    getComments(req, res) {
        Comment.find()
            .then((contacts) => res.json(contacts))
            .catch((err) => res.status(500).json(err))
    },
    createComment(req, res){
        Comment.create(req.body)
        .then((contact) => res.json(contact))
        .catch((err) => {
            return res.status(500).json(err);
        });
    }
}