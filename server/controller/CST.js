import { CSTFORM } from "../Database/CST.js";


const CSTConroller = (req,res)=>{
    const {CompleteForm} = req.body;
    CSTFORM.create(CompleteForm).then((response)=>{
        res.status(200).json({
            success : "Data submitted successfully!",
            response : response
        });
    }).catch((err)=>{
        console.log(err);
        res.status(500).json({
            error : "Error occured in saving data."
        })
    })
}

export default CSTConroller;