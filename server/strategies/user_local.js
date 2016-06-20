var passport = require('passport');
var localStrategy = require('passport-local').Strategy;
var encryptLib = require('../modules/encryption');


// Does actual work of logging in
passport.use('local', new localStrategy({
        passReqToCallback: true,
        emailField: 'email'
    }, function(req, username, password, done) {
            var user = {
                'danica' : 'ladyandthetramp'
            };
                if (encryptLib.comparePassword(password, user.password)) {
                    // all good!
                    //console.log('matched');
                    done(null, user);
                } else {
                    //console.log('nope');
                    done(null, false, {message: 'Incorrect credentials.'});
                }
        }));


module.exports = passport;