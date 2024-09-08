import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import CreateEmergenciesTable from '../../../utils/CreateEmergenciesTable';

function Buttons({ prevText, prev, nextText, next, formName, formData, validateForm, onClick }) {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = React.useState(false);

    const handleSubmit = async (e) => {
        setIsLoading(true);
        if (validateForm && !validateForm()) {
            e.preventDefault();
            setIsLoading(false);
            return;
        }
        if (onClick) {
            await onClick();
        }

        if (next === "/death") {
            CreateEmergenciesTable();
        }

        var CompleteForm = localStorage.getItem("CompleteForm");
        if (formName === "formac4") {
            var formac4 = localStorage.getItem("formac4");
            formac4 = JSON.parse(formac4);

            if (CompleteForm) {
                CompleteForm = JSON.parse(CompleteForm);
                const data = { ...CompleteForm, ...formac4 };
                localStorage.setItem("CompleteForm", JSON.stringify(data));
            } else {
                localStorage.setItem("CompleteForm", JSON.stringify(formac4));
            }
        } else {
            if (CompleteForm) {
                CompleteForm = JSON.parse(CompleteForm);
                const data = { ...CompleteForm, ...formData };
                localStorage.setItem("CompleteForm", JSON.stringify(data));
            } else {
                localStorage.setItem("CompleteForm", JSON.stringify(formData));
            }
            localStorage.setItem(formName, JSON.stringify(formData));
        }

        // if (formName === "forma3") {
        //     const forma3_table = JSON.parse(localStorage.getItem("forma3_table"));
        //     localStorage.setItem("forma3_table_duplicate", JSON.stringify(forma3_table));
        // }

        // if (formName === "forma15") {
        //     const emergency_table = JSON.parse(localStorage.getItem("forma3_table_duplicate"));
        //     const death_table = JSON.parse(localStorage.getItem("forma15_table"));
        //     const MemberID = JSON.parse(localStorage.getItem("forma2")).AB5;
        //     console.log(MemberID);


        //     for (let i = 0; i < death_table.length; i++) {
        //         emergency_table.push({ name: death_table[i].name, age: death_table[i].age, sex: death_table[i].sex, MemberID: `${MemberID}_${emergency_table.length + 1}` })
        //     }
        //     localStorage.setItem("forma3_table", JSON.stringify(emergency_table));
        // }
        setIsLoading(false);

        navigate(next); // navigate is a function that navigates to the next page
    }

    return (
        <div className='buttons'>
            <button className='prevbtn'><Link to={prev}>{prevText}</Link></button>
            {/* <Link to={next} onClick={handleSubmit} className='nextbtn'>{nextText}</Link> */}
            <button onClick={handleSubmit} className='nextbtn' disabled={isLoading} >{isLoading ? "Loading..." : nextText}</button>
        </div>
    )
}

export default Buttons
