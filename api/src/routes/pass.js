const LocalStrategy = require("passport-local")
const bcrypt = require("bcrypt")
const { Router } = require("express");
const router = Router();
const server = require("./users")
const passport = require("passport")
const { serializeUser, deserializeUser } = require("passport")
const e = require("express");

passport.use(new LocalStrategy(
    function (email, password, done) {
        User.findOne({ username: email }, function (err, user) {
            if (err) { return done(err); }
            if (!user) { return done(null, false); }
            if (!user.verifyPassword(password)) { return done(null, false); }
            return done(null, user);
        });
    }
));
passport.serializeUser(function (user, done) {
    done(null, user.id);
});

passport.deserializeUser(function (id, done) {
    User.findById(id, function (err, user) {
        done(err, user);
    });
});

module.exports = passport