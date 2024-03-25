import mongoose from "mongoose";

const otpSchema = new mongoose.Schema({
    email : {
        type : String
    },
    otp : {
        type : String
    },
    createdAt : {
        type : Date ,
        default : Date.now,
        expires : 30
    }
})

export const Otp = new mongoose.model("otp",otpSchema);