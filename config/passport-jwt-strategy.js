// import passport module to create jwt strategy
const passport = require('passport');
const JWTStrategy = require('passport-jwt').Strategy;
const ExtractJWT = require('passport-jwt').ExtractJwt;

const User = require('../models/user');

// setting passport jwt strategy options like extracting from auth bearer token and secret key.
let opts = {
  jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
  secretOrKey: 'student-teacher-login',
};

// authenticating using passport-jwt by taking token from auth header
// and then looking for user in db if found authorize that request else reject
passport.use(
  new JWTStrategy(opts, function (jwtPayload, done) {
    User.findById(jwtPayload._id, function (err, user) {
      if (err) {
        console.log('Error in finding user from JWT');
        return;
      }
      if (user) {
        return done(null, user);
      } else {
        return done(null, false);
      }
    });
  })
);

// export the passport
module.exports = passport;
