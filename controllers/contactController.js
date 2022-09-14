const {Contact} = require('../models');
const {ObjectId} = require('mongodb');

module.exports = {
    getContacts(req, res) {
        Contact.find()
            .then((contacts) => res.json(contacts))
            .catch((err) => res.status(500).json(err))
    },
    createContact(req, res){
        Contact.create(req.body)
        .then((contact) => res.json(contact))
        .catch((err) => {
            return res.status(500).json(err);
        });
    }
}