import express from "express";
import nodemailer from "nodemailer"
const router = express.Router();
import otpGenerator from "otp-generator";
import {Otp} from "../Database/otp.js"

router.get("/getotp",(req,res)=>{
    const OTP = otpGenerator.generate(6, { upperCaseAlphabets: false, specialChars: false , lowerCaseAlphabets: false });
    const sendEmail = async () => {
        const transporter = nodemailer.createTransport({
            host: 'smtp-relay.brevo.com',
            port: 587,
            auth: {
                user: '210305105039@paruluniversity.ac.in',
                pass: '8yJx3OBGdLrCp06j'
            }
        });
    
    
        async function main() {
            const src = "./assets/ICMR_Logo.png"
            const info = await transporter.sendMail({
                from: '<ICMR@gmail.com>', // sender address
                to: "kelvinvaghasiya50@gmail.com", // list of receivers
                subject: "Here's the otp you requested", // Subject line
                html: `<h1>${OTP}</h1>`, // html body
            });
    
            // console.log("Message sent: %s", info.messageId);
            
        }
        main().then((result)=>{

            const otp = new Otp({
                otp : OTP 
            })
            otp.save();

            res.json({
                success : "otp sent successfully"
            })
        }).catch((err)=>{
            res.json({
                error : err
            })
        })
    }
    sendEmail().then(()=>{
        console.log("Done");
    }).catch((err)=>{
        console.log(err);
    })
})

export default router;