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



router.route('/api')
.get(getMe)
.post(createMe)

router.route('/api/projects')
.get(getProjects)
.post(createProject)

module.exports = router