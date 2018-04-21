const express = require("express"); // Common js modules
const passport = require("passport");
const googleStrategy = require("passport-google-oauth20").Strategy;
const keys = require("./config/keys");

const app = express();

// root route handler - Dummy Route
/* app.get("/", (req, res) => {
  res.send({ bye: "buddy" });
}); */

//informs passport of how to make use of the strategy
// Generic register to authenticate user with a very specific service
passport.use(
    new googleStrategy({
            clientID: keys.googleClientID,
            clientSecret: keys.googleClientSecret,
            callbackURL: "/auth/google/callback"
        },
        accessToken => {
            console.log(accessToken);
        }
    )
);

app.get(
    "/auth/google/",
    passport.authenticate("google", {
        scope: ["profile", "email"]
    })
);

// Dynamically binds the port based on the underlying environment
const PORT = process.env.PORT || 5000; // boolean
app.listen(PORT);