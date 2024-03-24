import  GoogleStrategy  from 'passport-google-oauth20';
import passport from 'passport';

const  GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
const  GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;


passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:3000/auth/google/callback",
    scope : ["profile","email"]
},
    function (accessToken, refreshToken, profile, cb) {
        return cb(null, profile);
    }
));


passport.serializeUser((user, cb) => {
    cb(null, user);
})

passport.deserializeUser((user, cb) => {
    cb(null, user);
})
