import { useEffect } from "react"

const OutSideClick = (ref , setComponent)=>{
    useEffect(()=>{
        const handleClickOutside = (event)=>{
            if(!ref.current.contains(event.target)){
                setComponent(false)
            }
        }
        document.addEventListener("mousedown",handleClickOutside);

        return ()=>{
            document.removeEventListener("mousedown" , handleClickOutside);
        }
    },[])
}

export default OutSideClick;