import React from 'react'

function Checkbox({CheckbobItems}) {
    return (
        <form>
            {
                CheckbobItems.map((item, index) => {
                    console.log(item)
                    return (
                        <div key={index}>
                            <input type="checkbox" id={item} name={item} value={item} />
                            <label htmlFor={item}>{item}</label><br />
                        </div>
                    )
                })
            }
        </form>
    )
}

export default Checkbox