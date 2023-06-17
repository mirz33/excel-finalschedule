const router = require('express').Router();
const excelRoute = require('./excel');

router.use('/', excelRoute);

module.exports = router;