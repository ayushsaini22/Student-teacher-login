// import express and router
const express = require('express');
const router = express.Router();


// import routes
const user = require('./user');
const assignment = require('./assignment');

// including routes
router.use('/user', user);
router.use('/assignment', assignment);

// export the router
module.exports = router;
