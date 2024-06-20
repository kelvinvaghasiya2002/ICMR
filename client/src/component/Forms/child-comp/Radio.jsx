import React, { useState } from 'react'

export default function Radio({ CheckbobItems, name, h3, onClick, byDefault, other, otherArray }) {
    const [otherSpecify, setOtherSpecify] = useState("");

    const handleChange = (event) => {
        setOtherSpecify(event.target.value);
    }

    const handleRadioClick = (event) => {
        const otherSpecifyRadio = document.getElementById(event.target.value);
        console.log(otherSpecifyRadio.checked);
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
                                                    className='others' 
                                                    onInput={handleChange} 
                                                    onChange={onClick} 
                                                    type="text" 
                                                    name={name} 
                                                    value={CheckbobItems.includes(byDefault) ? "" : byDefault} 
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
                    {/* {
                        other &&
                        <>
                            <input id={`${name}otherSpecifyRadio`} onClick={handleRadioClick} value={otherSpecify} type="radio" name={name} />
                            <span style={{ fontSize: "1.2vw" }}>Other(specify)</span>
                            <input
                                className='others' onInput={handleChange} onChange={onClick} type="text" name={name} value={CheckbobItems.includes(byDefault) ? "" : byDefault} id={name} disabled />
                        </>
                    } */}
                </form>
            </div>

        </>
    )
}


