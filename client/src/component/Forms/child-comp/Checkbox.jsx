import React from 'react'

function Checkbox({ CheckbobItems, name, h3, other, time, setFunction, StateValue, array }) {
    const handleClick = (event) => {
        const { value } = event.target;
        if (array.includes(value)) {
            array = array.filter(item => {
                return item !== value
            })
        } else {
            array.push(value)
        }

        StateValue = {
            ...StateValue,
            [event.target.name]: array
        }
        setFunction(StateValue)
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
                                        (array.includes(item)) ?
                                            <input onChange={handleClick} type="checkbox" id={item} name={name} value={item} checked />
                                            :
                                            <input onChange={handleClick} type="checkbox" id={item} name={name} value={item} />
                                    }

                                    <label style={{ fontWeight: "400", marginLeft: "0.25vw" }} htmlFor={item}>{item}</label>

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
                        <input
                            className='blockinput others' type="text" name={name} placeholder="Other (Specify)" />

                    }
                </form>
            </div>

        </>
    )
}


export default Checkbox