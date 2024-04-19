import express from "express";
import passport from "passport";

const router=express.Router();


router.get("/google",passport.authenticate("google" , ["profile","email"]));


router.get("/login/success", (req, res) => {
    if (req.user) {
        res.status(200).json({
            user: req.user
        })
    } else {
        res.status(403).json({
            error: "You are not Autherized to access this resource"
        })
    }
})

router.get("/login/failed", (req, res) => {
    res.status(401).json({
        error: "Login failed!"
    })
})

router.get("/auth/google/callback", passport.authenticate("google", {
    successRedirect: process.env.CLIENT_URL,
    failureRedirect: "/login/failed"
}))



router.get("/logout",(req,res)=>{
    req.logOut();
    res.redirect("https://icmr.vercel.app/")
})


export default router;