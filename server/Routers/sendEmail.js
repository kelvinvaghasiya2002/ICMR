import express, { response } from "express";
import nodemailer from "nodemailer"
const router = express.Router();
import otpGenerator from "otp-generator";
import {Otp} from "../Database/otp.js"

router.get("/getotp",(req,res)=>{
    console.log(req.query.email);
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
            // const src = ""
            const info = await transporter.sendMail({
                from: '<ICMR@gmail.com>', // sender address
                to: `${req.query.email}`, // list of receivers
                subject: "Here's the otp you requested", // Subject line
                html: `<h1>${OTP}</h1><br/> <br/> <p>If you did not request it kindly ignore.</>`, // html body
            });
    
            // console.log("Message sent: %s", info.messageId);
            
        }
        main().then((result)=>{

            const otp = new Otp({
                email:req.query.email,
                otp : OTP 
            })
            otp.save().then((response)=>{
                console.log(response);
            }).catch((err)=>{
                console.log(err);
            })

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