import React from 'react'

export default function Radio({ CheckbobItems, name, h3, onClick, byDefault }) {
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

                                    <label style={{ fontWeight: "400" }} htmlFor={item}>{item}</label><br />
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


