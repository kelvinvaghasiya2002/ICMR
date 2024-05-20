import { useEffect } from "react";

export const turnOffbutton = () => {
    useEffect(() => {
        const buttons = document.getElementById("nav-buttons");
        if (buttons)
            buttons.style.display = "none"
        return () => {
            if (buttons)
                buttons.style.display = "flex"
        }
    })
}



export const handleChange = (setter) =>{
    return (
        (event) => {
            const {name , value} = event.target;
            setter((prevValue)=>{
                return ({
                    ...prevValue,
                    [name] : value
                })
            })
        }
    )
} 
