import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import CSTPopUp from './CSTPopUp';



function CSTLastButton({ prev, from, formName, formData }) {
    const [popup, setPopup] = useState(false);

    const handleSubmit = () => {
        var CompleteForm = localStorage.getItem("CompleteForm");
        if (CompleteForm) {
            CompleteForm = JSON.parse(CompleteForm);
            const data = { ...CompleteForm, ...formData };
            localStorage.setItem("CSTCompleteForm", JSON.stringify(data));
        } else {
            localStorage.setItem("CSTCompleteForm", JSON.stringify(formData));
        }
        localStorage.setItem(formName, JSON.stringify(formData));

        if (formName === "formh31") {
            var Name_and_Emergencies = JSON.parse(localStorage.getItem("Name_and_Emergencies"));
            Name_and_Emergencies = Name_and_Emergencies.filter((item, index) => index !== 0);
            localStorage.setItem("Name_and_Emergencies", JSON.stringify(Name_and_Emergencies));

            var PartBLoop = JSON.parse(localStorage.getItem("PartBLoop"));
            PartBLoop = {...PartBLoop , ...formData};
            localStorage.setItem("PartBLoop",JSON.stringify(PartBLoop));
        }
        setPopup(true);
    }


    return (
        <div className="buttons">

            <button className="prevbtn">
                <Link to={prev}>Previous</Link>
            </button>

            <button
                onClick={handleSubmit}
                style={{ cursor: "pointer" }}
                className="nextbtn"
            >
                Submit
            </button>
            {popup && (
                <CSTPopUp
                    setPopup={setPopup}
                    formName={formName}
                    lastForm={formData}
                    from={from}
                />
            )}
        </div>
    )
}

export default CSTLastButton