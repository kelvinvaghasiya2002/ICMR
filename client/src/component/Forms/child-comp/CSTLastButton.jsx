import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import CSTPopUp from './CSTPopUp';



function CSTLastButton({ prev, from, formName, formData }) {
    const [popup, setPopup] = useState(false);

    const handleSubmit = () => {
        var CompleteForm = localStorage.getItem("CompleteForm");
        if (CompleteForm) {
            CompleteForm = JSON.parse(CompleteForm);
            var AC3_table = JSON.parse(localStorage.getItem("forma3_table"));
            var AC15_table = JSON.parse(localStorage.getItem("forma15_table"));
            var data = { ...CompleteForm, ...formData , AC3_table, AC15_table };
            localStorage.setItem("CompleteForm", JSON.stringify(data))
            localStorage.setItem("CSTCompleteForm", JSON.stringify(data));
        } else {
            localStorage.setItem("CSTCompleteForm", JSON.stringify(formData));
        }
        localStorage.setItem(formName, JSON.stringify(formData));

        if(formName === "formb16"){
            const Name_and_Emergencies = JSON.parse(localStorage.getItem("Name_and_Emergencies"));
            const PartBLoop = {
                "Name" : Name_and_Emergencies[0]?.Name,
                "Age" : Name_and_Emergencies[0]?.Age,
                "Emergency" : Name_and_Emergencies[0]?.Emergency,
                "MemberID" : Name_and_Emergencies[0]?.MemberID,
                ...formData
            }
            localStorage.setItem("PartBLoop",JSON.stringify(PartBLoop));
        }

        // if (formName === "formh31") {
        if (formName === "formf27" || formName === "formb16") {
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