const GoogleStrategy = require("passport-google-oauth20").Strategy;
// const TwitterStrategy = require("passport-twitter").Strategy;
// const FacebookStrategy = require("passport-facebook").Strategy;
const passport = require("passport");



passport.use(
  new GoogleStrategy(
    {
      
    },
    function (accessToken, refreshToken, profile, done) {
      done(null, profile);
    }
  )
);

// passport.use(
//   new TwitterStrategy(
//     {
//   clientID: TWITTER_App_ID,
//   clientSecret: TWITTER_APP_SECRET,
//   callbackURL: "/auth/twitter/callback",
// },
// function(accessToken, refreshToken, profile, done) {
//         done(null, profile);
    
//   }
//   )

// );

// passport.use(
//   new FacebookStrategy(
//     {
//       clientID: FACEBOOK_APP_ID,
//       clientSecret: FACEBOOK_APP_SECRET,
//       callbackURL: "/auth/facebook/callback",
//     },
//     function (accessToken, refreshToken, profile, done) {
//       done(null, profile);
//     }
//   )
// );

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});
