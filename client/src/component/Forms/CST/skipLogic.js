import { useEffect } from "react"

const skipLogic = (check , setter , formValue) =>{
    useEffect(()=>{
        if(check === "No") {
            setter((prevValue)=>{
                return {...prevValue, AC8_1_if: "" , AC8_2 : ""}
            })
        }
    },[formValue])
}


export  default skipLogic