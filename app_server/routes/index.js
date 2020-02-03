var express = require('express');
var router = express.Router();
var ctrlhomepage = require('../controllers/main')
/* GET home page. */
router.get('/', ctrlhomepage.index);

module.exports = router;
