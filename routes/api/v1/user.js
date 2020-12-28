// import express and router and passport to add authentication
const express = require('express');
const router = express.Router();
const passport = require('passport');

const userApi = require('../../../controllers/api/v1/user_api');


router.post('/register', userApi.register);
router.post('/login', userApi.login);
router.post(
  '/update',
  passport.authenticate('jwt', { session: false }),
  userApi.updateCredentials
);

module.exports = router;
