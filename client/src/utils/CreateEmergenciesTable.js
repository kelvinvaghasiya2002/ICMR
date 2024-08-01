

const CreateEmergenciesTable = () => {

    const Name_and_Emergencies = [];

    const forma3 = JSON.parse(localStorage.getItem("forma3"));
    const forma3_table = JSON.parse(localStorage.getItem("forma3_table"));

    const findRow = (name) => {
        for (let i = 0; i < forma3_table.length; i++) {
            if (forma3_table[i].name === name) {
                return forma3_table[i];
            }
        }
    }

    if (forma3.AC6_2.length !== 0) {
        for (let i = 0; i < forma3.AC6_2.length; i++) {
            forma3.AC6_2[i] !== "" && 
            Name_and_Emergencies.push({
                "No.": Name_and_Emergencies.length + 1,
                "Name": forma3.AC6_2[i],
                "Age": findRow(forma3.AC6_2[i])?.age,
                "MemberID": findRow(forma3.AC6_2[i])?.MemberID,
                "Emergency": "Trauma",
            })
        }
    }

    if (forma3.AC7_2.length !== 0) {
        for (let i = 0; i < forma3.AC7_2.length; i++) {
            forma3.AC7_2[i] !== "" && 
            Name_and_Emergencies.push({
                "No.": Name_and_Emergencies.length + 1,
                "Name": forma3.AC7_2[i],
                "Age": findRow(forma3.AC7_2[i])?.age,
                "MemberID": findRow(forma3.AC7_2[i])?.MemberID,
                "Emergency": "Burn",
            })
        }
    }

    if (forma3.AC8_2.length !== 0) {
        for (let i = 0; i < forma3.AC8_2.length; i++) {
            forma3.AC8_2[i] && 
            Name_and_Emergencies.push({
                "No.": Name_and_Emergencies.length + 1,
                "Name": forma3.AC8_2[i],
                "Age": findRow(forma3.AC8_2[i])?.age,
                "MemberID": findRow(forma3.AC8_2[i])?.MemberID,
                "Emergency": "STEMI",
            })
        }
    }

    if (forma3.AC9_2.length !== 0) {
        for (let i = 0; i < forma3.AC9_2.length; i++) {
            forma3.AC9_2[i] !== "" &&
            Name_and_Emergencies.push({
                "No.": Name_and_Emergencies.length + 1,
                "Name": forma3.AC9_2[i],
                "Age": findRow(forma3.AC9_2[i])?.age,
                "MemberID": findRow(forma3.AC9_2[i])?.MemberID,
                "Emergency": "Stroke",
            })
        }
    }
    if (forma3.AC10_2.length !== 0) {
        for (let i = 0; i < forma3.AC10_2.length; i++) {
            forma3.AC10_2[i] !== "" &&
            Name_and_Emergencies.push({
                "No.": Name_and_Emergencies.length + 1,
                "Name": forma3.AC10_2[i],
                "Age": findRow(forma3.AC10_2[i])?.age,
                "MemberID": findRow(forma3.AC10_2[i])?.MemberID,
                "Emergency": "Acute Respiratory Illness",
            })
        }
    }


    if (forma3.AC11_3.length !== 0) {
        for (let i = 0; i < forma3.AC11_3.length; i++) {
            forma3.AC11_3[i] !== "" &&
            Name_and_Emergencies.push({
                "No.": Name_and_Emergencies.length + 1,
                "Name": forma3.AC11_3[i],
                "Age": findRow(forma3.AC11_3[i])?.age,
                "MemberID": findRow(forma3.AC11_3[i])?.MemberID,
                "Emergency": "Maternal & Neonatal Emergency",
            })
        }

        for (let i = 0; i < forma3.AC11_5.length; i++) {
            forma3.AC11_5[i] !== "" &&
            Name_and_Emergencies.push({
                "No.": Name_and_Emergencies.length + 1,
                "Name": forma3.AC11_5[i],
                "Age": findRow(forma3.AC11_5[i])?.age,
                "MemberID": findRow(forma3.AC11_5[i])?.MemberID,
                "Emergency": "Maternal & Neonatal Emergency",
            })
        }
    }

    if (forma3.AC12_2.length !== 0) {
        for (let i = 0; i < forma3.AC12_2.length; i++) {
            forma3.AC12_2[i] !== "" &&
            Name_and_Emergencies.push({
                "No.": Name_and_Emergencies.length + 1,
                "Name": forma3.AC12_2[i],
                "Age": findRow(forma3.AC12_2[i])?.age,
                "MemberID": findRow(forma3.AC12_2[i])?.MemberID,
                "Emergency": "Snakebite",
            })
        }
    }

    if (forma3.AC13_2.length !== 0) {
        for (let i = 0; i < forma3.AC13_2.length; i++) {
            forma3.AC13_2[i] !== "" &&
            Name_and_Emergencies.push({
                "No.": Name_and_Emergencies.length + 1,
                "Name": forma3.AC13_2[i],
                "Age": findRow(forma3.AC13_2[i])?.age,
                "MemberID": findRow(forma3.AC13_2[i])?.MemberID,
                "Emergency": "Poisoning",
            })
        }
    }

    if (forma3.AC14_2.length !== 0) {
        for (let i = 0; i < forma3.AC14_2.length; i++) {
            forma3.AC14_2[i] !== "" &&
            Name_and_Emergencies.push({
                "No.": Name_and_Emergencies.length + 1,
                "Name": forma3.AC14_2[i],
                "Age": findRow(forma3.AC14_2[i])?.age,
                "MemberID": findRow(forma3.AC14_2[i])?.MemberID,
                "Emergency": "Other",
            })
        }
    }


    localStorage.setItem("Name_and_Emergencies", JSON.stringify(Name_and_Emergencies));
}

export default CreateEmergenciesTable;