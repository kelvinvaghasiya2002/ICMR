import React from 'react'
import { Link } from 'react-router-dom';

function CSTButton({ prevText, prev, nextText, next, formName, formData, validateForm }) {


    const handleSubmit = (e) => {
        if (validateForm && !validateForm()) {
            e.preventDefault();
            return;
        }
        localStorage.setItem(formName, JSON.stringify(formData));

        if(formName === "formc23"){
            const PartBLoop = JSON.parse(localStorage.getItem("PartBLoop"));
            const formc20 = JSON.parse(localStorage.getItem("formc20"))
            const formc21 = JSON.parse(localStorage.getItem("formc21"));
            const formc22 = JSON.parse(localStorage.getItem("formc22"));
            const formc23 = JSON.parse(localStorage.getItem("formc23"));

            const PartCLoop = {
                ...formc20 , ...formc21 , ...formc22 , ...formc23
            }

            if(PartBLoop.PartCLoop){
                PartBLoop.PartCLoop.push(PartCLoop);
            }else{
                PartBLoop.PartCLoop = [PartCLoop];
            }
            localStorage.setItem("PartBLoop", JSON.stringify(PartBLoop));
        }else{
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

            }else if(formName !== "formc20" && formName !== "formc21" && formName !== "formc22" && formName !== "formc23"){
                var PartBLoop = JSON.parse(localStorage.getItem("PartBLoop"));
                PartBLoop = {...PartBLoop , ...formData};
                localStorage.setItem("PartBLoop",JSON.stringify(PartBLoop));
            }
        }
    }

    return (
        <div className='buttons'>
            <button className='prevbtn'><Link to={prev}>{prevText}</Link></button>
            <Link to={next} onClick={handleSubmit} className='nextbtn'>{nextText}</Link>
        </div>
    )
}

export default CSTButton