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


export const fetchCstTableDetail = () => {
    var forma3_table = localStorage.getItem("forma3_table");
    forma3_table = JSON.parse(forma3_table)
    console.log(typeof(forma3_table));
    const NamesInTable = forma3_table?.map((item,index)=> `${item.name} (${item.MemberID})`);
    return NamesInTable;
}
