// import express and router
const express = require('express');
const router = express.Router();


console.log('everthing working');

// adding api route
router.use('/api', require('./api'));

// export the router
module.exports = router;
