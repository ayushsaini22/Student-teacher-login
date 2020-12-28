// import express and router
const express = require('express');
const router = express.Router();


// add v1 route
router.use('/v1', require('./v1'));

// export the router
module.exports = router;
