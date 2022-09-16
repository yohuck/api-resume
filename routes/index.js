const router = require('express').Router();
const db = require('../config/connection');

const {
    getRoutes
} = require('../controllers/routeController')

const {
    getMe
} = require('../controllers/meController')

const {
    getProjects
} = require('../controllers/projectController')

const {
    getContacts
} = require('../controllers/contactController')

const {
    getExperience
} = require('../controllers/experienceController')

const {
    getComments,
    createComment
} = require('../controllers/commentController')


router.route('/api')
.get(getRoutes)


router.route('/api/resume')
.get(getMe)


router.route('/api/projects')
.get(getProjects)


router.route('/api/contact')
.get(getContacts)


router.route('/api/experience')
.get(getExperience)


router.route('/api/comments')
.get(getComments)
.post(createComment)


module.exports = router