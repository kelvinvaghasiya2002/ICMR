import React from 'react'

export default function Radio({ CheckbobItems, name, h3, onClick, byDefault,other}) {
    return (
        <>
            <div className='block'>
                <h3 className='h3block'>{h3}</h3>
                <form>
                    {
                        CheckbobItems.map((item, index) => {
                            return (
                                <div key={index} style={{display : "flex", alignItems : "center"}}>
                                    {
                                        (byDefault === item) ?
                                            <input type="radio" id={item} name={name} value={item} onClick={onClick} checked />
                                            :
                                            <input type="radio" id={item} name={name} value={item} onClick={onClick} />

                                    }

                                    <label style={{ fontWeight: "400",marginLeft: "0.25vw" }} htmlFor={item}>{item}</label><br />
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


