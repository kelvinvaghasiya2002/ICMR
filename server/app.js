import express from "express";
import mongoose from "mongoose";
import 'dotenv/config'
import cors from "cors"
import session from "express-session";
import passport from "passport";
import router from "./AuthRouters/auth.js";
import emailRouter from "./Routers/sendEmail.js";
import verifyEmailRouter from "./Routers/verifyEmail.js";
import "./AuthRouters/passport.js"
import localAuthRouter from "./AuthRouters/localAuth.js";
const mongoURL = process.env.MONGO_URL;
const client = process.env.CLIENT_URL

mongoose.connect(mongoURL).then(() => {
    console.log("Database connected...");
}).catch((err) => {
    console.log(err);
})

const app = express();

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 1000 * 60
    }
}))

app.use(passport.initialize());
app.use(passport.session());


// app.use(cors(
//     {
//         // origin : [   `${client}`   ,   `${client}/sign-up`   ,   `${client}/sign-in`],
//         origin : [ "https://icmr.vercel.app/" ],
//         methods : "GET,POST,PUT,DELETE",
//         credentials : true
//     }
// ))

// app.use(function (req, res, next) {
//     //Enabling CORS
//     res.header("Access-Control-Allow-Origin", "https://icmr.vercel.app");
//     res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-client-key, x-client-token, x-client-secret, Authorization");
//     res.header("Access-Control-Allow-Credentials", "true");
//     next();
// });

app.use(cors());

app.use(router)
app.use(emailRouter)
app.use(verifyEmailRouter)
app.use(localAuthRouter)

app.get("/", (req, res) => {
    res.json({
        message: "this site has been deployed!"
    })
})


app.listen(3000, () => {
    console.log("server is running on port 3000");
})