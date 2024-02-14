const router = require('express').Router();
const { getHome, 
        getJobs, 
        getProfile, 
        getLogin 
    } = require('../controllers/pageControllers');
const withAuth = require('../utils/helpers');

router.route('/') // TEMPORARY home page router
.get(withAuth, getHome)

router.route('/jobs')
.get(withAuth, getJobs)

router.route('/profile/:id')
.get(withAuth, getProfile)

router.route('/login')
.get(getLogin)

module.exports = router;