const GoogleStrategy = require("passport-google-oauth20").Strategy;
// const TwitterStrategy = require("passport-twitter").Strategy;
// const FacebookStrategy = require("passport-facebook").Strategy;
const passport = require("passport");

// const GOOGLE_CLIENT_ID =
//   "13891966248-p5o9n8d33slcv8dhnsv7ljp1ba4k7s6t.apps.googleusercontent.com";
// const GOOGLE_CLIENT_SECRET = "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";

// TWITTER_App_ID = "your id";
// TWITTER_APP_SECRET = "your id";

// FACEBOOK_APP_ID = "726030618886450";
// FACEBOOK_APP_SECRET = "cf3a9d450dd84fbdd44b8bd683cc82ab";

passport.use(
  new GoogleStrategy(
    {
      clientID:  "13891966248-p5o9n8d33slcv8dhnsv7ljp1ba4k7s6t.apps.googleusercontent.com",
      clientSecret:  "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",
      callbackURL: "/auth/google/callback",
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
