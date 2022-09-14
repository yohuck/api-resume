const {Project} = require('../models');
const {ObjectId} = require('mongodb');

module.exports = {
    getProjects(req, res) {
        console.log('hello')
        Project.find()
            .then((users) => res.json(users))
            .catch((err) => res.status(500).json(err))
    },
    createProject(req, res){
        Project.create(req.body)
        .then((me) => res.json(me))
        .catch((err) => {
            console.log(err);
            return res.status(500).json(err);
        });
    }
}