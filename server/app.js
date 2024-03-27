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

mongoose.connect(mongoURL).then(()=>{
    console.log("Database connected...");
}).catch((err)=>{
    console.log(err);
})

const app = express();

app.use(session({
    secret : process.env.SESSION_SECRET,
    resave : false,
    saveUninitialized : true,
    cookie : {
        maxAge : 1000*60*3
    }
}))

app.use(passport.initialize());
app.use(passport.session());


app.use(cors(
    {
        origin : [   `${client}`   ,   `${client}/sign-up`   ,   `${client}/sign-in`],
        methods : "GET,POST,PUT,DELETE",
        credentials : true
    }
))

app.use(router)
app.use(emailRouter)
app.use(verifyEmailRouter)
app.use(localAuthRouter)


// app.get("/getotp",(req,res)=>{
//     const response = sendEmail().then((result)=>{
//         return result
//     }).catch((err)=>{
//         return err
//     })
//     console.log(response);
//     res.json({
//         data : sendEmail()
//     })
// })

app.listen(3000,()=>{
    console.log("server is running on port 3000");
})