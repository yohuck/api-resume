const {Routes} = require('../models');
const {ObjectId} = require('mongodb');

module.exports = {
    getRoutes(req, res) {
        Routes.find()
            .then((contacts) => res.json(contacts))
            .catch((err) => res.status(500).json(err))
    },
    createRoutes(req, res){
        Routes.create(req.body)
        .then((contact) => res.json(contact))
        .catch((err) => {
            return res.status(500).json(err);
        });
    }
}