import React from 'react'

function Checkbox({ CheckbobItems, name ,h3 , onClick}) {
    return (
        <>
            <div className='block'>
                <h3 className='h3block'>{h3}</h3>
                <form>
                    {
                        CheckbobItems.map((item, index) => {
                            {/* console.log(item) */}
                            return (
                                <div key={index}>
                                    <input onClick={onClick} type="checkbox" id={item} name={name} value={item} />
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


export default Checkbox