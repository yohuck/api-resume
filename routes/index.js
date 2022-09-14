const router = require('express').Router();
const db = require('../config/connection')
// const apiRoutes = require('./api');

// router.use('/api')

const {
    getMe,
    createMe
} = require('../controllers/meController')

const {
    getProjects,
    createProject
} = require('../controllers/projectController')

const {
    getContacts,
    createContact
} = require('../controllers/contactController')



router.route('/api')
.get(getMe)
.post(createMe)

router.route('/api/projects')
.get(getProjects)
.post(createProject)

router.route('/api/contacts')
.get(getContacts)
.post(createContact)

module.exports = router