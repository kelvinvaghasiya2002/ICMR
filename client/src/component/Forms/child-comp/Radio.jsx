import React from 'react'

function Radio({ CheckbobItems, name ,h3}) {
    return (
        <>
            <div className='block'>
                <h3 className='h3block'>{h3}</h3>
                <form>
                    {
                        CheckbobItems.map((item, index) => {
                            console.log(item)
                            return (
                                <div key={index}>
                                    <input type="radio" id={item} name={name} value={item} />
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


export default Radio