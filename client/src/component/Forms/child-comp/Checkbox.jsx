import React from 'react'

function Checkbox({ CheckbobItems, name }) {
    return (
        <form>
            {
                CheckbobItems.map((item, index) => {
                    console.log(item)
                    return (
                        <div key={index}>
                            <input type="radio" id={item} name={name} value={item} />
                            <label style={{fontWeight : "400"}} htmlFor={item}>{item}</label><br />
                        </div>
                    )
                }

                )

            }
        </form>
    )
}


export default Checkbox