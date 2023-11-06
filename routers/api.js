const express = require('express');
const router = express.Router();
const {testApi} = require('../controllers/apiControllers')


router.get('/info', testApi )



  module.exports = router