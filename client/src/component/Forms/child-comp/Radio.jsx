import React, { useState } from 'react'

export default function Radio({ CheckbobItems, name, h3, onClick, byDefault, other, otherArray , setter, style ,st}) {
    const [otherSpecify, setOtherSpecify] = useState("");


    const handleRadioClick = (event) => {
        // const otherSpecifyRadio = document.getElementById(event.target.value);
            // document.getElementById(`${event.target.value}otherInput`).disabled = false;

            if(document.getElementById(`${event.target.value}otherInput`)){
                document.getElementById(`${event.target.value}otherInput`).disabled = false;
            }
            
            CheckbobItems.forEach(element => {
                if(element !== event.target.value){
                    if(document.getElementById(`${element}otherInput`)){
                        document.getElementById(`${element}otherInput`).disabled = true;
                    }
                }
            });
    }

    return (
        <>
            <div className='block' style={style}>
                <h3 className='h3block'>{h3}</h3>
                <form>
                    {
                        CheckbobItems.map((item, index) => {
                            return (
                                <div key={index} className='radio_opts'>
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
                                                                    [event.target.name] : `${event.target.value}`
                                                                }
                                                            )
                                                        })
                                                    }} 
                                                    style={st}
                                                    type="text" 
                                                    name={name}
                                                    // value={document.getElementById(item)?.checked ? otherSpecify : ""}
                                                    value={byDefault}
                                                    id={`${item}otherInput`} 
                                                    disabled
                                                    />
                                            </>
                                            :
                                            <>
                                                {
                                                    (byDefault === item) ?
                                                        <input type="radio" id={item} name={name} value={item} onClick={onClick} checked />
                                                        :
                                                        <input type="radio" id={item} name={name} value={item} onClick={onClick} />

                                                }

                                                <label className='radio_labels' htmlFor={item}>{item}</label><br />
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


