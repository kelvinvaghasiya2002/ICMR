import React, { useState } from 'react'

export default function Radio({ CheckbobItems, name, h3, onClick, byDefault, other }) {
    const [otherSpecify, setOtherSpecify] = useState("");

    const handleChange = (event) => {
        setOtherSpecify(event.target.value);
    }

    const handleRadioClick = ()=>{
        const otherSpecifyRadio = document.getElementById(`${name}otherSpecifyRadio`);
        console.log(otherSpecifyRadio.checked);
        if(otherSpecifyRadio.checked == true){
            document.getElementById(name).disabled = false;
        }else{
            document.getElementById(name).disabled = true;
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
                                        (byDefault === item) ?
                                            <input type="radio" id={item} name={name} value={item} onClick={onClick} checked />
                                            :
                                            <input type="radio" id={item} name={name} value={item} onClick={onClick} />

                                    }

                                    <label style={{ fontWeight: "400", marginLeft: "0.25vw" }} htmlFor={item}>{item}</label><br />
                                </div>
                            )
                        }

                        )

                    }
                    {
                        other &&
                        <>
                            <input id={`${name}otherSpecifyRadio`} onClick={handleRadioClick} value={otherSpecify} type="radio" name={name} />
                            <input
                                style={{ borderLeft: "none", borderRight: "none", borderTop: "none" }}
                                className='blockinput others' onInput={handleChange} onChange={onClick} type="text" name={name} placeholder="Other (Specify)" value={byDefault} id={name} disabled />
                        </>

                    }
                </form>
            </div>

        </>
    )
}


