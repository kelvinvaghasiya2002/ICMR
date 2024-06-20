import React, { useState } from 'react'

export default function Radio({ CheckbobItems, name, h3, onClick, byDefault, other, otherArray , setter }) {
    const [otherSpecify, setOtherSpecify] = useState("");

    const handleRadioClick = (event) => {
        const otherSpecifyRadio = document.getElementById(event.target.value);
        if (otherSpecifyRadio.checked == true) {
            document.getElementById(`${event.target.value}otherInput`).disabled = false;
        } else {
            document.getElementById(`${event.target.value}otherInput`).disabled = true;
        }
    }

    return (
        <>
            <div className='block'>
                <h3 className='h3block'>{h3}</h3>
                <form>
                    {
                        CheckbobItems.map((item, index) => {
                            return (
                                <div key={index} style={{ display: "flex", alignItems: "center" }}>
                                    {
                                        (otherArray && otherArray[index]) ?
                                            <>
                                                <input
                                                    id={item}
                                                    onClick={handleRadioClick}
                                                    value={item}
                                                    type="radio"
                                                    name={name} />

                                                <span style={{ fontSize: "1.2vw" }}>{item}</span>

                                                <input
                                                    className='others blockinput' 
                                                    onChange={(event)=>{
                                                        setOtherSpecify(event.target.value);
                                                        setter((prevValue)=>{
                                                            return (
                                                                {
                                                                    ...prevValue,
                                                                    [event.target.name] : `${item} : ${event.target.value}`
                                                                }
                                                            )
                                                        })
                                                    }} 
                                                    type="text" 
                                                    name={name}
                                                    value={document.getElementById(item)?.checked ? otherSpecify : ""}
                                                    id={`${item}otherInput`} 
                                                    disabled />
                                            </>
                                            :
                                            <>
                                                {
                                                    (byDefault === item) ?
                                                        <input type="radio" id={item} name={name} value={item} onClick={onClick} checked />
                                                        :
                                                        <input type="radio" id={item} name={name} value={item} onClick={onClick} />

                                                }

                                                <label style={{ fontWeight: "400", marginLeft: "0.25vw" }} htmlFor={item}>{item}</label><br />
                                            </>
                                    }
                                </div>
                            )
                        }

                        )

                    }
                </form>
            </div>

        </>
    )
}


