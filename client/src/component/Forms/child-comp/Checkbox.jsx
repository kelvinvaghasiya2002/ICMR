import React from 'react'

function Checkbox({ CheckbobItems, name, h3 , other,time, setFunction }) {
    const handleClick = (event) => {
        console.log(event.target.name , event.target.value);
        const name =  event.target.name;
        // console.log(name);
        setFunction((prevValue)=>{
            // for(const key in prevValue){
            //     console.log(prevValue.key);
            // }
            console.log(prevValue.name);
            return prevValue;
        })
    }
    return (
        <>
            <div className='block'>
                <h3 className='h3block'>{h3}</h3>
                <form>
                    {
                        CheckbobItems.map((item, index) => {
                            {/* console.log(item) */ }
                            return (
                                <div key={index} style={{ display: "flex", alignItems: "center" }}>

                                    <input onClick={handleClick} type="checkbox" id={item} name={name} value={item} />

                                    <label style={{ fontWeight: "400", marginLeft: "0.25vw" }} htmlFor={item}>{item}</label>

                                    <br />
                                    {
                                        time &&
                                    <input type="time"  className='blockinput others'/>
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