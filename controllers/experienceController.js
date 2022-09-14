const {Experience} = require('../models');
const {ObjectId} = require('mongodb');

module.exports = {
    getExperience(req, res) {
        console.log('hello')
        Experience.find()
            .then((users) => res.json(users))
            .catch((err) => res.status(500).json(err))
    },
    createExperience(req, res){
        Experience.create(req.body)
        .then((me) => res.json(me))
        .catch((err) => {
            console.log(err);
            return res.status(500).json(err);
        });
    }
}