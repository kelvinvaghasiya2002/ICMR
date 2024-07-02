import React, { useEffect, useState } from 'react'

function Checkbox({ CheckbobItems, name, h3, other, time, setFunction, StateValue, array }) {
    // console.log(name);
    const [otherSpecify, setOtherSpecify] = useState("");

    useEffect(() => {
        if (!other && array.length === 0) {
            array = CheckbobItems.map(() => "");
            console.log(array);
        }else if(other && array.length === 1){
            for(var i=0 ; i<= CheckbobItems.length ; i++){
                array.push("");
            }
        }
        
    }, [])

    const handleChange = (event) => {
        setOtherSpecify(event.target.value);
        array[array.length - 1] = event.target.value;
    }

    const handleClick = (index) => {
        return (
            (event) => {
                const { value } = event.target;
                if (array[index]==="") {
                    // console.log(value);
                    // array = array.filter(item => {
                    //     return item !== value
                    // })
                    array[index] = value;
                } else {
                    // array.push(value)
                    array[index] = "";
                }

                StateValue = {
                    ...StateValue,
                    [event.target.name]: array
                }
                setFunction(StateValue)
            }
        )
    }

    const handleCheckboxClick = () => {
        const otherSpecifyCheckBox = document.getElementById(`${name}otherSpecifyCheckBox`);
        if (otherSpecifyCheckBox.checked == true) {
            console.log(otherSpecifyCheckBox.checked);
            document.getElementById(name).disabled = false;
        } else {
            setOtherSpecify("");
            array[array.length-1] = "";
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
                                <div key={index} style={{ display: "flex", alignItems: "flex-start", marginBottom: "0.8vw" }}>

                                    {
                                        (array.includes(item)) ?
                                            <input onChange={handleClick(index)} type="checkbox" id={item} name={name} value={item} checked />
                                            :
                                            <input onChange={handleClick(index)} type="checkbox" id={item} name={name} value={item} />
                                    }

                                    <label style={{ fontSize: "1.1vw", fontWeight: "400", marginLeft: "0.25vw", color: "gray" }} htmlFor={item}>{item}</label>

                                    <br />
                                    {
                                        time &&
                                        <input type="time" className='blockinput others' />
                                    }

                                </div>
                            )
                        }

                        )


                    }
                    {
                        other &&
                        <>
                            {
                                (array[array.length-1] !== "")?
                                <input id={`${name}otherSpecifyCheckBox`} onChange={handleCheckboxClick} value={otherSpecify} type="checkbox" name="checkbox" />
                                :
                                <input id={`${name}otherSpecifyCheckBox`} onChange={handleCheckboxClick} value={otherSpecify} type="checkbox" name="checkbox" checked/>
                            }
                            <span style={{ fontSize: "1.1vw", color: "gray", paddingLeft: "0.2vw" }}>Other (Specify)</span>
                            <input
                                className='others blockinput' onChange={handleChange} type="text" name="otherSpecify" value={array[array.length-1]} id={name} disabled />
                        </>

                    }
                </form>
            </div>

        </>
    )
}


export default Checkbox