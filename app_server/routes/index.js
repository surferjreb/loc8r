var express = require('express');
var router = express.Router();
var ctrlLocations = require('../controllers/locations')
var ctrlOthers = require('../controllers/others')
//variables for routing

/* GET location pages. */
router.get('/', ctrlLocations.homelist);
router.get('/locations', ctrlLocations.locationInfo);
router.get('/locations/review/new', ctrlLocations.addReview);

/* GET Other pages */
router.get('/about', ctrlOthers.about);

module.exports = router;
