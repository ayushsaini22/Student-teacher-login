// import express and router and passport to add authentication
const express = require('express');
const router = express.Router();
const passport = require('passport');


// import assets controller api
const assignmentApi = require('../../../controllers/api/v1/assignment_api');

// create assignments
router.post(
  '/create',
  passport.authenticate('jwt', { session: false }),
  assignmentApi.createAssignment
);

// submit assignments
router.post(
  '/submit',
  passport.authenticate('jwt', { session: false }),
  assignmentApi.submitAssignment
);

//get assignments
router.get('/all-assignments', assignmentApi.getAllAssignments);

//evaluate assignments
router.post(
  '/evaluate',
  passport.authenticate('jwt', { session: false }),
  assignmentApi.evaluateAssignments
);

// export the router
module.exports = router;
