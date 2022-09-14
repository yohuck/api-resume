const router = require("express").Router();

router.get('/', async(req, res) => {
    res.send('homepage', {
        loggedIn: req.session.loggedIn

    })
})