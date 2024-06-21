import React from 'react'
import { Link } from 'react-router-dom'
import OnSubmitForm from '../../../utils/OnSubmitForm';

function LastButton({ prev, formName, formData, MainForm }) {
    const handleSubmit = () => {
        var CompleteForm = localStorage.getItem("CompleteForm");

        if (CompleteForm) {
            CompleteForm = JSON.parse(CompleteForm)
            const data = { ...CompleteForm, ...formData }
            localStorage.setItem("CompleteForm", JSON.stringify(data))
        } else {
            localStorage.setItem("CompleteForm", JSON.stringify(formData))
        }
        localStorage.setItem(formName, JSON.stringify(formData));

        if (MainForm == "HFAT-1") {
            const completeform = localStorage.getItem("CompleteForm");
            const table1 = localStorage.getItem("C1")
            const table2 = localStorage.getItem("E1")
            const table3 = localStorage.getItem("E2")
            const table4 = localStorage.getItem("I2")
            console.log(JSON.parse(completeform), JSON.parse(table1), JSON.parse(table2), JSON.parse(table3), JSON.parse(table4));

            OnSubmitForm(completeform, table1, table2, table3, table4, MainForm);
            const localstorage = {...localStorage};
            for (var key in localstorage){
                if(key==="token"){
                    continue;
                }else{
                    console.log(localstorage[key]);
                    localStorage.removeItem(key);
                }
            }
        }

    }

    return (
        <div className='buttons'>
            <button className='prevbtn'><Link to={prev}>Previous</Link></button>
            <button onClick={handleSubmit} className='nextbtn'><Link to="/">Submit</Link></button>
        </div>
    )
}

export default LastButton